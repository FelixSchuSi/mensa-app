import { AdditivesStrings } from '../../../server/src/models/additives';
import { AllergenesStrings } from '../../../server/src/models/allergenes';
import { OtherMealInfoStrings } from '../../../server/src/models/other-meal-info';

export type Ref = keyof AllergenesStrings | keyof AdditivesStrings | keyof OtherMealInfoStrings;
