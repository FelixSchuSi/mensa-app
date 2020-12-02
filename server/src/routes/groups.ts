import express from 'express';
import { GenericDAO } from '../models/generic.dao';
import { Group } from '../models/group';
import { encrypt, decrypt } from '../services/crypto.service';

const router = express.Router();
const codeCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const codeLength = 8;

router.get('/', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
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
  const filter: Partial<Group> = { id: res.locals.group.id };
  const group = await groupDAO.findOne(filter);
  if (group === null) {
    res.status(404).json({ message: 'Group id is unkown' });
  }
  if (!req.body.members) {
    //Nothing to do here if not update members?
    res.status(200).end();
    return;
  }
  const newMembers = group?.members.filter(member => {
    return req.body.members.remove !== member;
  });
  if (req.body.members.add) {
    newMembers?.push(req.body.members.add);
  }
  await groupDAO.update({ id: req.params.id, members: newMembers });
  res.status(200).end();
});
function createJoinCode(length: number) {
  const charArrrayLength = codeCharacters.length;
  let code = '';
  for (let i = 0; i < length; i++) {
    code += codeCharacters.charAt(Math.floor(Math.random() * charArrrayLength));
  }
  return code;
}
export default router;
