import { LitElement, html } from 'lit-element';

class CodySchoolBoilerplate extends LitElement {
  static get properties() {
    return {
      msg: { type: String },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`<div>${this.msg}</div>`;
  }
}

customElements.define('codyschool-boilerplate', CodySchoolBoilerplate);
