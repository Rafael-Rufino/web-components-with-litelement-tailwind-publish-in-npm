import { LitElement, html, customElement, property, css } from 'lit-element'

@customElement('linkicon-app')
export class LinkIcon extends LitElement {
  static styles = [
    css`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top:35px;
      }
      .link {
        font-size: 1rem;
        line-height: 120%;
        color: #0D71F0;
        text-decoration: underline;
        transition: 0.3s;
      }
      .link:hover {
        filter: brightness(0.9);
        cursor: pointer;
      }

    `,
  ]

  @property()
  name!: string
  
  @property()
  title!: string

  @property()
  target!: string

  @property()
  href!: string
  
  @property()
  src!: string 

  render() {
    return html`
      <div>
        <img src=${this.src} alt=${this.name} />
        <a class="link" title=${this.title} href=${this.href}>${this.name}</a>
      </div>
    `
  }
}

