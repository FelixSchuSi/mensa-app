export async function pushRootNav(component: string): Promise<boolean> {
  const rootNav: HTMLIonNavElement = <HTMLIonNavElement>document.querySelector('#root-nav');
  return rootNav.push(component);
}
