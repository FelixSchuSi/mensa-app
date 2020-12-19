import { Ref } from './refs';

export type LifestyleStrings = Record<LifestyleKeys, string>;

export enum LifestyleKeys {
  Vegetarian = 'Vgt',
  Vegan = 'Vgn'
}

const deLifestyle: Record<LifestyleKeys, string> = {
  Vgt: 'Vegetarisch',
  Vgn: 'Vegan'
};

const enLifestyle: Record<LifestyleKeys, string> = {
  Vgt: 'Vegetarian',
  Vgn: 'Vegan'
};

export function getLifestyleLangFromRefs(refs: Ref[]): LifestyleKeys[] {
  // @ts-ignore
  const filteredRefs: LifestyleKeys[] = refs.filter(ref => Object.values(LifestyleKeys).indexOf(ref) > 0);
  return filteredRefs;
}
