import { getToday } from './get-today';

export function getTomorrow(): Date {
  const today = getToday();
  return new Date(today.setDate(today.getDate() + 1));
}
