import { LitElement, html, customElement, property, css } from 'lit-element'

@customElement('heading-app')
export class Heading extends LitElement {
  static styles = [
    css`
      div {
        position: relative;
        width: 100%;
        text-align: center;
      }
      .description {
        font-size: 1rem;
        line-height: 120%;
        color: #646981;
      }
      .title {
        color: #363843;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 120%;
      }
    `,
  ]

  @property()
  title!: string
  
  @property()
  description!: string

  render() {
    return html`
      <div>
        <h1 class="title">${this.title}</h1>
        <p class="description"> ${this.description ? html`${this.description }`: ''} </p>
      </div>
    `
  }
}

