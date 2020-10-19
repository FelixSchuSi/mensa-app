import { css, customElement, html, LitElement, query, unsafeCSS } from 'lit-element';

const componentCSS = require('./sign-up.component.scss');

@customElement('app-sign-up')
class SignUpComponent extends LitElement {
  static styles = css`
    ${unsafeCSS(componentCSS)}
  `;

  render() {
    return html`
      <h1>Konto erstellen</h1>
      <form novalidate>
        <div>
          <label for="name">Name</label>
          <input type="text" autofocus required id="name" name="name" />
        </div>
        <div>
          <label for="email">E-Mail</label>
          <input type="email" required id="email" name="email" />
        </div>
        <div>
          <label for="password">Passwort</label>
          <input type="password" required minlength="10" id="password" name="password" />
        </div>
        <div>
          <label for="password-check">Passwort nochmals eingeben</label>
          <input type="password" required minlength="10" id="password-check" name="passwordCheck" />
        </div>
        <button type="button" @click="${this.submit}">Konto erstellen</button>
      </form>
    `;
  }

  async submit(event: Event) {}
}
