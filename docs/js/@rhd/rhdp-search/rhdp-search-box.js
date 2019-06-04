export default class RHDPSearchBox extends HTMLElement {
    constructor() {
        super();
        this._term = '';
        this.name = 'Search Box';
        this.template = (strings, name, term) => {
            return `<form class="search-bar" role="search">
        <div class="input-cont">
            <input value="${term}" class="user-success user-search" type="search" id="query" placeholder="Enter your search term">
        </div>
        <button id="search-btn"><span>SEARCH</span><i class='fa fa-search' aria-hidden='true'></i></button>
        </form>`;
        };
        this._checkTerm = this._checkTerm.bind(this);
    }
    get term() {
        return this._term;
    }
    set term(val) {
        if (this._term === val)
            return;
        this._term = decodeURI(val);
        this.querySelector('input').setAttribute('value', this.term);
    }
    connectedCallback() {
        top.addEventListener('params-ready', this._checkTerm);
        top.addEventListener('term-change', this._checkTerm);
        this.innerHTML = this.template `${this.name}${this.term}`;
        this.addEventListener('submit', e => {
            e.preventDefault();
            this._termChange();
            return false;
        });
        this.querySelector('#search-btn').addEventListener('click', e => {
        });
    }
    static get observedAttributes() {
        return ['term'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
    _checkTerm(e) {
        if (e.detail && e.detail.term) {
            this.term = e.detail.term;
        }
    }
    _termChange() {
        this.term = this.querySelector('input').value;
        this.dispatchEvent(new CustomEvent('term-change', {
            detail: {
                term: this.term
            },
            bubbles: true
        }));
    }
}
customElements.define('rhdp-search-box', RHDPSearchBox);
