import { InputChangeEventDetail } from '@ionic/core';
import { LanguageStrings } from '../models/language-strings';

// Custom Function to handle when a form changed.
// When input is invalid, a sorrounding ion-item will change color as well.
// Was implemented for signin and signup.
// If other forms use the same HTML-Structure this function can be reused.
export async function formChanged(event: CustomEvent<InputChangeEventDetail>, i18n: LanguageStrings): Promise<void> {
  // @ts-ignore
  const ionicInputElement: HTMLIonInputElement = event.originalTarget;
  const htmlInputElement: HTMLInputElement = await ionicInputElement.getInputElement();
  const errorElement: any = ionicInputElement.parentNode!.parentNode!.querySelector('.error');
  const ionicLabelElement: any = ionicInputElement.parentNode!.querySelector('ion-label');
  errorElement.innerHTML = htmlInputElement.validationMessage;
  if (htmlInputElement.validationMessage === i18n.PASSWORD_NOT_IDENTICAL) htmlInputElement.setCustomValidity('');
  if (!htmlInputElement.validity.valid) {
    ionicLabelElement.setAttribute('color', 'danger');
    ionicInputElement.setAttribute('color', 'danger');
    htmlInputElement.blur();
    htmlInputElement.focus();
  } else {
    ionicLabelElement.setAttribute('color', 'primary');
    ionicInputElement.setAttribute('color', '');
    htmlInputElement.blur();
    htmlInputElement.focus();
  }
}
