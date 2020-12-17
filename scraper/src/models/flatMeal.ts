import { AdditivesKeys } from './additives';
import { AllergenesKeys } from './allergenes';
import { OtherMealInfoKeys } from './other-meal-info';
import { Price } from './price';
export interface FlatMeal {
  title: string;
  date: string;
  mensa: string;
  additives: AdditivesKeys[]; // TODO: only use string -> keys
  allergens: AllergenesKeys[];
  otherInfo: OtherMealInfoKeys[];
  price: Price;
}

//   additives: {
//     0: boolean;
//     1: boolean;
//     2: boolean;
//     3: boolean;
//     4: boolean;
//     5: boolean;
//     6: boolean;
//     7: boolean;
//     8: boolean;
//     9: boolean;
//     10: boolean;
//   };
//   allergens: {
//     A: boolean;
//     ADI: boolean;
//     AGE: boolean;
//     AHA: boolean;
//     AKA: boolean;
//     ARO: boolean;
//     AWE: boolean;
//     B: boolean;
//     C: boolean;
//     D: boolean;
//     E: boolean;
//     F: boolean;
//     G: boolean;
//     H: boolean;
//     HMA: boolean;
//     HHA: boolean;
//     HWA: boolean;
//     HCA: boolean;
//     HPE: boolean;
//     HPA: boolean;
//     HPI: boolean;
//     HQU: boolean;
//     I: boolean;
//     J: boolean;
//     K: boolean;
//     L: boolean;
//     M: boolean;
//     N: boolean;
//   };
//   otherInfo: {
//     Rin: boolean;
//     Sch: boolean;
//     Vgt: boolean;
//     Vgn: boolean;
//     Fis: boolean;
//     Gfl: boolean;
//     Alk: boolean;
//   };
