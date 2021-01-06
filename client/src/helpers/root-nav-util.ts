export async function pushToNav(component: string, nav: HTMLIonNavElement): Promise<boolean> {
  const active = await nav.getActive();
  if (active?.component === component) return true;
  return nav.push(component);
}

export async function popFromRootNav(): Promise<boolean> {
  const rootNav: HTMLIonNavElement = <HTMLIonNavElement>document.querySelector('#root-nav');
  return rootNav.pop();
}

export async function clearRootNav(): Promise<boolean> {
  const rootNav: HTMLIonNavElement = <HTMLIonNavElement>document.querySelector('#root-nav');
  return rootNav.popToRoot();
}
