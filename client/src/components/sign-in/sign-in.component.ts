import { css, customElement, html, LitElement, query, unsafeCSS } from 'lit-element';

const componentCSS = require('./sign-in.component.scss');

@customElement('app-sign-in')
class SignInComponent extends LitElement {
  static styles = css`
    ${unsafeCSS(componentCSS)}
  `;

  render() {
    return html`
      <h1>Anmelden</h1>
      <form>
        <div>
          <label for="email">E-Mail</label>
          <input type="email" autofocus required id="email" name="email" />
        </div>
        <div>
          <label for="password">Passwort</label>
          <input type="password" required id="password" name="password" />
        </div>
        <button type="button" @click="${this.submit}">Anmelden</button>
      </form>
    `;
  }

  async submit(event: Event) {}
}
