import "../../styles.css";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("linkicon-app")
export class LinkIcon extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property()
  name!: string;

  @property()
  title!: string;

  @property()
  target!: string;

  @property()
  href!: string;

  @property()
  src!: string;

  render() {
    return html`
      <div class="flex justify-center items-center pt-9">
        <img src=${this.src} alt=${this.name} />
        <a
          class="text-blue-700 transition-all underline text-base leading-normal cursor-pointer hover:filter hover: brightness-90"
          title=${this.title}
          href=${this.href}
          >${this.name}</a
        >
      </div>
    `;
  }
}
