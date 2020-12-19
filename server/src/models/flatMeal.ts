import { AdditivesKeys } from '../../../server/src/models/additives';
import { AllergenesKeys } from '../../../server/src/models/allergenes';
import { OtherMealInfoKeys } from '../../../server/src/models/other-meal-info';
import { Price } from '../../../server/src/models/price';
import { LifestyleKeys } from './lifestyle';
export interface FlatMeal {
  title: string;
  date: string;
  mensa: string;
  additives: AdditivesKeys[];
  allergens: AllergenesKeys[];
  otherInfo: OtherMealInfoKeys[];
  lifestyle: LifestyleKeys[];
  price: Price;
}
