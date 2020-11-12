import { Price } from './price';

export type Meal = {
  title: string;
  additives: string[];
  allergens: string[];
  otherInfo: string[];
  price: Price;
};
