System.register(["../../@pfelements/pfelement.js", "@rhd/rhdp-search/rhdp-search-filter-group", "@rhd/rhdp-search/rhdp-search-filter-item"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var pfelement_js_1, rhdp_search_filter_group_1, rhdp_search_filter_item_1, RHDPSearchFilters;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pfelement_js_1_1) {
                pfelement_js_1 = pfelement_js_1_1;
            },
            function (rhdp_search_filter_group_1_1) {
                rhdp_search_filter_group_1 = rhdp_search_filter_group_1_1;
            },
            function (rhdp_search_filter_item_1_1) {
                rhdp_search_filter_item_1 = rhdp_search_filter_item_1_1;
            }
        ],
        execute: function () {
            RHDPSearchFilters = (function (_super) {
                __extends(RHDPSearchFilters, _super);
                function RHDPSearchFilters() {
                    var _this = _super.call(this, 'rhdp-search-filter') || this;
                    _this.template = function (el) {
                        var tpl = document.createElement("template");
                        tpl.innerHTML = "\n        <style>\n            :host {\n                grid-column: span 3;\n                grid-row: span 5;\n            }\n            .title {\n                background: #e6e7e8; \n                color: #000;\n                text-transform: uppercase;\n                padding: .5em 1em;\n                font-weight: 600;\n            }\n            .cancel { display: none; }\n            .showBtn { \n                display: none;\n                background: #ccc;\n                text-decoration: none;\n                border: 0;\n                height: 40px;\n                font-weight: 600;\n                font-size: 16px;\n                padding: 9px 40px;\n                transition: background .2s ease-in 0s;\n                line-height: 1.2em;\n                cursor: pointer;\n                position: relative;\n                text-align: center;\n                color: #333; \n                width: 100%;\n                }\n            .groups {\n                background-color: #f9f9f9;\n                padding-bottom: 30px;\n            }\n            .active-type {\n                display: flex;\n                flex-direction: row;\n                margin-bottom: 1em;\n                .inline {\n                    font-size: 16px;\n                    font-weight: 600;\n                }\n\n                .clearFilters {\n                    font-size: 16px;\n                }\n\n            }\n            .active-type strong {\n                flex: 0 1 auto; \n                order: 1; \n                font-weight: 600;\n                font-size: 1.2em;\n                margin: 0.3em .7em 0 0;\n                white-space: nowrap;\n            }\n            .active-type div { flex: 1 1 auto; order: 2; list-style: none; }\n            .active-type a {\n                flex: 0 1 auto;\n                order: 3;\n                text-decoration: none;\n                color: #0066CC;\n                margin-top: .3em;\n                font-weight: 100;\n                font-size: 14px;\n                white-space: nowrap;\n                &:hover, &:active, &:focus { color: #004080; }\n            }\n\n            #footer { display: none; }\n\n            @media only screen and (max-width: 768px) {\n                :host {\n                    flex: none; \n                    align-self: \n                    flex-start; \n                    float: left;\n                    border: none;\n                    margin: 0 0 1.3em 0; \n                }\n\n                .control {\n                    display: flex;\n                    flex-direction: column;\n                    width: 100%;\n                    height: 100%;\n                    padding-top: 51px;\n                    background: rgba(0,0,0,.5);\n                    border: none;\n                    z-index: 99;\n                    right: 100%;\n                    position: absolute;\n                    top: 100px;\n                }\n                .title { flex: 0 0 40px; order: 1; vertical-align: middle; }\n                .showBtn {\n                    display: block;\n                    width: 150px;\n                    height: auto;\n                    border: 1px solid var(--rhd-blue);\n                    line-height: 1.44;\n                    background-color: transparent;\n                    padding: 8px 0;\n                    color: var(--rhd-blue);\n                }\n\n                .showBtn:hover, .showBtn:focus {\n                        background-color: var(--rhd-blue);\n                        color: var(--rhd-white);\n                }\n            }\n\n        </style>\n<a class=\"showBtn\">Show Filters</a>\n<div class=\"control\" id=\"control\">\n    <div class=\"title\">" + el.title + "</div>\n    <div class=\"groups\">\n    <slot></slot>\n    </div>\n</div>";
                        return tpl;
                    };
                    _this.modalTemplate = function (el) {
                        var tpl = document.createElement("template");
                        tpl.innerHTML = "\n        <style>\n            :host {\n                display: none;\n            }\n        </style>\n<div class=\"cover\" id=\"cover\">\n    <div class=\"title\">" + el.title + " <a href=\"#\" class=\"cancel\" id=\"cancel\">Close</a></div>\n    <div class=\"groups\">\n    <slot></slot>\n    </div>\n    <div class=\"footer\">\n    <a href=\"#\" class=\"clearFilters\">Clear Filters</a> \n    <a href=\"#\" class=\"applyFilters\">Apply</a>\n    </div>\n</div>";
                        return tpl;
                    };
                    _this.activeTemplate = function (el) {
                        var tpl = document.createElement("template");
                        tpl.innerHTML = "\n        <style>\n            :host {\n                grid-column: 5 / span 9;\n            }\n        </style>\n<div class=\"active-type\">\n    <strong>" + el.title + "</strong>\n    <div class=\"activeFilters\"></div>\n    <a href=\"#\" class=\"clearFilters\">Clear Filters</a>\n</div>";
                        return tpl;
                    };
                    _this._type = '';
                    _this._title = 'Filter By';
                    _this._toggle = false;
                    _this._toggleModal = _this._toggleModal.bind(_this);
                    _this._clearFilters = _this._clearFilters.bind(_this);
                    _this._addFilters = _this._addFilters.bind(_this);
                    _this._checkActive = _this._checkActive.bind(_this);
                    return _this;
                }
                Object.defineProperty(RHDPSearchFilters.prototype, "type", {
                    get: function () {
                        return this._type;
                    },
                    set: function (val) {
                        if (this._type === val)
                            return;
                        this._type = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilters.prototype, "title", {
                    get: function () {
                        return this._title;
                    },
                    set: function (val) {
                        if (this._title === val)
                            return;
                        this._title = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilters.prototype, "filters", {
                    get: function () {
                        return this._filters;
                    },
                    set: function (val) {
                        if (this._filters === val)
                            return;
                        this._filters = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilters.prototype, "toggle", {
                    get: function () {
                        return this._toggle;
                    },
                    set: function (val) {
                        if (this._toggle === val)
                            return;
                        this._toggle = val;
                        if (this._toggle) {
                            this.shadowRoot.querySelector('.cover').className = 'cover modal';
                            window.scrollTo(0, 0);
                            document.body.style.overflow = 'hidden';
                            this.style.height = window.innerHeight + 'px';
                        }
                        else {
                            this.shadowRoot.querySelector('.cover').className = 'cover';
                            document.body.style.overflow = 'auto';
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchFilters.prototype.connectedCallback = function () {
                    var _this = this;
                    if (this.type === 'active') {
                        _super.prototype.render.call(this, this.activeTemplate(this));
                        this.setAttribute('data-rhd-col', '5span9');
                        top.addEventListener('filter-item-change', this._checkActive);
                        top.addEventListener('filter-item-init', this._checkActive);
                        top.addEventListener('search-complete', this._checkActive);
                        top.addEventListener('params-ready', this._checkActive);
                        top.addEventListener('clear-filters', this._clearFilters);
                        this._addFilters();
                    }
                    else if (this.type === 'modal') {
                        _super.prototype.render.call(this, this.modalTemplate(this));
                        this.addGroups();
                    }
                    else {
                        _super.prototype.render.call(this, this.template(this));
                        this.setAttribute('data-rhd-col', 'span3');
                        this.setAttribute('data-rhd-row', 'span5');
                        this.addGroups();
                    }
                    this.shadowRoot.addEventListener('click', function (e) {
                        var evt = { bubbles: true, composed: true };
                        switch (e.target['className']) {
                            case 'showBtn':
                            case 'cancel':
                            case 'applyFilters':
                                e.preventDefault();
                                _this.dispatchEvent(new CustomEvent('toggle-modal', evt));
                                break;
                            case 'clearFilters':
                                e.preventDefault();
                                _this.dispatchEvent(new CustomEvent('clear-filters', evt));
                                break;
                            case 'more':
                                e.preventDefault();
                                break;
                        }
                    });
                    top.addEventListener('toggle-modal', this._toggleModal);
                };
                Object.defineProperty(RHDPSearchFilters, "observedAttributes", {
                    get: function () {
                        return ['type', 'title', 'toggle'];
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchFilters.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                RHDPSearchFilters.prototype.addGroups = function () {
                    var groups = this.filters.facets, len = groups.length;
                    for (var i = 0; i < len; i++) {
                        var group = new rhdp_search_filter_group_1.default(), groupInfo = groups[i], gLen = groupInfo.items.length;
                        for (var j = 0; j < gLen; j++) {
                            var item = new rhdp_search_filter_item_1.default();
                            item.name = groupInfo.items[j].name;
                            item.value = groupInfo.items[j].value;
                            item.active = groupInfo.items[j].active;
                            item.key = groupInfo.items[j].key;
                            item.group = groupInfo.key;
                            group.items.push(item);
                        }
                        group.key = groupInfo.key;
                        group.name = groupInfo.name;
                        this.shadowRoot.querySelector('.groups').appendChild(group);
                    }
                };
                RHDPSearchFilters.prototype._checkActive = function (e) {
                    if (e.detail) {
                        if (e.detail.facet) {
                            this.style.display = e.detail.facet.active ? 'block' : this.style.display;
                        }
                        else {
                            var chk = this.shadowRoot.querySelectorAll('rhdp-search-filter-item[active]');
                            if (chk.length > 0) {
                                this.style.display = 'block';
                            }
                            else {
                                this.style.display = 'none';
                            }
                        }
                    }
                };
                RHDPSearchFilters.prototype._initActive = function (e, group_key, item) {
                    if (e.detail && e.detail.filters) {
                        Object.keys(e.detail.filters).forEach(function (group) {
                            e.detail.filters[group].forEach(function (facet) {
                                if (group === group_key) {
                                    if (facet === item.key) {
                                        return true;
                                    }
                                }
                            });
                        });
                    }
                    return false;
                };
                RHDPSearchFilters.prototype._addFilters = function () {
                    var groups = this.filters.facets;
                    for (var i = 0; i < groups.length; i++) {
                        var items = groups[i].items;
                        for (var j = 0; j < items.length; j++) {
                            var item = new rhdp_search_filter_item_1.default();
                            item.name = items[j].name;
                            item.value = items[j].value;
                            item.inline = true;
                            item.bubble = false;
                            item.key = items[j].key;
                            item.group = groups[i].key;
                            this.shadowRoot.querySelector('.activeFilters').appendChild(item);
                        }
                    }
                };
                RHDPSearchFilters.prototype._toggleModal = function (e) {
                    if (this.type === 'modal') {
                        this.toggle = !this.toggle;
                    }
                };
                RHDPSearchFilters.prototype.applyFilters = function () {
                    var evt = {
                        bubbles: true,
                        composed: true
                    };
                    this.dispatchEvent(new CustomEvent('apply-filters', evt));
                };
                RHDPSearchFilters.prototype._clearFilters = function (e) {
                    this.style.display = 'none';
                };
                return RHDPSearchFilters;
            }(pfelement_js_1.default));
            exports_1("default", RHDPSearchFilters);
            customElements.define('rhdp-search-filters', RHDPSearchFilters);
        }
    };
});
//# sourceMappingURL=rhdp-search-filters.js.map