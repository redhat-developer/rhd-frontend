// import PFElement from '../../@pfelements/pfelement.js';
import RHElement from '../../@rhelements/rhelement/rhelement.js';

export default class RHDPSearchFilterItem extends RHElement {
    get html() {
        return `
        <style>
        .list {
            clear: left;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            font-size: 14px;
            height: auto;
            line-height: 1.25em;
            padding: .5em .5em 0 1.1em;
        }
        span { display: none; }
        input[type=checkbox] {
            flex: 0 0 auto;
            margin: .25em 5px 0 0;
            order: 0;
        }
        label {
            margin-left: 0;
            color: #4d4d4d;
            cursor: pointer;
            display: block;
            font-size: .875rem;
            font-weight: 400;
            line-height: 1.5;
            margin-bottom: 0;
        }
        input[type=checkbox]+label,
        input[type=radio]+label {
            display: inline-block;
            margin-bottom: 0;
            margin-left: .5rem;
            margin-right: 1rem;
            vertical-align: baseline;
        }

        @media only screen and (max-width: 768px) {
            .list {
                line-height: 25px;
                padding-left: 0;
                font-size: 16px;
            }
            
            span { display: inline; font-size: 16px; }
            
            input[type=checkbox]{
                height: 0;
                width: 0;
                visibility: hidden;
                order: 2;
            }

            label {
                cursor: pointer;
                text-indent: -1200px;
                width: 50px;
                height: 25px;
                background: grey;
                display: block;
                border-radius: 25px;
                position: absolute;
                right: 0;
            }
    
            label:after {
                content: '';
                position: absolute;
                top: 1px;
                left: 1px;
                width: 23px;
                height: 23px;
                background: #fff;
                border-radius: 20px;
                transition: 0.3s;
            }
    
            input:checked + label {
                background: #08c0fc;;
            }
    
            input:checked + label:after  {
                left: calc(100% - 1px);
                transform: translateX(-100%);
            }
    
            label:active:after {
                width: 33px;
            }
        }
        </style>
        <div class="list">
            <span>${this.name}</span>
            <input type="checkbox" ${this.active ? 'checked' : ''} id="filter-item-${this.key}" value="${this.key}">
            <label for="filter-item-${this.key}"><slot></slot></label>
        </div>`;
    }

    static get tag() { return 'rhdp-search-filter-item'; }

    _key;
    _name;
    _active = false;
    _value;
    _inline = false;
    _bounce = false;
    _group;

    get name() {
        return this._name;
    }
    set name(val) {
        if (this._name === val) return;
        this._name = val;
        this.setAttribute('name', this._name);
    }
    get key() {
        return this._key;
    }
    set key(val) {
        if (this._key === val) return;
        this._key = val;
        this.className = `filter-item-${this._key}`;
        this.setAttribute('key', this._key);
    }
    get group() {
        return this._group;
    }

    set group(val) {
        if (this._group === val) return;
        this._group = val;
        this.setAttribute('group', this._group);
    }

    get bounce() {
        return this._bounce;
    }
    set bounce(val) {
        if (this._bounce === val) return;
        this._bounce = val;
    }


    get active() {
        return this._active;
    }
    set active(val) {
        if(typeof val === 'string') {
            val = true;
        } 
        if ( val === null ) {
            val = false;
        }
        if (this._active === val) {
            return;
        } else {
            this._active = val;
            let chkbox = this.shadowRoot.querySelector('input');
            if(this._active) { 
                this.setAttribute('active','');
            } else { 
                this.removeAttribute('active'); 
            }
            if (chkbox) {
                chkbox.checked = this._active;
            }
            if(!this.bounce){
                let evt = {detail: {facet: this}, bubbles: true, composed: true };
                this.bounce = true;
                this.dispatchEvent(new CustomEvent('filter-item-change', evt));
            }
        }
    }
    get value() {
        return this._value;
    }
    set value(val) {
        if (this._value === val) return;
        this._value = val;
        this.setAttribute('value', this.value);
    }

    constructor() {
        super(RHDPSearchFilterItem, {delayRender: true});

        this._checkParams = this._checkParams.bind(this);
        this._clearFilters = this._clearFilters.bind(this);
        this._checkChange = this._checkChange.bind(this);
        this._updateFacet = this._updateFacet.bind(this);
    }

    

    connectedCallback() {
        super.connectedCallback();
        this.shadowRoot.addEventListener('change', this._updateFacet);
        
        top.addEventListener('filter-item-change', this._checkChange);
        top.addEventListener('params-ready', this._checkParams);
        top.addEventListener('clear-filters', this._clearFilters);
        //top.window.addEventListener('popstate', this._clearFilters);
        super.render();
    }

    static get observedAttributes() { 
        return ['name', 'active', 'value', 'inline', 'key', 'group']; 
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }

    _updateFacet(e) {
        this.bounce = false;
        this.active = !this.active;
    }

    _checkParams(e) {
        // let chk = false;
        if (e.detail && e.detail.filters) {
            this.bounce = true;
            Object.keys(e.detail.filters).forEach(group => {
                e.detail.filters[group].forEach(facet => {
                    if (group === this.group && facet === this.key) {
                        this.active = true;
                            // chk = true;
                            //this.bubble = false;
                            // this.active = true;
                            // let evt = {detail: {facet: this}, bubbles: this.bubble, composed: true };
                            // this.dispatchEvent(new CustomEvent('filter-item-init', evt));  
                    }
                });
            });
        }

        // if (!chk) {
        //     this.bubble = false;
        //     this.active = false;
        // }
    }

    _checkChange(e) {
        if (e.detail && e.detail.facet) {
            if(this.group === e.detail.facet.group && this.key === e.detail.facet.key) {
                //this.bubble = false;
                this.active = e.detail.facet.active;
            }
        }
    }
    
    _clearFilters(e) {
        this.bounce = true;
        this.active = false;
    }
}

RHElement.create(RHDPSearchFilterItem);
// customElements.define('rhdp-search-filter-item', RHDPSearchFilterItem);