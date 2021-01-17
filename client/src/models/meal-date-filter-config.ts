import { getToday } from '../helpers/get-today';
import { getTomorrow } from '../helpers/get-tomorrow';

export interface MealDateFilterConfig {
  start: number | null;
  end: number | null;
}

const tomorrow = getTomorrow();
export const DEFAULT_DATE_FILTER: MealDateFilterConfig = { start: tomorrow.getTime(), end: null }; // 'all' type

export type DateFilterType = 'all' | 'tomorrow' | 'this-week' | 'next-week' | 'custom';
