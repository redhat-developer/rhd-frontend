import PFElement from '../../@patternfly/pfelement/pfelement.js';
export default class DPSearchQuery extends PFElement {
    constructor() {
        super(DPSearchQuery);
        this._filters = { term: '', facets: {} };
        this._activeFilters = new Map();
        this._limit = 10;
        this._from = 0;
        this._sort = 'relevance';
        this._valid = true;
        this.urlTemplate = (strings, url, term, from, limit, sort, types, tags, sys_types) => {
            var order = '';
            if (sort === 'most-recent') {
                order = '&newFirst=true';
            }
            return `${url}?start=${from}&q=${term}&hl=true&hl.fl=description&rows=${limit}&${types}&${tags}&${sys_types}`;
        };
        this._changeAttr = this._changeAttr.bind(this);
    }
    get html() { return ''; }
    static get tag() { return 'dp-search-query'; }
    get filters() {
        return this._filters;
    }
    set filters(val) {
        if (this._filters === val)
            return;
        this._filters = val;
    }
    get activeFilters() {
        return this._activeFilters;
    }
    set activeFilters(val) {
        if (this._activeFilters === val)
            return;
        this._activeFilters = val;
        this.filters.facets = this._activeFilters;
    }
    get from() {
        return this._from;
    }
    set from(val) {
        if (this._from === val)
            return;
        this._from = val;
        this.setAttribute('from', val.toString());
    }
    get limit() {
        return this._limit;
    }
    set limit(val) {
        if (this._limit === val)
            return;
        this._limit = val;
        this.setAttribute('limit', val.toString());
    }
    get sort() {
        return this._sort;
    }
    set sort(val) {
        if (this._sort === val)
            return;
        this._sort = val;
        this.setAttribute('sort', val);
    }
    get results() {
        return this._results;
    }
    set results(val) {
        if (this._results === val)
            return;
        this._results = val;
        this.from = this.results && this.results.response && typeof this.results.response.docs !== 'undefined' ? this.from + this.results.response.docs.length : 0;
        let evt = {
            detail: {
                term: this.term,
                filters: this.activeFilters,
                facets: this.results.facet_counts || {},
                sort: this.sort,
                limit: this.limit,
                from: this.from,
                results: this.results.response,
            },
            bubbles: true,
            composed: true
        };
        this.dispatchEvent(new CustomEvent('search-complete', evt));
    }
    get term() {
        return this._term;
    }
    set term(val) {
        if (this._term === val)
            return;
        this._term = val;
        this.filters.term = this._term;
        this.setAttribute('term', val.toString());
    }
    get url() {
        return this._url;
    }
    set url(val) {
        if (this._url === val)
            return;
        this._url = val;
        this.setAttribute('url', val.toString());
    }
    get valid() {
        return this._valid;
    }
    set valid(val) {
        if (this._valid === val)
            return;
        this._valid = val;
    }
    filterString(facets) {
        var len = facets.length, filterArr = [];
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < facets[i].items.length; j++) {
                if (facets[i].items[j].active) {
                    let idx = 0;
                    while (idx < facets[i].items[j].value.length) {
                        filterArr.push(facets[i].items[j].value[idx]);
                        idx = idx + 1;
                    }
                }
            }
        }
        return filterArr.join(', ');
    }
    connectedCallback() {
        super.connectedCallback();
        top.addEventListener('params-ready', this._changeAttr);
        top.addEventListener('term-change', this._changeAttr);
        top.addEventListener('filter-item-change', this._changeAttr);
        top.addEventListener('sort-change', this._changeAttr);
        top.addEventListener('clear-filters', this._changeAttr);
        top.addEventListener('load-more', this._changeAttr);
    }
    static get observedAttributes() {
        return ['term', 'sort', 'limit', 'results', 'url'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
    _setFilters(item) {
        let add = item.active;
        if (add) {
            if (this.activeFilters.has(item.group)) {
                this.activeFilters.get(item.group).add(item.key);
            }
            else {
                this.activeFilters.set(item.group, new Set([item.key]));
            }
        }
        else {
            if (this.activeFilters.has(item.group)) {
                this.activeFilters.get(item.group).delete(item.key);
                if (this.activeFilters.get(item.group).size === 0) {
                    this.activeFilters.delete(item.group);
                }
            }
        }
    }
    _changeAttr(e) {
        switch (e.type) {
            case 'term-change':
                if (e.detail && e.detail.term && e.detail.term.length > 0) {
                    this.term = e.detail.term;
                }
                else {
                    this.term = '';
                }
                this.from = 0;
                this.search();
                break;
            case 'filter-item-change':
                if (e.detail && e.detail.facet) {
                    this._setFilters(e.detail.facet);
                }
                this.from = 0;
                this.search();
                break;
            case 'sort-change':
                if (e.detail && e.detail.sort) {
                    this.sort = e.detail.sort;
                }
                this.from = 0;
                this.search();
                break;
            case 'load-more':
                this.search();
                break;
            case 'clear-filters':
                this.activeFilters.clear();
                this.search();
                break;
            case 'params-ready':
                if (e.detail && e.detail.term) {
                    this.term = e.detail.term;
                }
                if (e.detail && e.detail.sort) {
                    this.sort = e.detail.sort;
                }
                if (e.detail && e.detail.filters) {
                    this.activeFilters = e.detail.filters;
                }
                this.from = 0;
                if (this.activeFilters.size > 0 || e.detail.term !== null || e.detail.sort !== null || e.detail.qty !== null) {
                    this.search();
                }
                break;
        }
    }
    search() {
        let evt = { bubbles: true, composed: true };
        this.dispatchEvent(new CustomEvent('search-start', evt));
        if (this.url && ((this.activeFilters && this.activeFilters.size > 0) || (this.term !== null && this.term !== '' && typeof this.term !== 'undefined'))) {
            let qURL = new URL(this.url);
            qURL.searchParams.set('start', this.from.toString());
            qURL.searchParams.set('q', this.term || '');
            qURL.searchParams.set('hl', 'true');
            qURL.searchParams.set('hl.fl', 'description');
            qURL.searchParams.set('rows', this.limit.toString());
            this.activeFilters.forEach((filters, group) => {
                qURL.searchParams.set(group, Array.from(filters).join(','));
            });
            fetch(qURL.toString())
                .then((resp) => resp.json())
                .then((data) => {
                this.results = data;
            });
        }
        else {
            let evt = { detail: { invalid: true }, bubbles: true, composed: true };
            this.dispatchEvent(new CustomEvent('search-complete', evt));
        }
    }
}
PFElement.create(DPSearchQuery);
