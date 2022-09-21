import "../../styles.css";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("checktext-app")
export class CheckText extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property()
  id!: string;

  @property()
  name!: string;

  @property()
  value!: string;

  render() {
    return html`
      <div class="flex justify-start items-center pt-6 pb-[34px]">
        <input type="checkbox" id=${this.id} value=${this.value} />
        <label class="font-base pl-4 leading-tight text-gray-600" id=${this.id}
          >${this.name}</label
        >
      </div>
    `;
  }
}
