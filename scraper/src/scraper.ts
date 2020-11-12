import axios from 'axios';
import cheerio from 'cheerio';
import { LangString } from './models/langString';
import { Meal } from './models/meal';
import { MenuDay } from './models/menu-day';
import { Price } from './models/price';
import { MensaPlan } from './models/mensa-plan';
import { join } from 'path';
import { writeFileSync } from 'fs';

const AdditivesDict: Map<string, LangString> = new Map([
  ['1', { de: 'Farbstoff', en: 'Dye' }],
  ['2', { de: 'Konservierungsstoffe', en: 'Preservative' }],
  ['3', { de: 'Antioxidationsmittel', en: 'Antioxidants' }],
  ['4', { de: 'Geschmacksverstärker', en: 'FlavorEnhancer' }],
  ['5', { de: 'geschwefelt', en: 'Sulphurized' }],
  ['6', { de: 'geschwärzt', en: 'Blackend' }],
  ['7', { de: 'gewachst', en: 'Waxed' }],
  ['8', { de: 'Phosphat', en: 'Phosphate' }],
  ['9', { de: 'Süßungsmitteln', en: 'Sweeteners' }],
  ['10', { de: 'Phenylalaninquelle', en: 'Phenylalanine' }]
]);

const AllergensDict: Map<string, LangString> = new Map([
  ['A', { de: 'Gluten', en: 'Gluten' }],
  ['ADI', { de: 'Dinkel', en: 'Spelled' }],
  ['AGE', { de: 'Gerste', en: 'Barley' }],
  ['AHA', { de: 'Hafer', en: 'Oats' }],
  ['AKA', { de: 'Kamut', en: 'Kamut' }],
  ['ARO', { de: 'Roggen', en: 'Rye' }],
  ['AWE', { de: 'Weizen', en: 'Wheat' }],
  ['B', { de: 'Krebstiere', en: 'Crustaceans' }],
  ['C', { de: 'Ei', en: 'Egg' }],
  ['D', { de: 'Fisch', en: 'Fish' }],
  ['E', { de: 'Erdnüsse', en: 'Peanuts' }],
  ['F', { de: 'Soja', en: 'Soy' }],
  ['G', { de: 'Milch', en: 'Milk' }],
  ['H', { de: 'Schalenfrüchte', en: 'Nuts' }],
  ['HMA', { de: 'Mandeln', en: 'Almonds' }],
  ['HHA', { de: 'Haselnüsse', en: 'Hazelnuts' }],
  ['HWA', { de: 'Walnüsse', en: 'Walnuts' }],
  ['HCA', { de: 'Cashewkerne', en: 'Cashew' }],
  ['HPE', { de: 'Pecannüsse', en: 'Peacans' }],
  ['HPA', { de: 'Paranüsse', en: 'BrazilNuts' }],
  ['HPI', { de: 'Pistazien', en: 'Pistachios' }],
  ['HQU', { de: 'Macadamianüsse', en: 'QueenslandNuts' }],
  ['I', { de: 'Sellerie', en: 'Celery' }],
  ['J', { de: 'Senf', en: 'Mustard' }],
  ['K', { de: 'Sesam', en: 'Sesame' }],
  ['L', { de: 'Lupinen', en: 'Lupins' }],
  ['M', { de: 'Weichtiere', en: 'Molluscs' }],
  ['N', { de: 'Schwefeloxid und Sulfite', en: 'Sulfur' }]
]);

const OtherMealInfoDict: Map<string, LangString> = new Map([
  ['Rin', { de: 'Rindfleisch', en: 'Beef' }],
  ['Sch', { de: 'Schweinefleisch', en: 'PorkMeat' }],
  ['Vgt', { de: 'Vegetarisch', en: 'Vegetarian' }],
  ['Vgn', { de: 'Vegan', en: 'Vegan' }],
  ['Fis', { de: 'Fisch', en: 'Fish' }],
  ['Gfl', { de: 'Geflügel', en: 'Poultry' }],
  ['Alk', { de: 'Alkohol', en: 'Alcohol' }]
]);

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
      const additives = resolveDict(AdditivesDict, refArray);
      const allergens = resolveDict(AllergensDict, refArray);
      const otherInfo = resolveDict(OtherMealInfoDict, refArray);
      const price = parsePrice(unparsedPrice);
      return { title, additives, allergens, otherInfo, price };
    });

    const meals: Meal[] = <Meal[]>unfilteredMeals.filter(potentialMeal => potentialMeal !== null);
    return { date: $(dayElement).attr('data-date2')!, meals };
  });

  return { mensa, menuDays };
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

function resolveDict(dict: Map<string, LangString>, ref: string[]): string[] {
  const arr: string[] = [];
  ref.forEach(value => {
    if (dict.has(value)) {
      arr.push(dict.get(value)!.de);
    }
  });
  return arr;
}

// function toJson(map: Map<string, MenuDay[]>) {
//   return JSON.stringify(Array.from(map.entries()));
// }

async function main() {
  // const mensen: Mensa[] = await parseMensenList('https://muenster.my-mensa.de/index.php?v=5348942&lang=en');
  // console.log(mensen);
  const mensen: string[] = ['aasee', 'davinci', 'denkpause', 'ring', 'steinfurt'];
  const promises: Promise<MensaPlan>[] = mensen.map(mensa => parseMensa(mensa));
  const result: MensaPlan[] = await Promise.all(promises);
  writeFileSync(join(__dirname, '/data/allinone.json'), JSON.stringify(result));
}
main();
