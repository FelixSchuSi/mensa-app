import { Price } from '../models/price';

export function parsePrice(str: string): Price {
  str = str.trim();
  const prices = str.split('/');
  const parsedPrices: number[] = prices.map(val => {
    return parseFloat(val.replace('€', '').replace(',', '.').trim());
  });

  return {
    student: parsedPrices[0],
    employee: parsedPrices[1],
    guest: parsedPrices[2]
  };
}
