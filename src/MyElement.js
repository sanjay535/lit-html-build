import { html, css, LitElement } from 'lit-element';
import { TestCard } from './TestCard';
import { CustomCard } from '@sanjay535/custom-web';

customElements.define('test-card', TestCard);
customElements.define('custom-card', CustomCard);

export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
      }
.row{
  display:grid;
  grid-template-columns:1fr 1fr;
  column-gap:24px;
  margin:0 10px;
}
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <test-card color='red'></test-card>
      <div class="row">
      <custom-card color="green"></custom-card>
      <custom-card color="#4657b2"></custom-card>
      </div>
      
    `;
  }
}
