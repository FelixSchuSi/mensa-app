import { FlatMeal } from '../../../server/src/models/flatMeal';

export function getUniqueDateMensaCombinations(
  flatMeals: FlatMeal[]
): { date: string; mensa: 'aasee' | 'davinci' | 'denkpause' | 'ring' | 'steinfurt' }[] {
  // Get all unique date - mensa combinations
  const mapped = flatMeals.map(flatMeal => {
    const { date, mensa } = flatMeal;
    return JSON.stringify({ date, mensa });
  });
  const unique = Array.from(new Set(mapped));
  return unique.map(item => JSON.parse(item));
}
