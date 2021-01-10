import express from 'express';
import { GenericDAO } from '../models/generic.dao';
import { Group } from '../models/group';
import { User } from '../models/user';
import { encrypt, decrypt } from '../services/crypto.service';

const router = express.Router();
const codeCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const codeLength = 8;
router.get('/:id', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const group = await groupDAO.findOne({ id: req.params.id });
  if (group) {
    res.status(200).json({ ...group, name: decrypt(group!.name) });
  } else {
    res.status(404).json({});
  }
});
router.get('/', async (req, res) => {
  const filter: Partial<Group> = {};
  let groups: Array<Group> = [];
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  //Filter by joinCode
  if (req.query.joincode) {
    filter.joinCode = <string>req.query.joincode;
  }
  if (req.query.scope) {
    if (req.query.scope === 'me') {
      const userDAO: GenericDAO<User> = req.app.locals.userDAO;
      const userFilter: Partial<User> = { id: res.locals.user.id };
      const user = await userDAO.findOne(userFilter);

      const groups = await Promise.all(
        (user!.groupMemberships || []).map(async groupid => {
          const group = await groupDAO.findOne({ id: groupid });
          return { ...group, name: decrypt(group!.name) };
        })
      );
      return res.status(200).json(groups);
    } else {
      return res.status(405).json({ message: 'Unkown scope' });
    }
  } else {
    groups = (await groupDAO.findAll(filter)).map(group => {
      return { ...group, name: decrypt(group.name) };
    });
  }

  res.json({ results: groups });
});

router.post('/', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const createdGroup = await groupDAO.create({
    name: encrypt(req.body.group.name),
    joinCode: createJoinCode(codeLength),
    owner: res.locals.user.id
  });
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
  let users = await Promise.all(
    group!.members.map(
      (e): Promise<User | null> => {
        return userDAO.findOne({ id: e });
      }
    )
  );
  users = users.filter(e => {
    return e !== null;
  });
  res.status(200).json(users);
});
router.post('/:id/membership', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const userDAO: GenericDAO<User> = req.app.locals.userDAO;
  const result = await addMembership(groupDAO, req.params.id, userDAO, res.locals.user.id);
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
function createJoinCode(length: number): string {
  const charArrrayLength = codeCharacters.length;
  let code = '';
  for (let i = 0; i < length; i++) {
    code += codeCharacters.charAt(Math.floor(Math.random() * charArrrayLength));
  }
  return code;
}
interface GroupMemberOperation {
  operation: string;
  user: string;
}
interface Response {
  status: number;
  message?: string;
}
async function addMembership(
  groupDAO: GenericDAO<Group>,
  groupID: string,
  userDAO: GenericDAO<User>,
  userID: string
): Promise<Response> {
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
  return { status: 200 };
}
async function removeMembership(
  groupDAO: GenericDAO<Group>,
  groupID: string,
  userDAO: GenericDAO<User>,
  userID: string
): Promise<Response> {
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
