import { AdditivesKeys } from './additives';
import { AllergenesKeys } from './allergenes';
import { OtherMealInfoKeys } from './other-meal-info';

export interface MealFilterConfig {
  mensen: Array<'aasee' | 'davinci' | 'denkpause' | 'ring' | 'steinfurt'>;
  diet: 'Vgn' | 'Vgt' | 'STANDARD_DIET';
  nogos: Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys>;
}
