import { Ref } from './refs';

export type OtherMealInfoStrings = Record<OtherMealInfoKeys, string>;

export enum OtherMealInfoKeys {
  Beef = 'Rin',
  PorkMeat = 'Sch',
  Fish = 'Fis',
  Poultry = 'Gfl',
  Alcohol = 'Alk'
}

const deOtherMealInfo: Record<OtherMealInfoKeys, string> = {
  Rin: 'Rindfleisch',
  Sch: 'Schweinefleisch',
  Fis: 'Fisch',
  Gfl: 'Geflügel',
  Alk: 'Alkohol'
};

const enOtherMealInfo: Record<OtherMealInfoKeys, string> = {
  Rin: 'Beef',
  Sch: 'PorkMeat',
  Fis: 'Fish',
  Gfl: 'Poultry',
  Alk: 'Alcohol'
};

export function getOtherMealInfoLangFromRefs(refs: Ref[]): OtherMealInfoKeys[] {
  // @ts-ignore
  const filteredRefs: OtherMealInfoKeys[] = refs.filter(ref => Object.values(OtherMealInfoKeys).indexOf(ref) > 0);
  return filteredRefs;
}
