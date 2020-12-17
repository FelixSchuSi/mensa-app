import { Ref } from '../../../scraper/src/models/refs';

export type OtherMealInfoStrings = Record<OtherMealInfoKeys, string>;

export enum OtherMealInfoKeys {
  Beef = 'Rin',
  PorkMeat = 'Sch',
  Vegetarian = 'Vgt',
  Vegan = 'Vgn',
  Fish = 'Fis',
  Poultry = 'Gfl',
  Alcohol = 'Alk'
}

const deOtherMealInfo: Record<OtherMealInfoKeys, string> = {
  Rin: 'Rindfleisch',
  Sch: 'Schweinefleisch',
  Vgt: 'Vegetarisch',
  Vgn: 'Vegan',
  Fis: 'Fisch',
  Gfl: 'Geflügel',
  Alk: 'Alkohol'
};

const enOtherMealInfo: Record<OtherMealInfoKeys, string> = {
  Rin: 'Beef',
  Sch: 'PorkMeat',
  Vgt: 'Vegetarian',
  Vgn: 'Vegan',
  Fis: 'Fish',
  Gfl: 'Poultry',
  Alk: 'Alcohol'
};

export function getOtherMealInfoLangFromRefs(refs: Ref[]): OtherMealInfoKeys[] {
  // @ts-ignore
  const filteredRefs: OtherMealInfoKeys[] = refs.filter(ref => Object.values(OtherMealInfoKeys).indexOf(ref) > 0);
  return filteredRefs;
}
