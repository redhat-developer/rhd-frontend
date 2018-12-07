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
    var pfelement_js_1, RHDPSearchBox;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pfelement_js_1_1) {
                pfelement_js_1 = pfelement_js_1_1;
            }
        ],
        execute: function () {
            RHDPSearchBox = (function (_super) {
                __extends(RHDPSearchBox, _super);
                function RHDPSearchBox() {
                    var _this = _super.call(this, 'rhdp-search-box') || this;
                    _this.template = function (el) {
                        var tpl = document.createElement("template");
                        tpl.innerHTML = "\n        <style>\n            :host {\n                grid-column: 2 / span 12;\n            }\n\n            form.search-bar { \n                box-sizing: border-box;\n                color: rgb(66,66,66);\n                cursor: auto;\n                display: flex;\n                flex-direction: row;\n                font-size: 16px;\n                line-height: 24px;\n                position: relative; \n                margin: 0;\n                width: 100%;\n            }\n        \n            form.search-bar div {\n                flex: 1 1 100%;\n            }\n            \n            input.user-search {\n                background-color: white;\n                border-bottom-color: rgb(204,204,204);\n                border-bottom-style: solid;\n                border-left-color: rgb(204,204,204);\n                border-left-style: solid;\n                border-right-color: rgb(204,204,204);\n                border-right-style: solid;\n                box-sizing: border-box;\n                font-size: 16px;\n                font-weight: 600;\n                height: 40px;\n                text-align: start;\n                padding: 8px;\n                transition-property: box-shadow, border-color;\n                transition-delay: 0s, 0s;\n                transition-duration: 0.45s, 0.45s;\n                transition-timing-function: ease, ease-in-out;\n                user-select: text;\n                width: 100%;\n            }\n        \n            input.user-search::-webkit-search-cancel-button{\n                position:relative;\n                -webkit-appearance: none;\n                height: 20px;\n                width: 20px;\n                background-image: url('https://static.jboss.org/rhd/images/icons/fa_times_icon.svg');\n                opacity: 1;\n            \u2002\u2002\u2002\u2002pointer-events: auto;\n            }\n        \n            button {\n                text-transform: uppercase;\n                background: #c00;\n                text-decoration: none;\n                border: 0;\n                height: 40px;\n                font-weight: 600;\n                font-size: 16px;\n                padding: 9px 30px;\n                transition: background .2s ease-in 0s;\n                line-height: 1.2em;\n                cursor: pointer;\n                position: relative;\n                text-align: center;\n                color: #fff;\n            }\n        \n            button i.fa.fa-search { display:none; }\n        \n            @media only screen and (max-width: 768px) {\n                :host {\n                    margin-bottom: .5em;\n                }\n                button { display: block; padding: 9px 20px; }\n                button i.fa.fa-search { display: inline-block; font-size: 18px; }\n                button span { display: none; }\n            }\n        </style>\n<form class=\"search-bar\" role=\"search\">\n    <div class=\"input-cont\">\n        <input value=\"" + el.term + "\" class=\"user-success user-search\" type=\"search\" id=\"query\" placeholder=\"Enter your search term\">\n    </div>\n    <button id=\"search-btn\"><span>SEARCH</span><i class='fa fa-search' aria-hidden='true'></i></button>\n</form>";
                        return tpl;
                    };
                    _this._term = '';
                    _this.name = 'Search Box';
                    _this._checkTerm = _this._checkTerm.bind(_this);
                    return _this;
                }
                Object.defineProperty(RHDPSearchBox.prototype, "term", {
                    get: function () {
                        return this._term;
                    },
                    set: function (val) {
                        if (this._term === val)
                            return;
                        this._term = decodeURI(val);
                        this.shadowRoot.querySelector('input').setAttribute('value', this.term);
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchBox.prototype.connectedCallback = function () {
                    var _this = this;
                    _super.prototype.render.call(this, this.template(this));
                    this.setAttribute('data-rhd-col', 'span12');
                    top.addEventListener('params-ready', this._checkTerm);
                    top.addEventListener('term-change', this._checkTerm);
                    this.shadowRoot.addEventListener('submit', function (e) {
                        e.preventDefault();
                        _this._termChange();
                        return false;
                    });
                    this.shadowRoot.querySelector('#search-btn').addEventListener('click', function (e) {
                    });
                };
                Object.defineProperty(RHDPSearchBox, "observedAttributes", {
                    get: function () {
                        return ['term'];
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchBox.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                RHDPSearchBox.prototype._checkTerm = function (e) {
                    if (e.detail && e.detail.term) {
                        this.term = e.detail.term;
                    }
                };
                RHDPSearchBox.prototype._termChange = function () {
                    this.term = this.shadowRoot.querySelector('input').value;
                    var evt = {
                        detail: {
                            term: this.term
                        },
                        bubbles: true,
                        composed: true
                    };
                    this.dispatchEvent(new CustomEvent('term-change', evt));
                };
                return RHDPSearchBox;
            }(pfelement_js_1.default));
            exports_1("default", RHDPSearchBox);
            window.customElements.define('rhdp-search-box', RHDPSearchBox);
        }
    };
});
//# sourceMappingURL=rhdp-search-box.js.map