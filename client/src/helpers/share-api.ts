import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

export interface ShareParameter {
  title: string;
  subtitle: string;
  text: string;
  path?: string;
  subject: string;
}

export function buildShareURL(path?: string): string {
  let uri: string | undefined;
  if (path) {
    if (new RegExp('%[0-9a-f]{2}', 'i').test(path)) {
      uri = path;
    } else {
      uri = encodeURI(path);
    }
  }
  return 'https://mensa-app.dub-services.de' + (uri ? `/${uri}` : '');
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
