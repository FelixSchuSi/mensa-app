import { MongoGenericDAO } from '../../server/src/models/mongo-generic.dao';
import { connectToDb } from './db';
import { DbFlatMeal } from './models/dbFlatMeal';
import { join } from 'path';
import { writeFileSync, readFileSync, read } from 'fs';
import { FlatMeal } from './models/flatMeal';
import { AdditivesKeys, deAdditives } from './models/additives';
import { OtherMealInfoKeys, deOtherMealInfo } from './models/other-meal-info';
import { AllergenesKeys, deAllergenes } from './models/allergenes';

// async function main(): Promise<void> {
//   const genericDAO: MongoGenericDAO<DbFlatMeal> = await connectToDb();
//   const allMeals = await genericDAO.findAll();

//   writeFileSync(join(__dirname, 'meals_before_migration.json'), JSON.stringify({ data: allMeals }));
// }

async function transform(): Promise<void> {
  const genericDAO: MongoGenericDAO<DbFlatMeal> = await connectToDb();
  const oldMealsDAO: MongoGenericDAO<DbFlatMeal> = await connectToDb('old_meals');
  const allMealsString = readFileSync(join(__dirname, 'meals_before_migration.json'));
  const allMeals = <FlatMeal[]>JSON.parse(allMealsString.toString()).data;
  const newMeals = allMeals.map(m => {
    let { additives, otherInfo, allergens } = m;
    additives = <AdditivesKeys[]>additives.map(e => migrateAdditives(<any>e));
    otherInfo = <OtherMealInfoKeys[]>otherInfo.map(e => migrateOtherInfo(<any>e));
    allergens = <AllergenesKeys[]>allergens.map(e => migrateAllergens(<any>e));
    return { ...m, additives, otherInfo };
  });
  // newMeals.forEach((meal, i) => {
  //   const old = <any>allMeals[i].additives.map((e: any) => e.de);
  //   console.log(`new: ${meal.additives} old: ${old}`);
  // });
  const promises = newMeals.map(m => {
    const { title, date, mensa, additives, allergens, otherInfo, price } = m;
    genericDAO.create({ title, date, mensa, additives, allergens, otherInfo, price });
    console.log('.');
  });
  await Promise.all(promises);
  console.log('finished Writing.');
  const newM = await genericDAO.findAll();
  const oldM = await oldMealsDAO.findAll();

  console.log(`finished! oldLength: ${oldM.length} newLength: ${newM.length}`);
}

function migrateOtherInfo(oldOtherInfo: { de: string; en: string }): OtherMealInfoKeys | 'NO_RES' {
  const entries = Object.entries(deOtherMealInfo);
  let res: OtherMealInfoKeys | 'NO_RES' = 'NO_RES';
  entries.map(([key, deStr]) => {
    if (oldOtherInfo?.de === deStr) {
      res = <OtherMealInfoKeys>(<any>key);
      return;
    }
  });
  return res;
}

function migrateAdditives(oldAdditive: { de: string; en: string }): AdditivesKeys | 'NO_RES' {
  const entries = Object.entries(deAdditives);
  let res: AdditivesKeys | 'NO_RES' = 'NO_RES';
  entries.map(([key, deStr]) => {
    if (oldAdditive?.de === deStr) {
      res = <AdditivesKeys>(<any>key);
      return;
    }
  });
  return res;
}

function migrateAllergens(oldAllergens: { de: string; en: string }): AllergenesKeys | 'NO_RES' {
  const entries = Object.entries(deAllergenes);
  let res: AllergenesKeys | 'NO_RES' = 'NO_RES';
  entries.map(([key, deStr]) => {
    // console.log(oldAllergens);
    if (oldAllergens?.de === deStr) {
      res = <AllergenesKeys>(<any>key);
      return;
    }
  });
  return res;
}

async function copyOld(): Promise<void> {
  const mealsDAO: MongoGenericDAO<DbFlatMeal> = await connectToDb();
  const oldMealsDAO: MongoGenericDAO<DbFlatMeal> = await connectToDb('old_meals');
  const allMeals = await mealsDAO.findAll();
  const asdf = allMeals.map(async (meal: FlatMeal) => {
    const { title, date, mensa, additives, allergens, otherInfo, price } = meal;
    const singleMeal = await oldMealsDAO.create({ title, date, mensa, additives, allergens, otherInfo, price });
    console.log(singleMeal);
    return singleMeal;
  });
  const res = await oldMealsDAO.findAll();
  console.log('finished!', res.length);
}

// main();
transform();
