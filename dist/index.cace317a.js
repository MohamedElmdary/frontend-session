class CodeScalersFamily extends HTMLElement {
    static get observedAttributes() {
        return [
            "color"
        ];
    }
    constructor(){
        super();
        const template = document.createElement("template");
        template.innerHTML = `
        <div class="colorize">
            <p>
                <span>We love cs family</span>
            </p>
        </div>
    `;
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot?.appendChild(template.content.cloneNode(true));
    }
    attributeChangedCallback(name, oldValue, newValue) {
        const div = this.shadowRoot?.querySelector(".colorize");
        div.style[name] = newValue;
    }
}
window.customElements.define("cs-family", CodeScalersFamily);

//# sourceMappingURL=index.cace317a.js.map
