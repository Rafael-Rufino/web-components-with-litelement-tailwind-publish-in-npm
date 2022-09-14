import { LitElement, html, customElement, css } from 'lit-element';

@customElement('input-app')
class Input extends LitElement {
  static styles = [css`
        div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .label{
            font-size: 1rem;
            text-align: left;
          }
       .input{
          border: none;
          color: #000000;
          background-color: #f5f5f5;
          border: 1px solid  #E3E3E8;
          border-radius: 4px;
          height: 54px;
          padding-left: 10px;
          margin-top: 4px;
        ::placeholder {
          color: #363843;
          font-size: 0.8rem;
          text-transform: none;
          }
        
       }
  
    `];

  render() {
    return html`
    <div>
      <label class="label">Seu login</label>
      <input class="input" type="text" placeholder="E-mail, CPF, Usuário ou Celular" />
    </div>
    `;
  }
}

export default Input;