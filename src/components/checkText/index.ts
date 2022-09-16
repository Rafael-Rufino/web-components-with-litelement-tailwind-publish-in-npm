import { LitElement, html, customElement, property, css } from 'lit-element'

@customElement('checktext-app')
export class CheckText extends LitElement {
  static styles = [
    css`
      div {
        display: flex;
        justify-content: left;
        align-items: left;
        padding-top:25px;
        padding-bottom: 34px;
      }
      .text {
        font-size: 1rem;
        line-height: 120%;
        color:#4D5163;
        padding-left: 16px;

      }
    `,
  ]

  @property()
  id!: string

  @property()
  name!: string

  @property()
  value!: string
  
  render() {
    return html`
      <div>
        <input type="checkbox" id=${this.id} value=${this.value}/>
        <label class="text" id=${this.id}>${this.name}</label>
      </div>
    `
  }
}

