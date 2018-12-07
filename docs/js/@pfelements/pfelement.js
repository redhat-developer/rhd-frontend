System.register([], function (exports_1, context_1) {
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
    var PFElement;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PFElement = (function (_super) {
                __extends(PFElement, _super);
                function PFElement(id, template) {
                    var _this = _super.call(this) || this;
                    _this.id = id;
                    if (ShadyCSS && template) {
                        ShadyCSS.prepareTemplate(template, id);
                    }
                    _this.attachShadow({ mode: "open" });
                    if (template) {
                        _this.shadowRoot.appendChild(template.content.cloneNode(true));
                    }
                    return _this;
                }
                PFElement.prototype.connectedCallback = function () {
                    if (ShadyCSS) {
                        ShadyCSS.styleElement(this);
                    }
                };
                Object.defineProperty(PFElement, "observedAttributes", {
                    get: function () {
                        return ['url', 'name'];
                    },
                    enumerable: true,
                    configurable: true
                });
                PFElement.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                PFElement.prototype.render = function (template) {
                    if (ShadyCSS) {
                        ShadyCSS.prepareTemplate(template, this.id);
                    }
                    while (this.shadowRoot.firstChild) {
                        this.shadowRoot.removeChild(this.shadowRoot.firstChild);
                    }
                    this.shadowRoot.appendChild(template.content.cloneNode(true));
                    if (ShadyCSS) {
                        ShadyCSS.styleElement(this);
                    }
                };
                return PFElement;
            }(HTMLElement));
            exports_1("default", PFElement);
        }
    };
});
