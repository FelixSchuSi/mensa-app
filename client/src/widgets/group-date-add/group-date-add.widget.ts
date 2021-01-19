import { LitElement, customElement, internalProperty, property, TemplateResult, html, query } from 'lit-element';
import { Group } from '../../../../server/src/models/group';
import { LanguageStrings } from '../../models/language-strings';
import { i18nService } from '../../services/i18n.service';

@customElement('app-group-date-add')
export class GroupDateAddWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Object, attribute: false })
  protected i18n!: LanguageStrings;

  protected render(): TemplateResult {
    return html`
      <ion-card class="termin-card">
        <ion-card-content style="display: flex; flex-direction:column; ">
          <!-- <h1 style="color: var(--ion-text-color)">ADD</h1> -->
          <div>Termin hinzufügen</div>
        </ion-card-content>
      </ion-card>
    `;
  }
}
