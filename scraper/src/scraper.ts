import axios from 'axios';
import cheerio from 'cheerio';
import { Meal } from './models/meal';
import { MenuDay } from './models/menu-day';
import { Price } from './models/price';
import { MensaPlan } from './models/mensa-plan';
import { getAllergenesFromRefs } from './models/allergenes';
import { getOtherMealInfoLangFromRefs } from './models/other-meal-info';
import { getAdditivesFromRefs } from './models/additives';
import { FlatMeal } from './models/flatMeal';
import { MongoGenericDAO } from '../../server/src/models/mongo-generic.dao';
import { DbFlatMeal } from './models/dbFlatMeal';
import { connectToDb } from './db';
import { getUniqueDateMensaCombinations } from './helpers/getUniqueDateMensaCombinations';
import { mensaPlanstoFlatMeals } from './helpers/mensaPlanstoFlatMeals';

async function parseMensa(mensa: string): Promise<MensaPlan> {
  const url: string = 'https://muenster.my-mensa.de/essen.php?v=5348990&hyp=1&lang=de&mensa=' + mensa;
  const response = await axios(url);
  const $: cheerio.Root = cheerio.load(response.data);
  const dayList: cheerio.Element[] = $('div.essenliste').toArray();

  const menuDays: MenuDay[] = dayList.map((dayElement: cheerio.Element) => {
    const mealList: cheerio.Element[] = $(dayElement).find('div[data-role="content"] > ul > li.conditional').toArray();

    const unfilteredMeals: (Meal | null)[] = mealList.map((mealElement: cheerio.Element) => {
      const title = $(mealElement)
        .find('a > h3.text2share')
        .text()
        .trim()
        .replace(/\xAD/g, '')
        .replace(/\s?\([^)]+\)/g, '');
      if (title === '+') return null;

      const unparsedPrice = $(mealElement).find('a > p.text2share.next').text().trim();
      const references = $(mealElement).attr('ref');
      const refArray = JSON.parse(references!);
      const additives = getAdditivesFromRefs(refArray);
      const allergens = getAllergenesFromRefs(refArray);
      const otherInfo = getOtherMealInfoLangFromRefs(refArray);
      const price = parsePrice(unparsedPrice);
      return { title, additives, allergens, otherInfo, price };
    });

    const meals: Meal[] = <Meal[]>unfilteredMeals.filter(potentialMeal => potentialMeal !== null);
    return { date: $(dayElement).attr('data-date2')!, meals };
  });
  return { mensa, menuDays, rawHTML: $('body').html() || '' };
}

function parsePrice(str: string): Price {
  str = str.trim();
  const prices = str.split('/');
  const parsedPrices: number[] = prices.map(val => {
    return parseFloat(val.replace('€', '').replace(',', '.').trim());
  });

  return {
    student: parsedPrices[0],
    employee: parsedPrices[1],
    guest: parsedPrices[2]
  };
}

async function main() {
  const mensen: string[] = ['aasee', 'davinci', 'denkpause', 'ring', 'steinfurt'];
  const promises: Promise<MensaPlan>[] = mensen.map(mensa => parseMensa(mensa));
  const mensaPlans: MensaPlan[] = await Promise.all(promises);
  const flatMeals: FlatMeal[] = mensaPlanstoFlatMeals(mensaPlans);
  const mealDAO: MongoGenericDAO<DbFlatMeal> = await connectToDb();

  // Delete Meals that contain the same date-mensa combination since updated meals are present in this scrape.
  // We could alternatively update all meals with identical date-mensa-title combination, however this would
  // leave meals in the db that were taken off the menu in the last scrape
  const dateMensaCombos = getUniqueDateMensaCombinations(flatMeals);
  await Promise.all(dateMensaCombos.map(uniqueScrape => mealDAO.deleteAll(uniqueScrape)));

  // Write every Meal to Meals
  await Promise.all(flatMeals.map((flatMeal: FlatMeal) => mealDAO.create(flatMeal)));

  process.exit(0);
}

main();
