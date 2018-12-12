// import PFElement from '../../@pfelements/pfelement.js';
import RHElement from '../../@rhelements/rhelement/rhelement.js';
import RHDPSearchFilterGroup from './rhdp-search-filter-group.js';
import RHDPSearchFilterItem from './rhdp-search-filter-item.js';

export default class RHDPSearchModalFilters extends RHElement {
    get html() {
        return `
        <style>
            :host {
                display: none;
                align-self: flex-start;
                border: none;
                flex: none;
                float: left;
                margin: 0 0 1.3em;
            }
            .cover {
                background: rgba(0,0,0,.5);
                border: none;
                display: flex;
                flex-direction: column;
                height: 100%;
                padding-top: 0;
                position: absolute;
                right: 100%;
                top: 0;
                width: 100%;
                z-index: 99;
                transform: translateX(100%);
                transition: .5s ease-in-out;
            }
            .title {
                flex: 0 0 40px;
                order: 1;
                vertical-align: middle;
                background: #e6e7e8;
                color: #000;
                font-weight: 600;
                padding: .5em 1em;
                text-transform: uppercase;
            }
            .cancel {
                color: #06c;
                display: block;
                float: right;
                font-size: 14px;
                cursor: pointer;
                text-decoration: none;
            }
            .groups {
                background: #fff;
                flex: 1 1 100%;
                order: 1;
                overflow: auto;
                padding-bottom: 30px;
            }
            .footer {
                background-color: #000;
                display: block;
                flex: 1 0 auto;
                height: 70px;
                order: 2;
                padding: 1em;
                text-align: center;
            }
            .clearFilters {
                background-color: #fff;
                border: 1px solid #06c;
                color: #06c;
                display: inline-block;
                font-weight: 600;
                line-height: 1.44;
                margin-right: 1em;
                padding: 8px 20px;
            }
            .clearFilters:hover {
                background-color: #06c;
                color: #fff;
            }
            .applyFilters {
                background: #c00;
                color: #fff;
                font-weight: 600;
                padding: 10px 25px;
                text-transform: uppercase;
                transition: background .2s ease-in 0s;
                cursor: pointer;
                text-decoration: none;
            }
        </style>
        <div class="cover" id="cover">
            <div class="title">${this.title} <a href="#" class="cancel" id="cancel">Close</a></div>
            <div class="groups">
            <slot></slot>
            </div>
            <div class="footer">
            <a href="#" class="clearFilters">Clear Filters</a> 
            <a href="#" class="applyFilters">Apply</a>
            </div>
        </div>`;
    }

    static get tag() { return 'rhdp-search-modal-filters'; }

    _type = '';
    _title = 'Filter By';
    _filters;
    _toggle = false;
    _modal;

    get type() {
        return this._type;
    }

    set type(val) {
        if (this._type === val) return;
        this._type = val;
    }

    get title() {
        return this._title;
    }

    set title(val) {
        if (this._title === val) return;
        this._title = val;
    }

    get filters() {
        return this._filters;
    }

    set filters(val) {
        if (this._filters === val) return;
        this._filters = val;
    }

    get toggle() {
        return this._toggle;
    }

    set toggle(val) {
        if (this._toggle === val) return;
        this._toggle = val;
        if(this._toggle) {
            this.shadowRoot.querySelector('.cover').className = 'cover modal';
            window.scrollTo(0,0);
            document.body.style.overflow = 'hidden';
            this.style.height = window.innerHeight + 'px';
            this.style.display = 'block';
        } else {
            this.shadowRoot.querySelector('.cover').className = 'cover';
            document.body.style.overflow = 'auto';
            this.style.display = 'none';
        }
    }

    constructor() {
        super(RHDPSearchModalFilters, {delayRender: true});
        this._toggleModal = this._toggleModal.bind(this);
        this._clearFilters = this._clearFilters.bind(this);
        // this._addFilters = this._addFilters.bind(this);
    }
    
    connectedCallback() {
        super.connectedCallback();
        this.addGroups();

        this.shadowRoot.addEventListener('click', e => {
            let evt = { bubbles: true, composed: true };
            switch (e.target['className']) {
                case 'showBtn':
                case 'cancel':
                case 'applyFilters':
                    e.preventDefault();
                    this.dispatchEvent(new CustomEvent('toggle-modal', evt));
                    break;
                case 'clearFilters':
                    e.preventDefault();
                    this.dispatchEvent(new CustomEvent('clear-filters', evt));
                    break;
                case 'more':
                    e.preventDefault();
                    break;
            }
        });
        //top.addEventListener('clear-filters', this._clearFilters);
        top.addEventListener('toggle-modal', this._toggleModal);
        super.render();
    }

    static get observedAttributes() { 
        return ['type', 'title', 'toggle']; 
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }

    addGroups() {
        let groups = top.document.querySelector('rhdp-search-filters').children;
        for(let i=0; i < groups.length; i++) { 
            let n = groups[i].cloneNode(true);
            this.appendChild(n); 
        }
        // let groups = this.filters && this.filters.facets ? this.filters.facets : [],
        //     len = groups.length;
        // for(let i=0; i < len; i++) {
        //     let group = new RHDPSearchFilterGroup(),
        //         groupInfo = groups[i],
        //         gLen = groupInfo.items.length;
        //         for(let j=0; j < gLen; j++) {
        //             let item = new RHDPSearchFilterItem();
        //             item.name = groupInfo.items[j].name;
        //             item.value = groupInfo.items[j].value;
        //             item.active = groupInfo.items[j].active;
        //             item.key = groupInfo.items[j].key;
        //             item.group = groupInfo.key;
        //             group.items.push(item);
        //         }
        //     group.key = groupInfo.key;
        //     group.name = groupInfo.name;        
        //     this.shadowRoot.querySelector('.groups').appendChild(group);
        // }

    }

    // _addFilters() {
    //     var groups = this.filters && this.filters.facets ? this.filters.facets : [];
    //     for(let i=0; i < groups.length; i++) {
    //         var items = groups[i].items;
    //         for(let j=0; j < items.length; j++) {
    //             let item = new RHDPSearchFilterItem();
    //                 item.name = items[j].name;
    //                 item.value = items[j].value;
    //                 item.inline = true;
    //                 item.bubble = false;
    //                 item.key = items[j].key;
    //                 item.group = groups[i].key;
    //                 this.shadowRoot.querySelector('.activeFilters').appendChild(item)
    //             }
    //         }
    //     // if (this.type === 'active') {
    //     //     this._checkActive();
    //     // }
    // }

    _toggleModal(e) {
        this.toggle = !this.toggle;
    }

    applyFilters() {
        let evt = {
            bubbles: true,
            composed: true
        }
        this.dispatchEvent(new CustomEvent('apply-filters', evt));
    }

    _clearFilters(e) {
        this.style.display = 'none';
    }
}

RHElement.create(RHDPSearchModalFilters);
// customElements.define('rhdp-search-filters', RHDPSearchFilters);