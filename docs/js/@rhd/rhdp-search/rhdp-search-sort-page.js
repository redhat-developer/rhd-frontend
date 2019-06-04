export default class RHDPSearchSortPage extends HTMLElement {
    constructor() {
        super();
        this.template = `<p>
        <span>Sort results by</span>
        <select>
        <option value="relevance">Relevance</option>
        <option value="most-recent">Most Recent</option>
        </select>
        </p>`;
        this._sortChange = this._sortChange.bind(this);
    }
    get sort() {
        return this._sort;
    }
    set sort(val) {
        if (this._sort === val)
            return;
        this._sort = val;
        this.setAttribute('sort', this._sort);
        this.querySelector('select').value = val;
    }
    connectedCallback() {
        this.innerHTML = this.template;
        top.addEventListener('params-ready', this._sortChange);
        this.querySelector('select').onchange = this._sortChange;
    }
    static get observedAttributes() {
        return ['sort'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
    _sortChange(e) {
        if (e.detail && e.detail.sort) {
            this.sort = e.detail.sort;
        }
        else {
            if (e.target['options'] && typeof e.target['selectedIndex'] !== 'undefined') {
                this.sort = e.target['options'][e.target['selectedIndex']].value;
                this.dispatchEvent(new CustomEvent('sort-change', {
                    detail: {
                        sort: this.sort
                    },
                    bubbles: true
                }));
            }
        }
    }
}
customElements.define('rhdp-search-sort-page', RHDPSearchSortPage);
