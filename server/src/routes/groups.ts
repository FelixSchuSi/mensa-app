import express from 'express';
import { GenericDAO } from '../models/generic.dao';
import { Group } from '../models/group';
import { encrypt, decrypt } from '../services/crypto.service';

const router = express.Router();

router.get('/', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.taskDAO;
  const groups = (await groupDAO.findAll()).map(group => {
    return { ...group, title: decrypt(group.name) };
  });
  res.json({ results: groups });
});

export default router;
