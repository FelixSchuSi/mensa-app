import { LitElement } from 'lit-element';
import './sign-in.component';

describe('app-sign-in', () => {
  let element: LitElement;

  beforeEach(async () => {
    element = document.createElement('app-sign-in') as LitElement;
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    element.remove();
  });

  it('should render the title "Anmelden"', async () => {
    const h1Elem = element.shadowRoot!.querySelector('h1') as HTMLElement;
    expect(h1Elem.innerText).toBe('Anmelden');
  });
});
