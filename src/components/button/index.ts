import "../../styles.css";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("button-app")
class Button extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property()
  name!: string;

  @property()
  onClick!: (event: CustomEvent<HTMLButtonElement>) => void;

  @property()
  type?: "button" | "submit" | "reset";

  render() {
    return html`
      <button
        class="bg-blue-500 flex w-full justify-center items-center text-center text-white h-[54px] 
          cursor-pointer px-4  rounded text-base font-bold hover:filter hover:brightness-90 transition-all"
        onClick=${this.onClick}
        type=${this.type}
      >
        ${this.name}
      </button>
    `;
  }
}

export { Button };
