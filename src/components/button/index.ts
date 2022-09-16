import { LitElement, html, customElement, property, css } from 'lit-element'


@customElement('button-app')
 class Button extends LitElement {
  static styles = [
    css`
      #btn {
        background: #66a9ff;
        display: flex;
        justify-content: center;
        color: #fff;
        height: 54px;
        font-weight: bold;
        font-size: 1rem;
        width: 100%;
        align-items: center;
        text-align: center;
        border-radius: 4px;
        border: none;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
      }
      #btn:hover {
          filter: brightness(0.9);
        }
    `,
  ]
  @property()
  name!: string

  @property()
  onClick!: (event: CustomEvent<HTMLButtonElement>) => void

  @property()
  type?: "button" | "submit" | "reset" 
  
  render() {
    return html` <button id="btn" onClick=${this.onClick} type=${this.type}>${this.name}</button> `
  }
}


export { Button };