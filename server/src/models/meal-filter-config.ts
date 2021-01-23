import { AdditivesKeys } from './additives';
import { AllergenesKeys } from './allergenes';
import { OtherMealInfoKeys } from './other-meal-info';

export type Mensa = 'aasee' | 'davinci' | 'denkpause' | 'ring' | 'steinfurt';
export interface MealFilterConfig {
  mensen: Mensa[];
  diet: 'Vgn' | 'Vgt' | 'STANDARD_DIET';
  nogos: Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys>;
}
