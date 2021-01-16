import { LitElement, customElement, TemplateResult, property, html, internalProperty } from 'lit-element';

@customElement('app-rating-starts-pick')
export class RatingStarsPickWidget extends LitElement {
  protected createRenderRoot(): LitElement {
    return this;
  }

  @internalProperty()
  protected displayRating: number = 0;

  protected rating: number = 0;

  protected isMouseOverContainer: boolean = false;

  protected render(): TemplateResult {
    return html`
      <ion-buttons
        @mouseover=${() => (this.isMouseOverContainer = true)}
        @mouseleave=${() => {
          this.isMouseOverContainer = false;
          this.onMouseLeave();
        }}
      >
        ${[1, 2, 3, 4, 5].map(
          index => html`
            <ion-button
              style="width: 35px; height: 35px; --padding-start:0px"
              id=${index}
              @mouseover=${this.onHover}
              @mouseleave=${this.onMouseLeave}
              @click=${this.onClick}
            >
              <ion-icon
                slot="icon-only"
                style="color: var(--ion-color-primary)"
                name="${this.displayRating >= index ? 'star' : 'star-outline'}"
              ></ion-icon>
            </ion-button>
          `
        )}
      </ion-buttons>
    `;
  }

  protected onHover(e: any) {
    this.displayRating = <number>e.target.id;
  }

  protected onMouseLeave() {
    if (!this.isMouseOverContainer) {
      this.displayRating = this.rating;
    }
  }

  protected onClick(e: any) {
    this.rating = <number>e.target.id;
  }
}
