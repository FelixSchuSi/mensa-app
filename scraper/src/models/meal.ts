import { LangString } from './langString';
import { Price } from './price';

export type Meal = {
  title: string;
  additives: LangString[];
  allergens: LangString[];
  otherInfo: LangString[];
  price: Price;
};
