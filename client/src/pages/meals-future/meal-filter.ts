type MealFilterConfig = {
  title: string;
  date: string;
  mensa: 'aasee' | 'davinci' | 'denkpause' | 'ring' | 'steinfurt';
  additives: AdditivesKeys[]; // TODO: only use string -> keys
  allergens: AllergenesKeys[];
  otherInfo: OtherMealInfoKeys[];
  price: Price;
};
