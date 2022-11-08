import "../../styles.css";
import { property, customElement, html, LitElement } from "lit-element";

@customElement("button-app")
class Button extends LitElement {
  createRenderRoot() {
    return this;
  }
  @property()
  name?: string;

  @property()
  isLoading?: boolean;

  @property()
  onClick?: (event: MouseEvent) => void;

  @property()
  type?: "button" | "submit" | "reset";

  @property({ type: Boolean })
  disabled?: true;

  @property()
  value?: string;

  @property()
  role?: string;

  @property()
  isActive?: boolean;

  @property()
  src?: string;

  render() {
    return html`
      <button
        class="${this.disabled &&
        "disabled:bg-blue-100 disabled:cursor-not-allowed"} bg-blue-600 flex w-full justify-center items-center text-center text-white h-[54px] 
        cursor-pointer px-4  rounded text-base font-bold hover:filter hover:bg-blue-900 transition-all"
        @click=${this.onClick}
        type=${this.type}
        value=${this.value}
        ?disabled=${this.disabled}
        isLoading=${this.isLoading}
        role=${this.role}
        isActive=${this.isActive}
      >
        <img src="${this.src}" alt="lock" />
        <span>${this.name}</span>
      </button>
    `;
  }
}

export { Button };
