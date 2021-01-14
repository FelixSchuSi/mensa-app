import express from 'express';
import { GenericDAO } from '../models/generic.dao';
import { Meal } from '../models/meal';

const router = express.Router();

router.get('/', async (req, res) => {
  const mealsDAO: GenericDAO<Meal> = req.app.locals.mealsDAO;
  const meals = await mealsDAO.findAll();
  res.json({ results: meals });
});

router.get('/search', async (req, res) => {
  console.log(req.query);
  const mealsDAO: GenericDAO<Meal> = req.app.locals.mealsDAO;
  const { mensa, title } = req.query;
  if (!mensa || !title) res.status(404).json({ message: 'Gericht nicht gefunden!' });
  const results = await mealsDAO.findOne(<Meal>{ mensa, title });
  if (results === null) res.status(404).json({ message: 'Gericht nicht gefunden!' });
  res.json({ results });
});

export default router;
