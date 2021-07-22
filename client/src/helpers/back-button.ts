import { html, TemplateResult } from 'lit';
import { Routes } from '../routes';
import { goBackTo } from './go-back-to';
import { popFromRootNav } from './nav-util';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

// export async function backButton(): Promise<TemplateResult> {
//   const { operatingSystem } = await Device.getInfo();
//   if (operatingSystem.toLocaleLowerCase() === 'ios') {
//     const rootNav: HTMLIonNavElement = <HTMLIonNavElement>document.querySelector('#root-nav');

//     return html` <ion-button @click=${async () => await rootNav.popToRoot()}> Back </ion-button> `;
//   } else {
//     return html`
//       <ion-back-button
//         @click=${async () => {
//           await popFromRootNav();
//           goBackTo(Routes.MEALS_TODAY);
//         }}
//       ></ion-back-button>
//     `;
//   }
// }
