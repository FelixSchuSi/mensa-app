import { AdditivesStrings } from './additives';
import { AllergenesStrings } from './allergenes';
import { OtherMealInfoStrings } from './other-meal-info';

export type Ref = keyof AllergenesStrings | keyof AdditivesStrings | keyof OtherMealInfoStrings;
