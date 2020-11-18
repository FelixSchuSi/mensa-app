import cheerio from 'cheerio';
import { getAllergenesFromRefs } from './models/allergenes';
import { getOtherMealInfoLangFromRefs } from './models/other-meal-info';
import { getAdditivesFromRefs } from './models/additives';
import { gethtmlFromUrl } from './helpers/gethtmlFromUrl';
import { FlatMeal } from './models/flatMeal';
import { MongoGenericDAO } from '../../server/src/models/mongo-generic.dao';
import { DbFlatMeal } from './models/dbFlatMeal';
import { connectToDb } from './db';
import { getUniqueDateMensaCombinations } from './helpers/getUniqueDateMensaCombinations';
import { parsePrice } from './parse/parsePrice';

function parseMealsFromHTML(html: string): FlatMeal[] {
  const $: cheerio.Root = cheerio.load(html);
  const mensaString: string = $('.mensatitle').first().text();
  const mensa: string = mensaString
    .split(' ')
    .filter(substr => ['Mensa', 'Am', 'Bistro'].indexOf(substr) < 0)
    .join('')
    .toLowerCase();

  const dayList: cheerio.Element[] = $('div.essenliste').toArray();

  let flatMeals: FlatMeal[] = [];

  dayList.forEach((dayElement: cheerio.Element, i) => {
    const mealList: cheerio.Element[] = $(dayElement).find('div[data-role="content"] > ul > li.conditional').toArray();
    const unfilteredMeals: FlatMeal[] = mealList.map((mealElement: cheerio.Element) => {
      const title = $(mealElement)
        .find('a > h3.text2share')
        .text()
        .trim()
        .replace(/\xAD/g, '')
        .replace(/\s?\([^)]+\)/g, '');

      const unparsedPrice = $(mealElement).find('a > p.text2share.next').text().trim();
      const references = $(mealElement).attr('ref')!;
      const refArray = JSON.parse(references || '[]');
      const additives = getAdditivesFromRefs(refArray);
      const allergens = getAllergenesFromRefs(refArray);
      const otherInfo = getOtherMealInfoLangFromRefs(refArray);
      const price = parsePrice(unparsedPrice);
      const date = $(dayElement).attr('data-date2')!;
      return { title, additives, allergens, otherInfo, price, mensa, date };
    });
    flatMeals = [...flatMeals, ...unfilteredMeals.filter(meal => meal.title !== '+')];
  });
  return flatMeals;
}

async function main() {
  const mealDAO: MongoGenericDAO<DbFlatMeal> = await connectToDb();
  const mensen: string[] = ['aasee', 'davinci', 'denkpause', 'ring', 'steinfurt'];

  const scrapedHtmlStrings: string[] = await Promise.all(
    mensen.map(mensa => gethtmlFromUrl('https://muenster.my-mensa.de/essen.php?v=5348990&hyp=1&lang=de&mensa=' + mensa))
  );
  const flatMeals: FlatMeal[] = scrapedHtmlStrings.map(html => parseMealsFromHTML(html)).flat();

  // Delete Meals that contain the same date-mensa combination since updated meals are present in this scrape.
  // We could alternatively update all meals with identical date-mensa-title combination, however this would
  // leave meals in the db that were taken off the menu in the last scrape.
  const dateMensaCombos = getUniqueDateMensaCombinations(flatMeals);
  await Promise.all(dateMensaCombos.map(uniqueScrape => mealDAO.deleteAll(uniqueScrape)));

  // Write every Meal to Meals
  await Promise.all(flatMeals.map((flatMeal: FlatMeal) => mealDAO.create(flatMeal)));

  process.exit(0);
}

main();
