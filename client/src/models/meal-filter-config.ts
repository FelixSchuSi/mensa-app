import { AdditivesKeys } from '../../../server/src/models/additives';
import { AllergenesKeys } from '../../../server/src/models/allergenes';
import { OtherMealInfoKeys } from '../../../server/src/models/other-meal-info';

export interface MealFilterConfig {
  mensen: Array<'aasee' | 'davinci' | 'denkpause' | 'ring' | 'steinfurt'>;
  diet: 'Vgn' | 'Vgt' | 'NO_PRESELECTION';
  nogos: Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys>;
}
