export class Modal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .modal {
                    display: none; 
                    position: fixed; 
                    z-index: 1; 
                    padding-top: 100px;  
                }
            </style>
            <button>
                <slot name="open-modal">
                    <div>Open Modal</div>
                </slot>
            </button>
            <div class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="close">&times;</span>
                        <slot name="header"><h1>Default text</h1></slot>
                    </div>
                    <div class="modal-body">
                        <slot><slot>
                    </div>
                </div>
            </div>
        `
    }
  
    connectedCallback() {
        this._modal = this.shadowRoot.querySelector('.modal');

        this.shadowRoot.querySelector('button')
            .addEventListener('click', this._showModal.bind(this));
        this.shadowRoot.querySelector('.close')
            .addEventListener('click', this._hideModal.bind(this));
    }

    //attributeChangeCallback() {}
    disconnectedCallback() {
        this.shadowRoot.querySelector('button')
            .removeEventListener('click', this._showModal());
        this.shadowRoot.querySelector('.close')
            .removeEventListener('click', this._hideModal());
    }

    _showModal() {
        this._modal.style.display = 'block';
    }

    _hideModal() {
        this._modal.style.display = 'none';
    }
}

customElements.define('p-modal', Modal);

