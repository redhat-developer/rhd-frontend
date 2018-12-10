//import PFElement from '../../@pfelements/pfelement.js';
import RHElement from '../../@rhelements/rhelement/rhelement.js';

export default class DPCategoryItem extends RHElement {
    get html() {
        return `
            <style>
            
            </style>
            <slot></slot>
            `;
    }

    static get tag() { return 'dp-category-item'; }
    
    constructor() {
        super(DPCategoryItem);
        
    }

    connectedCallback() {
        super.connectedCallback();
    }

    static get observedAttributes() { 
        return ['url', 'name']; 
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
}

RHElement.create(DPCategoryItem);
// window.customElements.define('dp-category-item', DPCategoryItem);