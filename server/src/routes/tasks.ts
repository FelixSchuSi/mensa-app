import express from 'express';
import { GenericDAO } from '../models/generic.dao';
import { Task } from '../models/task';
import { encrypt, decrypt } from '../services/crypto.service';

const router = express.Router();

router.get('/', async (req, res) => {
  const taskDAO: GenericDAO<Task> = req.app.locals.taskDAO;
  const status = req.query.status as Task['status'];
  const filter: Partial<Task> = { userId: res.locals.user.id };
  if (status) {
    filter.status = status === 'open' ? 'open' : 'done';
  }
  const tasks = (await taskDAO.findAll(filter)).map(task => {
    return { ...task, title: decrypt(task.title) };
  });
  res.json({ results: tasks });
});

router.post('/', async (req, res) => {
  const taskDAO: GenericDAO<Task> = req.app.locals.taskDAO;
  const createdTask = await taskDAO.create({
    userId: res.locals.user.id,
    title: encrypt(req.body.title),
    status: 'open'
  });
  res.status(201).json({ ...createdTask, title: decrypt(createdTask.title) });
});

router.delete('/:id', async (req, res) => {
  const taskDAO: GenericDAO<Task> = req.app.locals.taskDAO;
  await taskDAO.delete(req.params.id);
  res.status(200).end();
});

router.patch('/:id', async (req, res) => {
  const taskDAO: GenericDAO<Task> = req.app.locals.taskDAO;
  await taskDAO.update({ id: req.params.id, status: req.body.status });
  res.status(200).end();
});

export default router;
