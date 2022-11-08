import "../../styles.css";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("linkicon-app")
export class LinkIcon extends LitElement {
  createRenderRoot() {
    return this;
  }
  @property()
  title!: string;

  @property()
  name?: string;

  @property()
  href?: string;

  @property()
  as?: any;

  @property()
  to?: {
    pathname?: string;
    search?: string;
    hash?: string;
    state?: unknown;
  };

  @property()
  role?: string;

  @property()
  src?: string;

  render() {
    return html`
      <div class="flex justify-center items-center pt-5 gap-1">
        <img src=${this.src} alt=${this.name} />
        <a
          class="text-blue-700 hover:text-blue-900   transition-colors font-sans underline text-sm leading-tight font-semibold cursor-pointer hover:filter hover: brightness-90"
          title=${this.title}
          href=${this.href}
          role=${this.role}
          src=${this.src}
          as=${this.as}
          .to=${this.to}
        >
          ${this.name}
        </a>
      </div>
    `;
  }
}
