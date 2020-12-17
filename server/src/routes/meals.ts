import express from 'express';
import { OtherMealInfoKeys } from '../../../scraper/src/models/other-meal-info';
import { AllergenesKeys } from '../../../scraper/src/models/allergenes';
import { AdditivesKeys } from '../../../scraper/src/models/additives';

const router = express.Router();

router.get('/', async (req, res) => {
  const arr = [Object.values(OtherMealInfoKeys), Object.values(AllergenesKeys), Object.values(AdditivesKeys)].flat();
  console.log(arr);
  res.json({ results: arr });
});

export default router;
