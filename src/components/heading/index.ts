import "../../styles.css";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("heading-app")
export class Heading extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property()
  title!: string;

  @property()
  description!: string;

  render() {
    return html`
      <div class="w-full text-center relative">
        <h1 class="text-2xl leading-normal font-bold text-gray-300">
          ${this.title}
        </h1>
        <p class="text-base text-gray-400 leading-normal pb-6 pt-4">
          ${this.description ? html`${this.description}` : ""}
        </p>
      </div>
    `;
  }
}
