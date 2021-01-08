import { AdditivesKeys } from '../../../server/src/models/additives';
import { AllergenesKeys } from '../../../server/src/models/allergenes';
import { OtherMealInfoKeys } from '../../../server/src/models/other-meal-info';

let allContents: Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys> = [];
export function getAllContents(): Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys> {
  if (allContents.length > 0) return allContents;
  const values = [
    // AdditiveKeys is the only numeric enum. 0 is a placeholder with no meaning
    ...Object.values(AdditivesKeys).filter(additive => typeof additive === 'number' && additive !== 0),
    ...Object.values(AllergenesKeys),
    ...Object.values(OtherMealInfoKeys).filter(info => info !== 'Vgn' && info !== 'Vgt')
  ];
  const result = sortContents(<Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys>>values);
  allContents = result;
  return result;
}

function sortContents(
  input: Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys>
): Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys> {
  const firstItems: Array<AdditivesKeys | AllergenesKeys | OtherMealInfoKeys> = <any>['G', 'A', 'H', 'Alk', 'Sch'];
  const withoutFirstItems = input.filter(content => !firstItems.includes(content));
  const sorted = [...firstItems, ...withoutFirstItems];
  return sorted;
}
