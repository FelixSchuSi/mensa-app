import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

export interface ShareParameter {
  title: string;
  text: string;
  path?: string;
  subject: string;
}
export function buildShareURL(path?: string): string {
  return 'https://mensa-app.dub-services.de/' + (path ? `/${path}` : '');
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
    return false;
  }
}
