import RHElement from '../rhelement';

export default class DPCategoryList extends RHElement {
    template = el => {
        const tpl = document.createElement("template");
        tpl.innerHTML = `
<style>
    :host {
        position: relative;
        background-color: #F9F9F9;
        padding: 30px 0;
        display: block;
    }
    section {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
        margin: 0 auto;
        width: 1200px;
        justify-items: center;
    }
</style>
<section data-rhd-grid="quad">
<slot></slot>
</section>
`;
        return tpl;
    }
    constructor() {
        super('dp-category-list');
        
    }

    connectedCallback() {
        super.render(this.template(this));

        //this.setAttribute('data-rhd-grid', 'quad');

        this.addEventListener('dp-category-selected', e => {
            let section = this.querySelector(':scope > dp-category-item-list');
            if (section) { section.remove(); }

            let detail = e['detail'];
            let len = this.querySelectorAll(':scope > dp-category').length;
            let idx = 1 + (Math.ceil(detail.index / 4) * 4) || len;
            let list = detail.list || null;
            let rowEle = this.querySelector(`dp-category:nth-child(${idx})`);
            list.index = detail.index || 1;
            list.style.display = 'block';
            if (idx <= len) {
                this.insertBefore(list, rowEle);
            } else {
                this.appendChild(list);
            }
            
        });

        this.addEventListener('dp-category-deselected', e => {
            let section = this.querySelector(':scope > dp-category-item-list');
            if (section) { section.remove(); }
        });

        
    }

    static get observedAttributes() { 
        return ['url', 'name']; 
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
}

window.customElements.define('dp-category-list', DPCategoryList);