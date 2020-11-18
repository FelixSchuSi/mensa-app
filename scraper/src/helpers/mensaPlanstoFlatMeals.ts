import { FlatMeal } from '../models/flatMeal';
import { Meal } from '../models/meal';
import { MensaPlan } from '../models/mensa-plan';
import { MenuDay } from '../models/menu-day';

export function mensaPlanstoFlatMeals(mensaPlans: MensaPlan[]): FlatMeal[] {
  const flatMeals: FlatMeal[] = [];
  mensaPlans.forEach((mensaPlan: MensaPlan) => {
    const { mensa, menuDays } = mensaPlan;
    menuDays.forEach((menuDay: MenuDay) => {
      const { date, meals } = menuDay;
      meals.forEach((meal: Meal) => {
        const { title, additives, allergens, otherInfo, price } = meal;
        flatMeals.push({ mensa, date, title, additives, allergens, otherInfo, price });
      });
    });
  });
  return flatMeals;
}
