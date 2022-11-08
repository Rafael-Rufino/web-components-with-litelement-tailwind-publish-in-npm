import "../../styles.css";

import { html, customElement, property, LitElement } from "lit-element";

@customElement("input-app")
export class Input extends LitElement {
  createRenderRoot() {
    return this;
  }
  @property()
  id!: string;

  @property()
  name?: string;

  @property()
  label?: string;

  @property()
  type?: "text" | "number" | "date" | "email" | "password";

  @property()
  placeholder!: string;

  @property()
  onChange?: (event: MouseEvent) => void;

  @property()
  onInput?: (event: InputEvent) => void;

  @property()
  textTransform?: "uppercase" | "lowercase" | "capitalize";

  @property()
  role?: string;

  @property()
  ref?: string;

  render() {
    return html`
      <div>
        <label
          class="text-base  text-left pb-1  ${this.textTransform}"
          htmlFor=${this.id}
          >${this.label && html`${this.label}`}
        </label>
        <input
          class="flex  w-full h-[54px] rounded text-base border-[1px] border-gray-100 mb-6 pl-[10px]  text-gray-500"
          type=${this.type}
          onchange=${this.onChange}
          ref=${this.ref}
          name=${this.name}
          oninput=${this.onInput}
          role=${this.role}
          placeholder=${this.placeholder}
        />
      </div>
    `;
  }
}
