import { LitElement, html, customElement, css } from 'lit-element';

@customElement('button-app')
class Button extends LitElement {
  static styles = [css`
  #btn {
   background: #66A9FF;
   display: flex;
   justify-content: center;
   color: #FFF;  
   height: 54px;
   font-weight: bold;
   font-size: 1rem;
   width: 100%;
   align-items: center;
   text-align: center;
   padding: 8px;
   border-radius: 4px;
   border: none;
   &:hover {
       filter: brightness(0.9);
   }
}
`];
  render() {
    return html`
    <button id="btn">Acessando sua conta</button>
    `;
  }
}

export default Button;