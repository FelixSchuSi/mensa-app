export interface ShareParameter {
  title: string;
  text: string;
  path?: string;
}
export function share(parameter: ShareParameter): boolean {
  if (navigator.share) {
    navigator.share({
      title: parameter.title,
      text: parameter.text + (parameter.path ? '\n' : ''),
      url: window.location.hostname + (parameter.path ? `/${parameter.path}` : '')
    });
    return true;
  } else {
    return false;
  }
}
