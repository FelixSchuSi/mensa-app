import axios from 'axios';
import cheerio from 'cheerio';
import { LangString } from './models/langString';
import { Meal } from './models/meal';
import { Mensa } from './models/mensa';
import { MenuDay } from './models/menu-day';
import { Price } from './models/price';

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
async function parseMensenList(url: string): Promise<Mensa[]> {
  const mensen: Mensa[] = [];
  try {
    const response = await axios(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const mensaList = $('#mensalist > li:not([data-role="list-divider"])');

    mensaList.each(function () {
      const name = $(this).find('a.mensalistentry').text().trim();
      const link = $(this).find('a.mensalistentry').attr('href');
      mensen.push({ name, link });
    });
    return mensen;
  } catch (err: any) {
    throw err;
  }
}
async function parseMensa(url: string): Promise<MenuDay[]> {
  try {
    const response = await axios(url);
    const html = response.data;
    const $: cheerio.Root = cheerio.load(html);
    const dayList: cheerio.Cheerio = $('div.essenliste');
    const days: MenuDay[] = [];
    dayList.each(function (index: number, element: cheerio.Element) {
      const mealList = $(this).find('div[data-role="content"] > ul > li.conditional');
      const meals: Meal[] = [];
      mealList.each(function () {
        const title = $(this)
          .find('a > h3.text2share')
          .text()
          .trim()
          .replace(/\xAD/g, '')
          .replace(/\s?\([^)]+\)/g, '');
        if (title === '+') return;
        const price = $(this).find('a > p.text2share.next').text().trim();
        const references = $(this).attr('ref');
        const refArray = parseJSStyleString(<string>references);
        const additives = resolveDict(AdditivesDict, refArray);
        const allergens = resolveDict(AllergensDict, refArray);
        const other = resolveDict(OtherMealInfoDict, refArray);
        const parsedPrice = parsePrice(price);
        meals.push({
          title,
          additives,
          allergens,
          otherInfo: other,
          price: parsedPrice
        });
      });
      days.push({ date: $(this).attr('data-date2'), meals });
    });
    return days;
  } catch (err: any) {
    throw err;
  }
}
function parseJSStyleString(str: string): string[] {
  return str.replace(/[\[\]"]+/g, '').split(',');
}
function parsePrice(str: string): Price {
  if (str.trim() === '-') return null;
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
    if (dict.get(value) !== undefined) {
      arr.push(dict.get(value).de);
    }
  });
  return arr;
}
function toJson(map: Map<string, MenuDay[]>) {
  return JSON.stringify(Array.from(map.entries()));
}
type Pair = {
  Mensa: string;
  Plan: MenuDay[];
};
async function main() {
  const mensen: Mensa[] = await parseMensenList('https://muenster.my-mensa.de/index.php?v=5348942&lang=en');
  console.log(mensen);

  // const mids: string[] = ["aasee", "davinci", "denkpause", "ring", "steinfurt"];
  // const fs = require("fs");
  // const m: Pair[] = [];
  // const bar = new Promise((resolve, reject) => {
  //   mids.forEach((value, index, array) => {
  //     parseMensa(
  //       "https://muenster.my-mensa.de/essen.php?v=5348990&hyp=1&lang=de&mensa=" +
  //         value
  //     ).then((res) => {
  //       m.push({ Mensa: value, Plan: res });
  //       if (index === array.length - 1) resolve();
  //     });
  //   });
  // });
  // await bar;
  // fs.writeFileSync("./data/" + "allinone" + ".json", JSON.stringify(m));
}
main();
