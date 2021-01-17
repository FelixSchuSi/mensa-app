import { Price } from '../../../../server/src/models/price';
import { Status } from '../../../../server/src/models/status';
import { LanguageStrings } from '../../models/language-strings';
import { Languages } from '../../models/languages';

export function transformPrice(
  price: Price,
  status: Status | undefined,
  i18n: LanguageStrings,
  smallLayout: boolean = false
): string {
  let { student, employee, guest } = internationalizePrice(price, i18n);
  switch (status) {
    case 'EMPLOYEE':
      return `${employee} €`;
    case 'GUEST':
      return `${guest} €`;
    case 'STUDENT':
      return `${student} €`;
    default:
      if (smallLayout) {
        return `${guest} €`;
      } else {
        return `${student} € - ${employee} € - ${guest} €`;
      }
  }
}

function internationalizePrice(
  price: Price,
  i18n: LanguageStrings
): { student: string; employee: string; guest: string } {
  if (price.employee === null || price.student === null || price.guest === null) {
    price = { student: 2.3, employee: 3.4, guest: 4.15 };
  }
  let values = Object.values(price);

  const transformedValues = values.map(value => {
    // Enforce two decimal places
    let [vks, nks] = String(value).split('.');
    nks = nks ?? '00';
    if (nks.length < 2) nks = nks + '0';

    let output: string;
    // swap comma and dot when lang is  german
    if (i18n._LANGUAGE === Languages.GERMAN) {
      output = vks + ',' + nks;
    } else {
      output = vks + '.' + nks;
    }
    return output;
  });

  const [student, employee, guest] = transformedValues;
  return { student, employee, guest };
}
