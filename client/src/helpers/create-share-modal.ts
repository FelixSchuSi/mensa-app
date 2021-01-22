import { ShareParameter } from './share-api';
import { modalController } from '@ionic/core';

export async function createShareModal(params: ShareParameter, showNotification: (msg: any) => void): Promise<void> {
  const modal: HTMLIonModalElement = await modalController.create({
    component: 'app-share-modal',
    swipeToClose: true,
    componentProps: {
      shareParams: params,
      setNotification: showNotification
    }
  });
  await modal.present();
}
