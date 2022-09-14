// import { LitElement, html,css } from 'lit';

// import { customElement, query, property } from 'lit/decorators';
import { LitElement, html, customElement, property, css, query } from 'lit-element'

import { IPerson } from './interface'

@customElement('person-card')
export class PersonCard extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        clear: both;
        margin-bottom: 10px;
      }
      h5 {
        font-size: 1.3rem;
        margin-bottom: 0;
      }
      #img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 10px;
        background-size: cover;
        background-image: var(--image-url);
        background-color: var(--color, #ccc);
        float: left;
        overflow: hidden;
      }
    `,
  ]

  @property()
  person!: IPerson

  @query('#img')
  image!: HTMLElement

  firstUpdated() {
    this.image.style.setProperty('--image-url', `url('${this.person.image}')`)
  }

  makeFavourite() {
    const event = new CustomEvent('makeFavourite', { detail: this.person })
    this.dispatchEvent(event)
  }

  render() {
    console.log('this.person', this.person)
    return html`
      <div id="img" alt=${this.person.name}></div>
      <h5>${this.person.name}</h5>
      ${this.person.title ? html`${this.person.title}<br />` : ''}
      <a href="mailto:${this.person.email}">${this.person.email}</a><br />
      <button @click=${this.makeFavourite}>Make Favourite</button>
    `
  }
}
