import { Builder, By, WebElement, Browser, WebDriver } from 'selenium-webdriver';

describe('sign-in', () => {
  let driver: WebDriver;

  beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should render the title "Anmelden"', async () => {
    await driver.get('http://localhost:8080/app/users/sign-in');
    const appRoot = await driver.findElement(By.css('app-root'));
    const appSignIn = await (await getShadowRoot(appRoot)).findElement(By.css('app-sign-in'));
    const h1 = await (await getShadowRoot(appSignIn)).findElement(By.css('h1'));
    const title = await h1.getText();
    expect(title).toBe('Anmelden');
  });
});

async function getShadowRoot(shadowHost: WebElement) {
  const script = 'return arguments[0].shadowRoot';
  return (await shadowHost.getDriver().executeScript(script, shadowHost)) as WebElement;
}
