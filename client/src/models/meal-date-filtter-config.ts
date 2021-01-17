import { getToday } from '../helpers/get-today';

export interface MealDateFilterConfig {
  start: number | null;
  end: number | null;
}

export const DEFAULT_DATE_FILTER = { start: getToday().getTime(), end: null }; // 'all' type

export type DateFilterType = 'all' | 'tomorrow' | 'this-week' | 'next-week' | 'custom';
