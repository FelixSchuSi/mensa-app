import { LangString } from './langString';

const OtherMealInfoDict: Map<string, LangString> = new Map([
  ['Rin', { de: 'Rindfleisch', en: 'Beef' }],
  ['Sch', { de: 'Schweinefleisch', en: 'PorkMeat' }],
  ['Vgt', { de: 'Vegetarisch', en: 'Vegetarian' }],
  ['Vgn', { de: 'Vegan', en: 'Vegan' }],
  ['Fis', { de: 'Fisch', en: 'Fish' }],
  ['Gfl', { de: 'Geflügel', en: 'Poultry' }],
  ['Alk', { de: 'Alkohol', en: 'Alcohol' }]
]);

export enum OtherMealInfoKeys {
  _language = 'language',
  Beef = 'Rin',
  PorkMeat = 'Sch',
  Vegetarian = 'Vgt',
  Vegan = 'Vgn',
  Fish = 'Fis',
  Poultry = 'Gfl',
  Alcohol = 'Alk'
}

const deOtherMealInfo: Record<OtherMealInfoKeys, string> = {
  language: 'de',
  Rin: 'Rindfleisch',
  Sch: 'Schweinefleisch',
  Vgt: 'Vegetarisch',
  Vgn: 'Vegan',
  Fis: 'Fisch',
  Gfl: 'Geflügel',
  Alk: 'Alkohol'
};

const enOtherMealInfo: Record<OtherMealInfoKeys, string> = {
  language: 'eng',
  Rin: 'Beef',
  Sch: 'PorkMeat',
  Vgt: 'Vegetarian',
  Vgn: 'Vegan',
  Fis: 'Fish',
  Gfl: 'Poultry',
  Alk: 'Alcohol'
};

function getOtherMealInfoLangStrings(key: OtherMealInfoKeys): LangString {
  return { de: deOtherMealInfo[key], en: enOtherMealInfo[key] };
}
