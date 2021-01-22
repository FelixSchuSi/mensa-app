import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

export interface ShareParameter {
  title: string;
  text: string;
  path?: string;
  subject: string;
}
export function buildShareURL(path?: string): string {
  return 'https://mensa-app.dub-services.de' + (path ? encodeURI(`/${path}`) : '');
}
export async function share(parameter: ShareParameter): Promise<boolean> {
  try {
    await Share.share({
      title: parameter.title,
      text: parameter.text,
      url: buildShareURL(parameter.path),
      dialogTitle: parameter.title
    });
    return true;
  } catch (e) {
    // Canceled will result in error w/ message
    // If Browser Share API not present, error will not have a message
    if (e.message) {
      return true;
    }
    return false;
  }
}
