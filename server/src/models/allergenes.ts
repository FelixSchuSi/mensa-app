import { Ref } from './refs';

export type AllergenesStrings = Record<AllergenesKeys, string>;

export enum AllergenesKeys {
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

const enAllergenes: AllergenesStrings = {
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

export function getAllergenesFromRefs(refs: Ref[]): AllergenesKeys[] {
  // @ts-ignore
  const filteredRefs: AllergenesKeys[] = refs.filter(ref => Object.values(AllergenesKeys).indexOf(ref) > 0);
  return filteredRefs;
}
