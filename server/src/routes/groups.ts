import express from 'express';
import { GenericDAO } from '../models/generic.dao';
import { Group } from '../models/group';
import { User } from '../models/user';
import { encrypt, decrypt } from '../services/crypto.service';

const router = express.Router();
const codeCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const codeLength = 8;

router.get('/', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  //Filter by joinCode
  const groups = (await groupDAO.findAll()).map(group => {
    return { ...group, title: decrypt(group.name) };
  });
  res.json({ results: groups });
});

router.post('/', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const createdGroup = await groupDAO.create({
    name: encrypt(res.locals.group.name),
    joinCode: createJoinCode(codeLength)
  });
  res.status(201).json({ ...createdGroup, title: decrypt(createdGroup.name) });
});

router.delete('/:id', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  await groupDAO.deleteOne(req.params.id);
  res.status(200).end();
});

router.patch('/:id', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const userDAO: GenericDAO<User> = req.app.locals.userDAO;

  const memberOperations: Array<GroupMemberOperation> = req.body.members ?? [];
  const tasks = memberOperations.map(async op => {
    let response: Response;
    switch (op.operation) {
      case 'add':
        response = await addMembership(groupDAO, req.params.id, userDAO, op.user ?? req.app.locals.user.id);
        break;
      case 'remove':
        response = await removeMembership(groupDAO, req.params.id, userDAO, op.user ?? req.app.locals.user.id);
        break;
      default:
        response = { status: 123, message: 'Unkown Operation' };
    }
    return response;
  });
  //TODO Check for success
  Promise.all(tasks);
  res.status(200).end();
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
