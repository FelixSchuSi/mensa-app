import { Meal } from '../../../server/src/models/meal';
import { httpService } from './http.service';
import { storeService } from './store.service';

export type MealsListener = (meals: Meal[]) => void;

class MealService {
  public meals: Meal[] = [];
  private MEALKEY = 'meals';
  private listeners: MealsListener[] = [];

  public async getMeals(): Promise<void> {
    if (navigator.onLine) {
      const response = await httpService.get('meals');
      let tasks = <Meal[]>(await response.json()).results;
      await this.setMeals(tasks);
    } else {
      let tasks = <Meal[] | null>await storeService.get(this.MEALKEY);
      if (tasks === null) tasks = [];
      await this.setMeals(tasks);
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
