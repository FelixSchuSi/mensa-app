import { AdditivesKeys } from '../../../server/src/models/additives';
import { AllergenesKeys } from '../../../server/src/models/allergenes';
import { OtherMealInfoKeys } from '../../../server/src/models/other-meal-info';
import { Price } from '../../../server/src/models/price';
export interface FlatMeal {
  title: string;
  date: string;
  mensa: string;
  additives: AdditivesKeys[]; // TODO: only use string -> keys
  allergens: AllergenesKeys[];
  otherInfo: OtherMealInfoKeys[];
  price: Price;
}
