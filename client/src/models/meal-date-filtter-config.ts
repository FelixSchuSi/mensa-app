export interface MealDateFilterConfig {
  start: number | null;
  end: number | null;
}

export type DateFilterType = 'all' | 'tomorrow' | 'this-week' | 'next-week' | 'custom';
