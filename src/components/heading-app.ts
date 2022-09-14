import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('heading-app')
class Heading extends LitElement {
  static styles = [css`
  div {
    position: relative;
    width: 100%;
    text-align: center;
 
  }
  .description{
    font-size: 1rem;
    line-height: 120%;
    color: white;
  }
  .title{
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 120%;
  }

`];
  @property()
  title!: string;
  description!: string;
  render() {
    return html`
     <div>
        <h1 class="title">${this.title}${this.description}</h1>               
     </div>
    `;
  }
}

export default Heading;

declare global {
  interface HTMLElementTagNameMap {
    "heading-app": Heading;
  }
}