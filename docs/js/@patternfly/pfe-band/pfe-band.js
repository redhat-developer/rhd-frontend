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
    var pfelement_js_1, PfeBand;
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
            PfeBand = (function (_super) {
                __extends(PfeBand, _super);
                function PfeBand() {
                    return _super.call(this, PfeBand, { type: PfeBand.PfeType }) || this;
                }
                Object.defineProperty(PfeBand.prototype, "html", {
                    get: function () {
                        var _this = this;
                        return "<style>.pfe-band__aside,.pfe-band__body,.pfe-band__container,.pfe-band__footer,.pfe-band__header,:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.pfe-band__aside,.pfe-band__body,.pfe-band__container,.pfe-band__footer,.pfe-band__header{display:grid;grid-row-gap:var(--pfe-band--gutter--vertical);grid-column-gap:var(--pfe-band--gutter--horizontal);margin-bottom:0}:host{display:block;--pfe-band--Padding--vertical:calc( var(--pfe-theme--container-spacer, 1rem) * 4);--pfe-band--Padding--horizontal:calc( var(--pfe-theme--container-spacer, 1rem) * 1);--pfe-band--Padding:var(--pfe-band--Padding--vertical) var(--pfe-band--Padding--horizontal);--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--base, #dfdfdf);--pfe-band--BackgroundPosition:center center;--pfe-band--Border:var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) transparent;--pfe-band--layout:1fr;--pfe-band__header--layout:1fr;--pfe-band__body--layout:1fr;--pfe-band__footer--layout:1fr;--pfe-band__aside--layout:1fr;--pfe-band--gutter--vertical:var(--pfe-theme--container-spacer, 1rem);--pfe-band--gutter--horizontal:calc(var(--pfe-theme--container-spacer, 1rem) * 3);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--base--text, #333);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--base--link, #00538c);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--base--link--visited, #7551a6);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--base--link--hover, #00305b);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--base--link--focus, #00305b);--pfe-band--Width:auto;--pfe-band--Width__aside--sm:240px;--pfe-band--Width__aside--lg:300px;position:relative;padding:calc(var(--pfe-band--Padding--vertical)/ 2) var(--pfe-band--Padding--horizontal);border:var(--pfe-band--Border);background-color:var(--pfe-band--BackgroundColor);background-position:var(--pfe-band--BackgroundPosition);color:var(--pfe-broadcasted--color--text)}@media screen and (min-width:768px){:host{--pfe-band--Width:calc( 768px - calc(var(--pfe-band--Padding--horizontal) * 4) )}}@media screen and (min-width:992px){:host{--pfe-band--Width:calc( 992px - calc(var(--pfe-band--Padding--horizontal) * 4) )}}@media screen and (min-width:1200px){:host{--pfe-band--Width:calc( 1200px - calc(var(--pfe-band--Padding--horizontal) * 4) )}}@media print{:host{--pfe-band--Padding:calc(var(--pfe-band--Padding--vertical) / 2) var(--pfe-band--Padding--horizontal)}}@media (min-width:576px){:host{padding:var(--pfe-band--Padding)}}@media print{:host{background-color:#fff!important;background-image:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}}:host *,:host ::after,:host ::before{-webkit-box-sizing:border-box;box-sizing:border-box}:host([pfe-color=darker]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--darker, #464646);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--darker--text, #fff);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--darker--link, #99ccff);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--darker--link--visited, #b38cd9);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--darker--link--hover, #cce6ff);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--darker--link--focus, #cce6ff)}:host([pfe-color=darkest]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--darkest, #131313);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--darkest--text, #fff);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--darkest--link, #99ccff);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--darkest--link--visited, #b38cd9);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--darkest--link--hover, #cce6ff);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--darkest--link--focus, #cce6ff)}:host([pfe-color=accent]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--accent, #fe460d);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--accent--text, #fff);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--accent--link, #99ccff);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--accent--link--visited, #b38cd9);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--accent--link--hover, #cce6ff);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--accent--link--focus, #cce6ff)}:host([pfe-color=complement]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--complement, #0477a4);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--complement--text, #fff);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--complement--link, #99ccff);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--complement--link--visited, #b38cd9);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--complement--link--hover, #cce6ff);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--complement--link--focus, #cce6ff)}:host([pfe-color=lighter]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--lighter, #ececec);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--lighter--text, #333);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--lighter--link, #06c);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--lighter--link--visited, rebeccapurple);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--lighter--link--hover, #003366);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--lighter--link--focus, #003366)}:host([pfe-color=lightest]){--pfe-band--BackgroundColor:var(--pfe-theme--color--surface--lightest, #fff);--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--lightest--text, #333);--pfe-broadcasted--color--ui-link:var(--pfe-theme--color--surface--lightest--link, #06c);--pfe-broadcasted--color--ui-link--visited:var(--pfe-theme--color--surface--lightest--link--visited, rebeccapurple);--pfe-broadcasted--color--ui-link--hover:var(--pfe-theme--color--surface--lightest--link--hover, #003366);--pfe-broadcasted--color--ui-link--focus:var(--pfe-theme--color--surface--lightest--link--focus, #003366)}:host([pfe-size=small]){--pfe-band--Padding:calc(var(--pfe-band--Padding--vertical) / 4) var(--pfe-band--Padding--horizontal)}.pfe-band__container{--pfe-band_region--width:calc(calc(1fr - var(--pfe-band--Width__aside--sm)) - var(--pfe-band--gutter--horizontal));--pfe-band--gridTemplateArea_mobile:\"body\";position:relative;margin:0 auto;width:100%;max-width:var(--pfe-band--Width)}.pfe-band__container[pfe-has-aside]{--pfe-band--gridTemplateArea_mobile:\"body\" \"aside\";--pfe-band--gridTemplateArea_desktop:\"body aside\"}@media (min-width:768px){.pfe-band__container[pfe-has-aside]{--pfe-band--layout:1fr var(--pfe-band--Width__aside--sm)}}@media (min-width:992px){.pfe-band__container[pfe-has-aside]{--pfe-band--layout:1fr var(--pfe-band--Width__aside--lg)}}.pfe-band__container[pfe-has-aside][pfe-aside-mobile=top]{--pfe-band--gridTemplateArea_mobile:\"aside\" \"body\"}.pfe-band__container[pfe-has-aside][pfe-aside-desktop=left]{--pfe-band--gridTemplateArea_desktop:\"aside body\"}@media (min-width:768px){.pfe-band__container[pfe-has-aside][pfe-aside-desktop=left]{--pfe-band--layout:var(--pfe-band--Width__aside--sm) 1fr}}@media (min-width:992px){.pfe-band__container[pfe-has-aside][pfe-aside-desktop=left]{--pfe-band--layout:var(--pfe-band--Width__aside--lg) 1fr}}.pfe-band__container[pfe-has-header]{--pfe-band--gridTemplateArea_mobile:\"header\" \"body\"}.pfe-band__container[pfe-has-header][pfe-has-aside]{--pfe-band--gridTemplateArea_mobile:\"header\" \"body\" \"aside\";--pfe-band--gridTemplateArea_desktop:\"header header\" \"body aside\"}.pfe-band__container[pfe-has-header][pfe-aside-mobile=top]{--pfe-band--gridTemplateArea_mobile:\"aside\" \"header\" \"body\"}.pfe-band__container[pfe-has-header][pfe-aside-height=full]{--pfe-band--gridTemplateArea_desktop:\"header aside\" \"body aside\"}.pfe-band__container[pfe-has-header][pfe-aside-desktop=left]{--pfe-band--gridTemplateArea_desktop:\"header header\" \"aside body\"}.pfe-band__container[pfe-has-header][pfe-aside-desktop=left][pfe-aside-height=full]{--pfe-band--gridTemplateArea_desktop:\"aside header\" \"aside body\"}.pfe-band__container[pfe-has-footer]{--pfe-band--gridTemplateArea_mobile:\"body\" \"footer\"}.pfe-band__container[pfe-has-footer][pfe-has-aside]{--pfe-band--gridTemplateArea_mobile:\"body\" \"aside\" \"footer\";--pfe-band--gridTemplateArea_desktop:\"body aside\" \"footer footer\"}.pfe-band__container[pfe-has-footer][pfe-aside-mobile=top]{--pfe-band--gridTemplateArea_mobile:\"aside\" \"body\" \"footer\"}.pfe-band__container[pfe-has-footer][pfe-aside-height=full]{--pfe-band--gridTemplateArea_desktop:\"body aside\" \"footer aside\"}.pfe-band__container[pfe-has-footer][pfe-aside-desktop=left]{--pfe-band--gridTemplateArea_desktop:\"aside body\" \"footer footer\"}.pfe-band__container[pfe-has-footer][pfe-aside-desktop=left][pfe-aside-height=full]{--pfe-band--gridTemplateArea_desktop:\"aside body\" \"aside footer\"}.pfe-band__container[pfe-has-header][pfe-has-footer]{--pfe-band--gridTemplateArea_mobile:\"header\" \"body\" \"footer\"}.pfe-band__container[pfe-has-header][pfe-has-footer][pfe-has-aside]{--pfe-band--gridTemplateArea_mobile:\"header\" \"body\" \"footer\" \"aside\";--pfe-band--gridTemplateArea_desktop:\"header header\" \"body aside\" \"footer footer\"}.pfe-band__container[pfe-has-header][pfe-has-footer][pfe-aside-mobile=top]{--pfe-band--gridTemplateArea_mobile:\"aside\" \"header\" \"body\" \"footer\"}.pfe-band__container[pfe-has-header][pfe-has-footer][pfe-aside-height=full]{--pfe-band--gridTemplateArea_desktop:\"header aside\" \"body aside\" \"footer aside\"}.pfe-band__container[pfe-has-header][pfe-has-footer][pfe-aside-desktop=left]{--pfe-band--gridTemplateArea_desktop:\"header header\" \"aside body\" \"footer footer\"}.pfe-band__container[pfe-has-header][pfe-has-footer][pfe-aside-desktop=left][pfe-aside-height=full]{--pfe-band--gridTemplateArea_desktop:\"aside header\" \"aside body\" \"aside footer\"}@supports (display:grid){.pfe-band__container{grid-template-columns:var(--pfe-band--layout);grid-template-rows:-webkit-max-content;grid-template-rows:max-content;grid-template-areas:var(--pfe-band--gridTemplateArea_mobile)}@media (min-width:768px){.pfe-band__container{grid-template-areas:var(--pfe-band--gridTemplateArea_desktop)}}}.pfe-band__header{margin-bottom:var(--pfe-band--gutter--vertical)}@supports (display:grid){.pfe-band__header{grid-area:header;grid-template-columns:var(--pfe-band__header--layout)}}.pfe-band__body{margin-bottom:var(--pfe-band--gutter--vertical)}@supports (display:grid){.pfe-band__body{grid-area:body;grid-template-columns:var(--pfe-band__body--layout)}}.pfe-band__aside{margin-bottom:var(--pfe-band--gutter--vertical)}@supports (display:grid){.pfe-band__aside{grid-area:aside;grid-template-columns:var(--pfe-band__aside--layout)}}.pfe-band__footer{margin-bottom:var(--pfe-band--gutter--vertical)}@supports (display:grid){.pfe-band__footer{grid-area:footer;grid-template-columns:var(--pfe-band__footer--layout)}}.pfe-band__aside{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch}</style><section class=\"pfe-band__container\"" + ["header", "footer", "aside"].map(function (slot) { return _this.has_slot("pfe-band--" + slot) ? "pfe-has-" + slot : ""; }).join(" ") + ">\n  " + (this.has_slot("pfe-band--aside") && this.asidePosition.mobile === "top" ? "<slot class=\"pfe-band__aside\" name=\"pfe-band--aside\"></slot>" : "") + "\n  " + (this.has_slot("pfe-band--header") ? "<slot class=\"pfe-band__header\" name=\"pfe-band--header\"></slot>" : "") + "\n  <slot class=\"pfe-band__body\"></slot>\n  " + (this.has_slot("pfe-band--aside") && this.asidePosition.mobile !== "top" ? "<slot class=\"pfe-band__aside\" name=\"pfe-band--aside\"></slot>" : "") + "\n  " + (this.has_slot("pfe-band--footer") ? "<slot class=\"pfe-band__footer\" name=\"pfe-band--footer\"></slot>" : "") + "\n</section>";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeBand, "properties", {
                    get: function () {
                        return { "color": { "title": "Background color", "type": "string", "enum": ["lightest", "lighter", "base", "darker", "darkest", "complement", "accent"], "default": "base", "observer": "_colorChanged" }, "img-src": { "title": "Background image", "type": "string", "observer": "_imgSrcChanged" }, "aside-desktop": { "title": "Aside positioning (desktop)", "type": "string", "default": "right", "enum": ["right", "left"], "observer": "_basicAttributeChanged", "options": { "dependencies": [{ "type": "slot", "id": "aside" }] } }, "aside-mobile": { "title": "Aside positioning (mobile)", "type": "string", "default": "bottom", "enum": ["top", "bottom"], "observer": "_basicAttributeChanged", "options": { "dependencies": [{ "type": "slot", "id": "aside" }] } }, "aside-height": { "title": "Aside height", "type": "string", "default": "body", "enum": ["full", "body"], "observer": "_basicAttributeChanged", "options": { "dependencies": [{ "type": "slot", "id": "aside" }] } } };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeBand, "slots", {
                    get: function () {
                        return { "header": { "title": "Header", "type": "array", "namedSlot": true, "maxItems": 3, "items": { "title": "Body item", "oneOf": [{ "$ref": "raw" }] } }, "body": { "title": "Body", "type": "array", "namedSlot": false, "items": { "oneOf": [{ "$ref": "pfe-card" }, { "$ref": "raw" }] } }, "footer": { "title": "Footer", "type": "array", "namedSlot": true, "maxItems": 3, "items": { "oneOf": [{ "$ref": "pfe-cta" }, { "$ref": "raw" }] } }, "aside": { "title": "Aside", "type": "array", "namedSlot": true, "maxItems": 5, "items": { "oneOf": [{ "$ref": "pfe-card" }, { "$ref": "raw" }] } } };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeBand, "tag", {
                    get: function () {
                        return "pfe-band";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeBand.prototype, "schemaUrl", {
                    get: function () {
                        return "pfe-band.json";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeBand.prototype, "templateUrl", {
                    get: function () {
                        return "pfe-band.html";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeBand.prototype, "styleUrl", {
                    get: function () {
                        return "pfe-band.scss";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeBand.prototype, "imageSrc", {
                    get: function () {
                        return this.getAttribute("pfe-img-src");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeBand.prototype, "backgroundColor", {
                    get: function () {
                        return this.getAttribute("pfe-color");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeBand.prototype, "asidePosition", {
                    get: function () {
                        return {
                            desktop: this.getAttribute("pfe-aside-desktop"),
                            mobile: this.getAttribute("pfe-aside-mobile"),
                            height: this.getAttribute("pfe-aside-height")
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeBand, "observedAttributes", {
                    get: function () {
                        return [
                            "pfe-aside-desktop",
                            "pfe-aside-mobile",
                            "pfe-aside-height",
                            "pfe-color",
                            "pfe-img-src"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeBand, "cascadingAttributes", {
                    get: function () {
                        return {
                            "pfe-aside-desktop": ".pfe-band__container",
                            "pfe-aside-mobile": ".pfe-band__container",
                            "pfe-aside-height": ".pfe-band__container"
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeBand, "PfeType", {
                    get: function () {
                        return pfelement_js_1.default.PfeTypes.Container;
                    },
                    enumerable: true,
                    configurable: true
                });
                PfeBand.prototype.connectedCallback = function () {
                    _super.prototype.connectedCallback.call(this);
                    if (this.imageSrc) {
                        this._imgSrcChanged("pfe-img-src", "", this.imageSrc);
                    }
                    if (this.backgroundColor) {
                        this._updateContext(this.backgroundColor);
                    }
                };
                PfeBand.prototype.attributeChangedCallback = function (attr, oldValue, newValue) {
                    _super.prototype.attributeChangedCallback.call(this, attr, oldValue, newValue);
                    attr = attr.replace("pfe-", "");
                    if (this[attr] && this[attr].observer) {
                        var observer = this[this[attr].observer].bind(this);
                        if (typeof observer === "function")
                            observer(attr, oldValue, newValue);
                    }
                };
                PfeBand.prototype._basicAttributeChanged = function (attr, oldValue, newValue) {
                    this[attr].value = newValue;
                };
                PfeBand.prototype._colorChanged = function (attr, oldValue, newValue) {
                    this[attr].value = newValue;
                    this._updateContext(newValue);
                };
                PfeBand.prototype._imgSrcChanged = function (attr, oldValue, newValue) {
                    this.style.backgroundImage = newValue ? "url('" + newValue + "')" : "";
                };
                PfeBand.prototype._updateContext = function (context) {
                    var _this = this;
                    if (["darkest", "darker", "complement", "accent"].includes(context)) {
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
                return PfeBand;
            }(pfelement_js_1.default));
            pfelement_js_1.default.create(PfeBand);
            exports_1("default", PfeBand);
        }
    };
});
