import { LangString } from './langString';
import { Ref } from './refs';

export enum AllergenesKeys {
  _language,
  Gluten = 'A',
  Spelled = 'ADI',
  Barley = 'AGE',
  Oats = 'AHA',
  Kamut = 'AKA',
  Rye = 'ARO',
  Wheat = 'AWE',
  Crustaceans = 'B',
  Egg = 'C',
  Fish = 'D',
  Peanuts = 'E',
  Soy = 'F',
  Milk = 'G',
  Nuts = 'H',
  Almonds = 'HMA',
  Hazelnuts = 'HHA',
  Walnuts = 'HWA',
  Cashew = 'HCA',
  Peacans = 'HPE',
  BrazilNuts = 'HPA',
  Pistachios = 'HPI',
  QueenslandNuts = 'HQU',
  Celery = 'I',
  Mustard = 'J',
  Sesame = 'K',
  Lupins = 'L',
  Molluscs = 'M',
  Sulfur = 'N'
}

const enAllergenes: Record<AllergenesKeys, string> = {
  0: 'eng',
  A: 'Gluten',
  ADI: 'Spelled',
  AGE: 'Barley',
  AHA: 'Oats',
  AKA: 'Kamut',
  ARO: 'Rye',
  AWE: 'Wheat',
  B: 'Crustaceans',
  C: 'Egg',
  D: 'Fish',
  E: 'Peanuts',
  F: 'Soy',
  G: 'Milk',
  H: 'Nuts',
  HMA: 'Almonds',
  HHA: 'Hazelnuts',
  HWA: 'Walnuts',
  HCA: 'Cashew',
  HPE: 'Peacans',
  HPA: 'BrazilNuts',
  HPI: 'Pistachios',
  HQU: 'QueenslandNuts',
  I: 'Celery',
  J: 'Mustard',
  K: 'Sesame',
  L: 'Lupins',
  M: 'Molluscs',
  N: 'Sulfur'
};

const deAllergenes: Record<AllergenesKeys, string> = {
  0: 'de',
  A: 'Gluten',
  ADI: 'Dinkel',
  AGE: 'Gerste',
  AHA: 'Hafer',
  AKA: 'Kamut',
  ARO: 'Roggen',
  AWE: 'Weizen',
  B: 'Krebstiere',
  C: 'Ei',
  D: 'Fisch',
  E: 'Erdnüsse',
  F: 'Soja',
  G: 'Milch',
  H: 'Schalenfrüchte',
  HMA: 'Mandeln',
  HHA: 'Haselnüsse',
  HWA: 'Walnüsse',
  HCA: 'Cashewkerne',
  HPE: 'Pecannüsse',
  HPA: 'Paranüsse',
  HPI: 'Pistazien',
  HQU: 'Macadamianüsse',
  I: 'Sellerie',
  J: 'Senf',
  K: 'Sesam',
  L: 'Lupinen',
  M: 'Weichtiere',
  N: 'Schwefeloxid und Sulfite'
};

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

function getAllergenesLangStrings(key: AllergenesKeys): LangString {
  return { de: deAllergenes[key], en: enAllergenes[key] };
}

// function getAllergenesFromRefs(refs: Ref[]): LangString {
//   const filteredRefs = refs.filter(ref => Object.values(AllergenesKeys).findIndex(ref) > 0);
//   return { de: deAllergenes[key], en: enAllergenes[key] };
// }
