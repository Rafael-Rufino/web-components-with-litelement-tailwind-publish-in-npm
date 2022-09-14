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
        color: white;
      }
      .title {
        color: white;
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
    console.log('this', { a: this.description, b: this.title })
    return html`
      <div>
        <h1 class="title">title: ${this.title}</h1>
        <p> ${this.description ? html`${this.description }`: ''} </p>
      </div>
    `
  }
}

// export default Heading

// declare global {
//   interface HTMLElementTagNameMap {
//     'heading-app': Heading
//   }
// }
