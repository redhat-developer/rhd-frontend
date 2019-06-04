import { library, icon, dom } from '../../@fortawesome/fontawesome-svg-core/index.es.js';
import { faTimes } from '../../@fortawesome/pro-solid-svg-icons/index.es.js';
import PFElement from '../../@patternfly/pfelement/pfelement.js';
library.add(faTimes);
const timesIcon = icon(faTimes).html;
export default class DPSearchFilterActiveItem extends PFElement {
    constructor() {
        super(DPSearchFilterActiveItem, { delayRender: true });
        this._active = false;
        this._inline = false;
        this._bubble = true;
        this._bounce = false;
        this._checkParams = this._checkParams.bind(this);
        this._clearFilters = this._clearFilters.bind(this);
        this._checkChange = this._checkChange.bind(this);
        this._updateFacet = this._updateFacet.bind(this);
    }
    get html() {
        return `${this.active ? `
        <style>
            :host {
                font-size: 16px;
                font-weight: 600;
                flex: 0 0 auto;
                list-style: none;
                order: 2;
                background-color: #8c8f91;
                border: 1px solid #8c8f91;
                color: #fff;
                cursor: default;
                display: inline-block;
                line-height: 1em;
                margin-bottom: .5em;
                margin-right: .5em;
                padding: .5em .7em;
            }
            
            ${dom.css()}

            svg.svg-inline--fa { 
                margin-left: .25em;
            }
        </style>
        <slot></slot>${timesIcon}` : ''}`;
    }
    static get tag() { return 'dp-search-filter-active-item'; }
    get name() {
        return this._name;
    }
    set name(val) {
        if (this._name === val)
            return;
        this._name = val;
        this.setAttribute('name', this._name);
        this.innerHTML = this._name;
    }
    get key() {
        return this._key;
    }
    set key(val) {
        if (this._key === val)
            return;
        this._key = val;
        this.className = `filter-item-${this._key}`;
        this.setAttribute('key', this._key);
    }
    get group() {
        return this._group;
    }
    set group(val) {
        if (this._group === val)
            return;
        this._group = val;
        this.setAttribute('group', this._group);
    }
    get inline() {
        return this._inline;
    }
    set inline(val) {
        if (this._inline === val)
            return;
        this._inline = val;
        super.render();
    }
    get bubble() {
        return this._bubble;
    }
    set bubble(val) {
        if (this._bubble === val)
            return;
        this._bubble = val;
    }
    get bounce() {
        return this._bounce;
    }
    set bounce(val) {
        if (this._bounce === val)
            return;
        this._bounce = val;
    }
    get active() {
        return this._active;
    }
    set active(val) {
        if (typeof val === 'string') {
            val = true;
        }
        if (val === null) {
            val = false;
        }
        if (this._active === val) {
            return;
        }
        else {
            this._active = val;
            if (this._active) {
                this.setAttribute('active', '');
            }
            else {
                this.removeAttribute('active');
            }
            super.render();
            if (!this.bounce) {
                let evt = { detail: { facet: this }, bubbles: true, composed: true };
                this.bounce = true;
                this.dispatchEvent(new CustomEvent('filter-item-change', evt));
            }
        }
    }
    get value() {
        return this._value;
    }
    set value(val) {
        if (this._value === val)
            return;
        this._value = val;
        this.setAttribute('value', this.value);
    }
    connectedCallback() {
        super.connectedCallback();
        this.shadowRoot.addEventListener('click', this._updateFacet);
        top.addEventListener('filter-item-change', this._checkChange);
        top.addEventListener('params-ready', this._checkParams);
        top.addEventListener('clear-filters', this._clearFilters);
        super.render();
    }
    static get observedAttributes() {
        return ['name', 'active', 'value', 'inline', 'key', 'group'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
    _updateFacet(e) {
        if (e.target['nodeName'] !== 'SLOT') {
            this.bounce = false;
            this.active = !this.active;
        }
    }
    _checkParams(e) {
        if (e.detail && e.detail.filters) {
            this.bounce = true;
            if (e.detail.filters.has(this.group) && e.detail.filters.get(this.group).has(this.key)) {
                this.active = true;
            }
        }
    }
    _checkChange(e) {
        if (e.detail && e.detail.facet) {
            if (this.group === e.detail.facet.group && this.key === e.detail.facet.key) {
                this.active = e.detail.facet.active;
            }
        }
    }
    _clearFilters(e) {
        this.bounce = true;
        this.active = false;
    }
}
PFElement.create(DPSearchFilterActiveItem);
