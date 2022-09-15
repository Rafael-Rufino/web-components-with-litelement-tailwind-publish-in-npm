import { LitElement, html, customElement, property, css } from 'lit-element'

@customElement('input-app')
export class Input extends LitElement {
  static styles = [
    css`
      div {
        display: flex;
        flex-direction: column;
      
      }
      .label {
        font-size: 1rem;
        text-align: left;
        padding-bottom: 4px;
     
      }
      .input {
        border: none;
        color: #000000;
        background-color: #f5f5f5;
        border: 1px solid #e3e3e8;
        border-radius: 4px;
        height: 54px;
        padding-left: 10px;
        margin-bottom: 24px;
        ::placeholder {
          color: #363843;
          font-size: 0.8rem;
          text-transform: none;
        }
      }
    `,
  ]
  @property()
  id!: string

  @property()
  label!: string

  @property()
  type!: "text" | "number" | "date" | "email" | "password"

  @property()
  placeholder!: string

  @property()
  onChange!: (event: CustomEvent<HTMLInputElement>) => void

  @property()
  value!: string | number | Date
  

  render() {
    return html`
      <div>
        <label class="label" htmlFor=${this.id}>${this.label && html`${this.label }`} </label>
        <input class="input" type=${this.type} onChange=${this.onChange} placeholder=${this.placeholder} />
      </div>
    `
  }
}


