import express from 'express';
import { createEntity } from '../helpers/create-entity';
import { codeLength, createJoinCode } from '../helpers/create-join-code';
import { GenericDAO } from '../models/generic.dao';
import { Group } from '../models/group';
import { User } from '../models/user';
import { encrypt, decrypt } from '../services/crypto.service';
import { filterAndSortMensaVisits } from './mensa-visits';

const router = express.Router();

// Get a group by groupID
router.get('/:id', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  let group = await groupDAO.findOne({ id: req.params.id });

  if (!group) {
    res.status(404).json({});
    return;
  }

  group = await filterAndSortMensaVisits(group);
  await groupDAO.update(group);

  res.status(200).json({ ...group, name: decrypt(group!.name) });
});

// Get a group by joincode or groups of user
router.get('/', async (req, res) => {
  const filter: Partial<Group> = {};
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  //Filter by joinCode
  if (req.query.joincode) {
    filter.joinCode = <string>req.query.joincode;
    filter.joinCode = filter.joinCode.toUpperCase();
  }

  let groups: Group[];

  if (req.query.scope) {
    if (req.query.scope === 'me') {
      const userDAO: GenericDAO<User> = req.app.locals.userDAO;
      const userFilter: Partial<User> = { id: res.locals.user.id };
      const user = await userDAO.findOne(userFilter);

      const memberships = user!.groupMemberships || [];
      const groupsOrNull = await Promise.all(memberships.map(async groupid => await groupDAO.findOne({ id: groupid })));
      groups = <Group[]>groupsOrNull.filter(groupOrNull => !!groupOrNull);
    } else {
      return res.status(405).json({ message: 'Unkown scope' });
    }
  } else {
    groups = await groupDAO.findAll(filter);
  }

  try {
    groups = await Promise.all(groups.map(g => filterAndSortMensaVisits(g)));
    groups = groups.map(group => {
      return { ...group, name: decrypt(group.name) };
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
    return;
  }

  res.json(groups);
});

router.post('/', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const { image, joinCode, name, id, createdAt } = req.body.group;
  const { id: serverID, createdAt: serverCreatedAt } = createEntity();

  if (!name) res.sendStatus(400);

  const createdGroup = await groupDAO.create({
    id: id ?? serverID,
    createdAt: createdAt ?? serverCreatedAt,
    name: encrypt(name),
    joinCode: joinCode ?? createJoinCode(codeLength),
    image: image,
    owner: res.locals.user.id
  });

  console.log(createdGroup);
  res.status(201).json({ ...createdGroup, name: decrypt(createdGroup.name) });
});

router.patch('/:id', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  await groupDAO.update({ id: req.params.id, name: encrypt(res.locals.group.name) });
  res.status(200).end();
});

router.delete('/:id', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  await groupDAO.deleteOne(req.params.id);
  res.status(200).end();
});

router.get('/:id/members', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const userDAO: GenericDAO<User> = req.app.locals.userDAO;
  const group = await groupDAO.findOne({ id: req.params.id });
  if (!group) return res.status(404).end();
  // TODO: findMany() function on gerneric dao
  const users = await Promise.all(
    group!.members.map(
      (e): Promise<User | null> => {
        return userDAO.findOne({ id: e });
      }
    )
  );
  const filteredUsers = users.map(e => {
    if (e !== null) {
      return { name: e.name, id: e.id };
    } else {
      return { name: 'Unkown User' };
    }
  });
  res.status(200).json(filteredUsers);
});

router.post('/:id/membership', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const userDAO: GenericDAO<User> = req.app.locals.userDAO;
  const result = await addMembership(groupDAO, req.params.id, userDAO, res.locals.user.id);
  res.status(result.status).json({ message: result.message || 'Success' });
});

router.post('/membership', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const userDAO: GenericDAO<User> = req.app.locals.userDAO;

  const { groupID, joinCode } = req.body;
  console.log('joining: ', groupID, joinCode);
  let result: { status: number; message: string } = { status: 404, message: 'Unkown group' };

  if (groupID) {
    result = await addMembership(groupDAO, groupID, userDAO, res.locals.user.id);
  } else if (joinCode) {
    const group = await groupDAO.findOne({ joinCode });
    if (group) {
      result = await addMembership(groupDAO, group.id, userDAO, res.locals.user.id);
    }
  }

  res.status(result.status).json({ message: result.message || 'Success' });
});

router.delete('/:gid/membership/:uid', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const userDAO: GenericDAO<User> = req.app.locals.userDAO;
  const result = await removeMembership(groupDAO, req.params.gid, userDAO, req.params.uid);
  res.status(result.status).json({ message: result.message || 'Success' });
});

router.delete('/:gid/membership', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const userDAO: GenericDAO<User> = req.app.locals.userDAO;
  const result = await removeMembership(groupDAO, req.params.gid, userDAO, res.locals.user.id);
  res.status(result.status).json({ message: result.message || 'Success' });
});

async function addMembership(
  groupDAO: GenericDAO<Group>,
  groupID: string,
  userDAO: GenericDAO<User>,
  userID: string
): Promise<{ status: number; message: string }> {
  const filter: Partial<Group> = { id: userID };
  const user = await userDAO.findOne(filter);
  if (!user) return { status: 404, message: 'Unkown user' };

  const group = await groupDAO.findOne({ id: groupID });
  if (!group) return { status: 404, message: 'Unkown group' };

  if (!group!.members) {
    group!.members = [];
  }
  if (!user!.groupMemberships) {
    user!.groupMemberships = [];
  }
  group!.members.push(user.id);
  user!.groupMemberships.push(group.id);
  try {
    await userDAO.update({ ...user });
    await groupDAO.update({ ...group });
  } catch (err) {
    return { status: 500, message: 'Unexpected error occured' };
  }
  return { status: 200, message: '' };
}

async function removeMembership(
  groupDAO: GenericDAO<Group>,
  groupID: string,
  userDAO: GenericDAO<User>,
  userID: string
): Promise<{ status: number; message: string }> {
  const filter: Partial<Group> = { id: userID };
  const user = await userDAO.findOne(filter);
  if (!user) return { status: 404, message: 'Unkown user' };

  const group = await groupDAO.findOne({ id: groupID });
  if (!group) return { status: 404, message: 'Unkown group' };

  const newGroupMembers = group.members.filter(member => {
    return member !== user.id;
  });
  const newUserMemberships = user.groupMemberships.filter(groupID => {
    return groupID !== group.id;
  });
  try {
    await userDAO.update({ ...user, groupMemberships: newUserMemberships });
    await groupDAO.update({ ...group, members: newGroupMembers });
  } catch (err) {
    return { status: 500, message: 'Unexpected error occured' };
  }
  return { status: 200, message: '' };
}
export default router;
