import "../../styles.css";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("input-app")
export class Input extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property()
  id!: string;

  @property()
  label!: string;

  @property()
  type!: "text" | "number" | "date" | "email" | "password";

  @property()
  placeholder!: string;

  @property()
  onChange!: (event: CustomEvent<HTMLInputElement>) => void;

  @property()
  value!: string | number | Date;

  render() {
    return html`
      <div>
        <label class="tetx-base  text-left pb-1" htmlFor=${this.id}
          >${this.label && html`${this.label}`}
        </label>
        <input
          class="flex  w-full h-[54px] rounded text-base border-[1px] border-gray-100 mb-6 pl-[10px]  text-gray-500"
          type=${this.type}
          onChange=${this.onChange}
          placeholder=${this.placeholder}
        />
      </div>
    `;
  }
}
