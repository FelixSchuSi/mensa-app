import { Meal } from '../../../server/src/models/meal';
import { httpService } from './http.service';
import { QueryParameter } from './router.service';
import { storeService } from './store.service';

export type MealsListener = (meals: Meal[]) => void;

class MealService {
  public meals: Meal[] = [];
  private MEALKEY = 'meals';
  private listeners: MealsListener[] = [];

  public async getMeals(): Promise<void> {
    if (navigator.onLine) {
      const response = await httpService.get('meals');
      const meals = <Meal[]>(await response.json()).results;
      await this.setMeals(meals);
    } else {
      let meals = <Meal[] | null>await storeService.get(this.MEALKEY);
      if (meals === null) meals = [];
      await this.setMeals(meals);
    }
  }

  public async getMeal(search: string): Promise<Meal> {
    if (navigator.onLine) {
      const response = await httpService.get('meals/search' + search);
      const meal = <Meal>(await response.json()).results;
      return meal;
    } else {
      const params = new URLSearchParams(search);
      const filter = { mensa: params.get('mensa'), title: params.get('title') };
      await this.getMeals();
      const meal = this.meals.find(m => m.mensa === filter.mensa && m.title === filter.title);
      return meal ?? <Meal>{};
    }
  }

  protected async setMeals(newMeals: Meal[]) {
    this.meals = newMeals;
    await storeService.set(this.MEALKEY, this.meals);
    this.notifyListeners();
  }

  public subscribe(listener: MealsListener): void {
    this.listeners.push(listener);
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.meals));
  }
}

export const mealService = new MealService();
