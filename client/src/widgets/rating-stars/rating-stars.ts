import { LitElement, TemplateResult, html } from 'lit';

import { customElement, property } from 'lit/decorators.js';

@customElement('app-rating-starts')
export class RatingStarsWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Number })
  protected rating!: number;

  protected render(): TemplateResult {
    return html`${this.ratingTemplate}`;
  }

  protected get ratingTemplate(): TemplateResult[] {
    const template: TemplateResult[] = [];
    for (let i = 1; i <= 5; i++) {
      if (this.rating === i - 0.5) {
        template.push(html`<ion-icon style="color: #ffd203" name="star-half-outline"></ion-icon> `);
      } else if (i <= this.rating) {
        template.push(html`<ion-icon style="color: #ffd203" name="star"></ion-icon> `);
      } else if (i > this.rating) {
        template.push(html`<ion-icon style="color: #ffd203" name="star-outline"></ion-icon> `);
      }
    }
    return template;
  }
}
