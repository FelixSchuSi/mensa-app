import { httpService } from '../services/http.service';

export enum WhatToShare {
  GROUP,
  MEAL
}
export interface ShareObject {
  title: string;
  text: string;
  url: string;
}
const ShareContentMap = new Map<WhatToShare, ShareObject>();

export async function share(title: string, text: string, path?: string): Promise<boolean> {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
      url: window.location.hostname + (path ? `/${path}` : '')
    });
    return true;
  } else {
    return false;
  }
}
export function shareGroup(joinCode: string) {
  share('');
}
