import express from 'express';
import { GenericDAO } from '../models/generic.dao';
import { Meal } from '../models/meal';

const router = express.Router();

router.get('/', async (req, res) => {
  const mealsDAO: GenericDAO<Meal> = req.app.locals.mealsDAO;
  const meals = await mealsDAO.findAll();
  res.json({ results: meals });
});

export default router;
