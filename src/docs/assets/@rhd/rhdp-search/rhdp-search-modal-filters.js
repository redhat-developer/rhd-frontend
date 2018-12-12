System.register(["../../@rhelements/rhelement/rhelement.js", "./rhdp-search-filter-group.js", "./rhdp-search-filter-item.js"], function (exports_1, context_1) {
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
    var rhelement_js_1, rhdp_search_filter_group_js_1, rhdp_search_filter_item_js_1, RHDPSearchModalFilters;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rhelement_js_1_1) {
                rhelement_js_1 = rhelement_js_1_1;
            },
            function (rhdp_search_filter_group_js_1_1) {
                rhdp_search_filter_group_js_1 = rhdp_search_filter_group_js_1_1;
            },
            function (rhdp_search_filter_item_js_1_1) {
                rhdp_search_filter_item_js_1 = rhdp_search_filter_item_js_1_1;
            }
        ],
        execute: function () {
            RHDPSearchModalFilters = (function (_super) {
                __extends(RHDPSearchModalFilters, _super);
                function RHDPSearchModalFilters() {
                    var _this = _super.call(this, RHDPSearchModalFilters, { delayRender: true }) || this;
                    _this._type = '';
                    _this._title = 'Filter By';
                    _this._toggle = false;
                    _this._toggleModal = _this._toggleModal.bind(_this);
                    _this._clearFilters = _this._clearFilters.bind(_this);
                    return _this;
                }
                Object.defineProperty(RHDPSearchModalFilters.prototype, "html", {
                    get: function () {
                        return "\n        <style>\n            :host {\n                display: none;\n            }\n        </style>\n        <div class=\"cover\" id=\"cover\">\n            <div class=\"title\">" + this.title + " <a href=\"#\" class=\"cancel\" id=\"cancel\">Close</a></div>\n            <div class=\"groups\">\n            <slot></slot>\n            </div>\n            <div class=\"footer\">\n            <a href=\"#\" class=\"clearFilters\">Clear Filters</a> \n            <a href=\"#\" class=\"applyFilters\">Apply</a>\n            </div>\n        </div>";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchModalFilters, "tag", {
                    get: function () { return 'rhdp-search-modal-filters'; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchModalFilters.prototype, "type", {
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
                Object.defineProperty(RHDPSearchModalFilters.prototype, "title", {
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
                Object.defineProperty(RHDPSearchModalFilters.prototype, "filters", {
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
                Object.defineProperty(RHDPSearchModalFilters.prototype, "toggle", {
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
                RHDPSearchModalFilters.prototype.connectedCallback = function () {
                    var _this = this;
                    _super.prototype.connectedCallback.call(this);
                    this.addGroups();
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
                    _super.prototype.render.call(this);
                };
                Object.defineProperty(RHDPSearchModalFilters, "observedAttributes", {
                    get: function () {
                        return ['type', 'title', 'toggle'];
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchModalFilters.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                RHDPSearchModalFilters.prototype.addGroups = function () {
                    var groups = this.filters && this.filters.facets ? this.filters.facets : [], len = groups.length;
                    for (var i = 0; i < len; i++) {
                        var group = new rhdp_search_filter_group_js_1.default(), groupInfo = groups[i], gLen = groupInfo.items.length;
                        for (var j = 0; j < gLen; j++) {
                            var item = new rhdp_search_filter_item_js_1.default();
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
                RHDPSearchModalFilters.prototype._toggleModal = function (e) {
                    if (this.type === 'modal') {
                        this.toggle = !this.toggle;
                    }
                };
                RHDPSearchModalFilters.prototype.applyFilters = function () {
                    var evt = {
                        bubbles: true,
                        composed: true
                    };
                    this.dispatchEvent(new CustomEvent('apply-filters', evt));
                };
                RHDPSearchModalFilters.prototype._clearFilters = function (e) {
                    this.style.display = 'none';
                };
                return RHDPSearchModalFilters;
            }(rhelement_js_1.default));
            exports_1("default", RHDPSearchModalFilters);
            rhelement_js_1.default.create(RHDPSearchModalFilters);
        }
    };
});
