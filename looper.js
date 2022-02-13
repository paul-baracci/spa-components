/**
 * Looper that renders each element according to html.
 * Uses eval to convert incoming html string to template literals.
 *
 * Each object in an array will be statically referred to 'object'.
 *
 * <p-loop each="fetchUrl">
 *      <div>
 *          ${object.key} is ${object.value}
 *      </div> 
 * </p-loop>
 */
export class Looper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const element = document.querySelector('p-loop');
        fetch(element.getAttribute('each'))
        .then((response) => response.json())
        .then((data) => {
            data.forEach((object) => {
                // Replace eval with something else, maybe regex
                this.shadowRoot.innerHTML += eval('`' + element.innerHTML + '`');
            });
        })
        .catch(() => {});
    }
    //attributeChangeCallback() {}
    //disconnectedCallback() {}
}

customElements.define('p-loop', Looper);

