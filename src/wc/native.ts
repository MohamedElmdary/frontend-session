class CodeScalersFamily extends HTMLElement {
  static get observedAttributes /* allowedAttributes */() {
    return ["color"];
  }

  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `
        <div class="colorize">
            <p>
                <span>We love cs family</span>
            </p>
        </div>
    `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback /* onAttributeChange */(
    name: string,
    oldValue: string,
    newValue: string
  ) {
    const div = this.shadowRoot?.querySelector(".colorize") as HTMLDivElement;
    div.style[name as any] = newValue;
  }
}

window.customElements.define("cs-family", CodeScalersFamily);
