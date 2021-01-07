import { AdditivesKeys } from '../../../server/src/models/additives';
import { AllergenesKeys } from '../../../server/src/models/allergenes';
import { Meal } from '../../../server/src/models/meal';
import { OtherMealInfoKeys } from '../../../server/src/models/other-meal-info';
import { MealFilterConfig } from '../models/meal-filter-config';

// TODO load default filter from user service
export const DEFAULT_MEAL_FILTER_CONFIG: MealFilterConfig = {
  mensen: ['aasee', 'davinci', 'denkpause', 'ring', 'steinfurt'],
  nogos: []
};

export class MealFilterService {
  private config: MealFilterConfig;

  constructor(config: MealFilterConfig) {
    this.config = config;
  }

  public filter(input: Meal[]): Meal[] {
    const filtered: Meal[] = input.filter(meal => {
      let validMeal = true;
      // If the meal is not from a mensa in the list of mensas, the meal is not valid
      if (this.config.mensen.indexOf(meal.mensa) === -1) validMeal = false;

      const compounds: Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys> = [
        ...meal.additives,
        ...meal.allergens,
        ...meal.otherInfo
      ];

      for (const compound of compounds) {
        // If the meal consists of a compount that is on the list of forbidden compounds,
        // The meal is invalid
        if (this.config.nogos.indexOf(compound) !== -1) validMeal = false;
      }

      return validMeal;
    });
    return filtered;
  }
}
