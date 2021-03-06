import { LitElement, html, customElement, property, css } from "lit-element";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("codyschool-element")
export class CodySchoolElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 40rem;
      margin: 6rem auto 2rem;
      text-align: center;
    }

    h1 {
      padding: 0 0.25em;
      font-size: 1.875rem;
    }

    button {
      background: linear-gradient(
        90deg,
        rgba(77, 197, 255, 1) 0%,
        rgba(131, 135, 255, 1) 35%,
        rgba(149, 112, 255, 1) 100%
      );
      display: inline-block;
      vertical-align: middle;
      padding: 1rem 2rem;
      margin: 0 0.5rem;
      color: #fff;
      font-weight: 500;
      cursor: pointer;
      font-size: 1rem;
      text-align: center;
      border-radius: 2rem;
      text-decoration: none;
      min-width: 5rem;
      border: 1px solid rgba(131, 135, 255, 1);
    }

    button:hover,
    button:focus {
      outline: none;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = "Vite, LitElement and TypeScript";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <h1>${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "codyschool-element": CodySchoolElement;
  }
}
