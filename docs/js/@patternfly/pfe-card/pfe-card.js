System.register(["../pfelement/pfelement.js"], function (exports_1, context_1) {
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
    var pfelement_js_1, PfeCard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pfelement_js_1_1) {
                pfelement_js_1 = pfelement_js_1_1;
            }
        ],
        execute: function () {
            if (!Element.prototype.matches) {
                Element.prototype.matches =
                    Element.prototype.msMatchesSelector ||
                        Element.prototype.webkitMatchesSelector;
            }
            if (!Element.prototype.closest) {
                Element.prototype.closest = function (s) {
                    var el = this;
                    do {
                        if (el.matches(s))
                            return el;
                        el = el.parentElement || el.parentNode;
                    } while (el !== null && el.nodeType === 1);
                    return null;
                };
            }
            if (!Array.prototype.includes) {
                Object.defineProperty(Array.prototype, "includes", {
                    value: function (valueToFind, fromIndex) {
                        if (this == null) {
                            throw new TypeError('"this" is null or not defined');
                        }
                        var o = Object(this);
                        var len = o.length >>> 0;
                        if (len === 0) {
                            return false;
                        }
                        var n = fromIndex | 0;
                        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
                        function sameValueZero(x, y) {
                            return (x === y ||
                                (typeof x === "number" &&
                                    typeof y === "number" &&
                                    isNaN(x) &&
                                    isNaN(y)));
                        }
                        while (k < len) {
                            if (sameValueZero(o[k], valueToFind)) {
                                return true;
                            }
                            k++;
                        }
                        return false;
                    }
                });
            }
            PfeCard = (function (_super) {
                __extends(PfeCard, _super);
                function PfeCard() {
                    return _super.call(this, PfeCard, { type: PfeCard.PfeType }) || this;
                }
                Object.defineProperty(PfeCard.prototype, "html", {
                    get: function () {
                        return "<style>:host{--pfe-card--padding:calc(var(--pfe-theme--container-spacer, 1rem) * 2);--pfe-card_header--size:var(--pfe-theme--font-size--heading--gamma, 21px);--pfe-card--bg:var(--pfe-theme--color--surface--base, #dfdfdf);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--base--text, #333);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--base--link, #00538c);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--base--link--visited, #7551a6);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--base--link--hover, #00305b);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--base--link--focus, #00305b);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;justify-items:flex-start;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;padding:var(--pfe-card--padding);border:1px solid transparent;border:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) transparent;border-radius:0;border-radius:var(--pfe-theme--surface--border-radius,0);background:var(--pfe-card--bg);color:var(--pfe-broadcasted--color--text)}a{color:var(--pfe-broadcasted--color--ui-link)}a:visited{color:var(--pfe-broadcasted--color--ui-link--visited)}a:hover{color:var(--pfe-broadcasted--color--ui-link--hover)}a:focus{color:var(--pfe-broadcasted--color--ui-link--focus)}:host([color=dark]){--pfe-card--bg:var(--pfe-theme--color--surface--darker, #464646);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--darker--text, #fff);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--darker--link, #99ccff);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--darker--link--visited, #b38cd9);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--darker--link--hover, #cce6ff);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--darker--link--focus, #cce6ff)}:host([color=darkest]){--pfe-card--bg:var(--pfe-theme--color--surface--darkest, #131313);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--darkest--text, #fff);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--darkest--link, #99ccff);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--darkest--link--visited, #b38cd9);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--darkest--link--hover, #cce6ff);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--darkest--link--focus, #cce6ff)}:host([color=light]){--pfe-card--bg:var(--pfe-theme--color--surface--lighter, #ececec);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--lighter--text, #333);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--lighter--link, #06c);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--lighter--link--visited, rebeccapurple);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--lighter--link--hover, #003366);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--lighter--link--focus, #003366)}:host([color=lightest]){--pfe-card--bg:var(--pfe-theme--color--surface--lightest, #fff);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--lightest--text, #333);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--lightest--link, #06c);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--lightest--link--visited, rebeccapurple);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--lightest--link--hover, #003366);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--lightest--link--focus, #003366)}:host([color=complement]){--pfe-card--bg:var(--pfe-theme--color--surface--complement, #0477a4);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--complement--text, #fff);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--complement--link, #99ccff);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--complement--link--visited, #b38cd9);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--complement--link--hover, #cce6ff);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--complement--link--focus, #cce6ff)}:host([color=accent]){--pfe-card--bg:var(--pfe-theme--color--surface--accent, #fe460d);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--accent--text, #fff);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--accent--link, #99ccff);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--accent--link--visited, #b38cd9);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--accent--link--hover, #cce6ff);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--accent--link--focus, #cce6ff)}:host([size=small]){--pfe-card--padding:var(--pfe-theme--container-spacer, 1rem)}.pfe-card__body,.pfe-card__footer,.pfe-card__header{display:block;margin:0}.pfe-card__header::slotted(h1:first-child),.pfe-card__header::slotted(h2:first-child),.pfe-card__header::slotted(h3:first-child),.pfe-card__header::slotted(h4:first-child),.pfe-card__header::slotted(h5:first-child),.pfe-card__header::slotted(h6:first-child){margin-top:0!important;font-size:var(--pfe-card_header--size)}.pfe-card__body::slotted(:nth-child(2)){margin-top:0!important}.pfe-card__footer{margin-top:auto;justify-self:flex-end}</style><slot class=\"pfe-card__header\" name=\"header\"></slot>\n<slot class=\"pfe-card__body\"></slot>\n<slot class=\"pfe-card__footer\" name=\"footer\"></slot>";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeCard, "tag", {
                    get: function () {
                        return "pfe-card";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeCard.prototype, "styleUrl", {
                    get: function () {
                        return "pfe-card.scss";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeCard.prototype, "templateUrl", {
                    get: function () {
                        return "pfe-card.html";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeCard.prototype, "backgroundColor", {
                    get: function () {
                        return this.getAttribute("color") || "base";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeCard, "observedAttributes", {
                    get: function () {
                        return ["color"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeCard, "PfeType", {
                    get: function () {
                        return pfelement_js_1.default.PfeTypes.Container;
                    },
                    enumerable: true,
                    configurable: true
                });
                PfeCard.prototype.connectedCallback = function () {
                    _super.prototype.connectedCallback.call(this);
                    if (this.backgroundColor) {
                        this._updateContext(this.backgroundColor);
                    }
                };
                PfeCard.prototype.attributeChangedCallback = function (attr, oldValue, newValue) {
                    _super.prototype.attributeChangedCallback.call(this, attr, oldValue, newValue);
                    if (attr === "color") {
                        this._colorChanged(attr, oldValue, newValue);
                    }
                };
                PfeCard.prototype._colorChanged = function (attr, oldValue, newValue) {
                    this._updateContext(newValue);
                };
                PfeCard.prototype._updateContext = function (context) {
                    var _this = this;
                    if (["darkest", "dark", "complement", "accent"].includes(context)) {
                        ["pfe-cta"].forEach(function (elementName) {
                            var els = _this.querySelectorAll("" + elementName).slice();
                            els.forEach(function (el) {
                                var myContainer = el.closest("[pfe-type=container]");
                                if (myContainer === _this || myContainer === null) {
                                    el.setAttribute("on", "dark");
                                }
                            });
                        });
                    }
                };
                return PfeCard;
            }(pfelement_js_1.default));
            pfelement_js_1.default.create(PfeCard);
            exports_1("default", PfeCard);
        }
    };
});
