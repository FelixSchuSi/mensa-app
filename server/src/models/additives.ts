import { Ref } from './refs';

export type AdditivesStrings = Record<AdditivesKeys, string>;
export enum AdditivesKeys {
  _language,
  dye,
  Preservative,
  Antioxidants,
  FlavorEnhancer,
  Sulphurized,
  Blackend,
  Waxed,
  Phosphate,
  Sweeteners,
  Phenylalanine
}

const deAdditives: Record<AdditivesKeys, string> = {
  0: 'de',
  1: 'Farbstoff',
  2: 'Konservierungsstoffe',
  3: 'Antioxidationsmittel',
  4: 'Geschmacksverstärker',
  5: 'geschwefelt',
  6: 'geschwärzt',
  7: 'gewachst',
  8: 'Phosphat',
  9: 'Süßungsmitteln',
  10: 'Phenylalaninquelle'
};

const enAdditives: Record<AdditivesKeys, string> = {
  0: 'eng',
  1: 'Dye',
  2: 'Preservative',
  3: 'Antioxidants',
  4: 'FlavorEnhancer',
  5: 'Sulphurized',
  6: 'Blackend',
  7: 'Waxed',
  8: 'Phosphate',
  9: 'Sweeteners',
  10: 'Phenylalanine'
};

export function parseAdditivesFromRefs(refs: Ref[]): AdditivesKeys[] {
  const filteredKeys: string[] = Object.values(AdditivesKeys).map(String);
  // @ts-ignore
  const filteredRefs: AdditivesKeys[] = refs.filter(ref => filteredKeys.indexOf(ref) > 0);
  return filteredRefs;
}
