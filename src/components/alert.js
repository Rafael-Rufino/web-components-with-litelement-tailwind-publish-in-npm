const template = document.createElement('template')
template.innerHTML = `
  <style>
    :host {
      --background: hsl(0, 0%, 90%);
      --color: hsl(0, 0, 0);
      --close-button-background: hsl(0, 0%, 80%);
      --close-button-color: hsl(0, 0, 0);
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .container {
      background: var(--background);
      color: var(--color);
      padding: 12px;
      display: flex;
      line-height: 0;
      place-items: center;
      min-height: 24px;
    }

    button {
      background: var(--close-button-background);
      color: var(--close-button-color);
      height: 24px;
      border: 0;
      font-size: 24px;
      line-height: 22px;
      overflow: hidden;
      text-align: center;
      margin-left: auto;
      cursor: pointer;
    }

    :host([status='success']) {
      --background: hsl(115, 44%, 43%);
      --color:  hsl(0, 0%, 100%);
      --close-button-background: hsl(115, 51%, 30%);
      --close-button-color:  hsl(0, 0%, 100%);
    }

    :host([status='danger']) {
      --background: hsl(0, 45%, 48%);
      --color:  hsl(0, 0%, 100%);
      --close-button-background: hsl(0, 51%, 35%);
      --close-button-color:  hsl(0, 0%, 100%);
    }
  </style>
  <div class="container">
    <slot></slot>
    <button hidden>
      &times;
    </button>
  </div>
`

export class XAlert extends HTMLElement {
  static get observedAttributes() {
    return ['closable']
  }

  _closable = false

  get closable() {
    return this._closable
  }

  set closable(value) {
    this._closable = value

    if (this.buttonElement) {
      this.buttonElement.hidden = value
    }
  }

  get buttonElement() {
    return this.shadowRoot.querySelector('button')
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.buttonElement.hidden = !this._closable
    this.buttonElement.addEventListener('click', () => this.dispatchEvent(new CustomEvent('closeChange')))
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === 'closable' && oldValue !== newValue) {
      this.closable = newValue
    }
  }
}

customElements.define('x-alert', XAlert)
