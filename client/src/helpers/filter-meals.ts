import { AdditivesKeys } from '../../../server/src/models/additives';
import { AllergenesKeys } from '../../../server/src/models/allergenes';
import { Meal } from '../../../server/src/models/meal';
import { OtherMealInfoKeys } from '../../../server/src/models/other-meal-info';
import { MealFilterConfig } from '../../../server/src/models/meal-filter-config';

export const DEFAULT_MEAL_FILTER_CONFIG: MealFilterConfig = {
  mensen: ['aasee', 'davinci', 'denkpause', 'ring', 'steinfurt'],
  diet: 'STANDARD_DIET',
  nogos: []
};

export function filterMeals(input: Meal[], inputConfig?: MealFilterConfig): Meal[] {
  const config: MealFilterConfig = inputConfig ?? DEFAULT_MEAL_FILTER_CONFIG;
  const filtered: Meal[] = input.filter(meal => {
    let validMeal = true;
    // If the meal is not from a mensa in the list of mensas, the meal is not valid
    if (config.mensen.indexOf(meal.mensa) === -1) validMeal = false;

    if (config.diet !== 'STANDARD_DIET') {
      //@ts-ignore
      if (config.diet === 'Vgn' && !meal.otherInfo.includes('Vgn')) validMeal = false;

      //@ts-ignore // Vegan meals are implicitly vegetarian
      if (config.diet === 'Vgt' && !meal.otherInfo.includes('Vgn') && !meal.otherInfo.includes('Vgt'))
        validMeal = false;
    }

    const compounds: Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys> = [
      ...meal.additives,
      ...meal.allergens,
      ...meal.otherInfo
    ];

    for (const compound of compounds) {
      // If the meal consists of a compount that is on the list of forbidden compounds,
      // The meal is invalid
      if (config.nogos.indexOf(compound) !== -1) validMeal = false;
    }

    return validMeal;
  });
  return filtered;
}
