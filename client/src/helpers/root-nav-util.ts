export async function pushToRootNav(component: string): Promise<boolean> {
  const rootNav: HTMLIonNavElement = <HTMLIonNavElement>document.querySelector('#root-nav');
  const active = await rootNav.getActive();
  if (active?.component === component) return true;
  return rootNav.push(component);
}

export async function popFromRootNav(): Promise<boolean> {
  const rootNav: HTMLIonNavElement = <HTMLIonNavElement>document.querySelector('#root-nav');
  return rootNav.pop();
}

export async function clearRootNav(): Promise<boolean> {
  const rootNav: HTMLIonNavElement = <HTMLIonNavElement>document.querySelector('#root-nav');
  return rootNav.popToRoot();
}
