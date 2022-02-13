export class Alert extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .alert {
                    z-index: 1; 
                }
            </style>
            <div class="alert">
                <slot><slot>
            </div>
        `
    }
  
    connectedCallback() {
        this._alert = this.shadowRoot.querySelector('.alert');
        setTimeout(this.hideAlert.bind(this), 3000);
    }
    //attributeChangeCallback() {}
    //disconnectedCallback() {}

    showAlert() {
        this._alert.style.display = 'block';
    }

    hideAlert() {
        this._alert.style.display = 'none';
    }
}

customElements.define('p-alert', Alert);

