import express from 'express';
import { GenericDAO } from '../models/generic.dao';
import { Task } from '../models/task';

const router = express.Router();

router.get('/', async (req, res) => {
  const taskDAO: GenericDAO<Task> = req.app.locals.taskDAO;
  const tasks = await taskDAO.findAll({ userId: res.locals.user.id });
  res.json({ results: tasks });
});

router.post('/', async (req, res) => {
  const taskDAO: GenericDAO<Task> = req.app.locals.taskDAO;
  const createdTask = await taskDAO.create({ userId: res.locals.user.id, title: req.body.title, status: 'open' });
  res.status(201).json(createdTask);
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
