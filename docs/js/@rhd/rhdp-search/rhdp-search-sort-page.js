System.register(["../../@pfelements/pfelement.js"], function (exports_1, context_1) {
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
    var pfelement_js_1, RHDPSearchSortPage;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pfelement_js_1_1) {
                pfelement_js_1 = pfelement_js_1_1;
            }
        ],
        execute: function () {
            RHDPSearchSortPage = (function (_super) {
                __extends(RHDPSearchSortPage, _super);
                function RHDPSearchSortPage() {
                    var _this = _super.call(this, 'rhdp-search-sort-page') || this;
                    _this.template = function (el) {
                        var tpl = document.createElement("template");
                        tpl.innerHTML = "\n        <style>\n        :host {\n            grid-column: 5 / span 9;\n            display: block;\n            padding: 0 0 1em 0;\n            border-bottom: 1px solid var(--rhd-gray-4);\n        }\n            \n        select { \n            width: auto; \n            padding-right: 20px; \n            background: transparent;\n            font-size: 16px;\n            line-height: 1;\n            border: 0;\n            border-radius: 0;\n            padding:7px;\n            margin:0;\n            position: relative;\n            z-index: 2;\n            padding-right: 30px;\n            /* Hacks to style dropdown */\n            -webkit-appearance: none;\n            -moz-appearance: window;\n        }\n        \n        select:focus, select:active {\n            outline:0;\n            border:0;\n            outline: 1px solid white;\n            outline-offset: -2px;\n        }\n    \n        \n        .tight {\n            display: none;\n        }\n\n        .tight .button {\n            background: #ccc;\n            text-decoration: none;\n            border: 0;\n            font-weight: 600;\n            font-size: 16px;\n            padding: 9px 25px;\n            transition: background .2s ease-in 0s;\n            line-height: 1.2em;\n            cursor: pointer;\n            position: relative;\n            text-align: center;\n            color: #333; \n            width: 100%;\n            display: block;\n            width: 150px;\n            margin-right: 2em;\n        }\n    \n        @media only screen and (max-width: 768px) {\n            :host {\n                align-self: flex-end; \n                position: absolute; \n                top: -4.5em;\n                border-bottom: none;\n                margin-left: 180px;\n                top: -4.6em;\n            }\n            span { display: none; }\n            select { \n                width: 150px; \n                text-align: center;\n                text-align-last: center;\n                font-weight: 600;\n                height: auto;\n                border: 1px solid var(--rhd-blue);\n                line-height: 1.44;\n                background-color: transparent;\n                padding: 8px 0;\n                color: var(--rhd-blue);\n                font-size: 16px;\n                position: relative;\n                top: -4px;\n            }\n    \n            select:hover, select:focus {\n                background-color: var(--rhd-blue);\n                color: var(--rhd-white);\n            }\n        \n            .roomy {\n                display: none;\n            }\n            .tight { \n                display: block; \n            }\n            .clear {\n                padding: 0;\n                margin: 0; \n                border: 1px solid white;\n                width: auto;\n                font-weight: bold;\n            }\n        }\n        \n        @media only screen and (max-width: 365px) {\n            :host {\n                position: relative;\n                left: 0; top: 0;\n                margin-left: 0px;\n            }\n        }\n        </style>\n    <span>Sort results by</span>\n    <select>\n        <option value=\"relevance\">Relevance</option>\n        <option value=\"most-recent\">Most Recent</option>\n    </select>";
                        return tpl;
                    };
                    _this._sortChange = _this._sortChange.bind(_this);
                    return _this;
                }
                Object.defineProperty(RHDPSearchSortPage.prototype, "sort", {
                    get: function () {
                        return this._sort;
                    },
                    set: function (val) {
                        if (this._sort === val)
                            return;
                        this._sort = val;
                        this.setAttribute('sort', this._sort);
                        this.shadowRoot.querySelector('select').value = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchSortPage.prototype.connectedCallback = function () {
                    _super.prototype.render.call(this, this.template(this));
                    top.addEventListener('params-ready', this._sortChange);
                    this.shadowRoot.querySelector('select').onchange = this._sortChange;
                };
                Object.defineProperty(RHDPSearchSortPage, "observedAttributes", {
                    get: function () {
                        return ['sort'];
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchSortPage.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                RHDPSearchSortPage.prototype._sortChange = function (e) {
                    if (e.detail && e.detail.sort) {
                        this.sort = e.detail.sort;
                    }
                    else {
                        if (e.target['options'] && typeof e.target['selectedIndex'] !== 'undefined') {
                            this.sort = e.target['options'][e.target['selectedIndex']].value;
                            var evt = {
                                detail: {
                                    sort: this.sort
                                },
                                bubbles: true,
                                composed: true
                            };
                            this.dispatchEvent(new CustomEvent('sort-change', evt));
                        }
                    }
                };
                return RHDPSearchSortPage;
            }(pfelement_js_1.default));
            exports_1("default", RHDPSearchSortPage);
            customElements.define('rhdp-search-sort-page', RHDPSearchSortPage);
        }
    };
});
//# sourceMappingURL=rhdp-search-sort-page.js.map