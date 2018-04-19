import RHElement from '../rhelement';

export default class DPCategoryList extends RHElement {
    template = el => {
        const tpl = document.createElement("template");
        tpl.innerHTML = `
            <style>
                :host {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    justify-items: center;
                    position: relative;
                    background-color: #F9F9F9;
                }
            </style>
            <slot></slot>
            `;
        return tpl;
    }
    constructor() {
        super('dp-category-list');
        
    }

    connectedCallback() {
        super.render(this.template(this));

        this.addEventListener('dp-category-selected', e => {
            let section = this.querySelector(':scope > dp-category-item-list');
            if (section) { section.remove(); }

            let detail = e['detail'];
            let len = this.querySelectorAll('dp-category').length;
            let idx = 1 + (Math.ceil(detail.index / 4) * 4) || len;
            let list = detail.list || null;
            let rowEle = this.querySelector(`dp-category:nth-child(${idx})`);
            list.index = detail.index || 1;
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

/*
1 1 5
2 1 5
3 1 5
4 1 5
5 2 9
6 2 9
7 2 9
8 2 9
9 3 
10 3
*/