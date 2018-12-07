System.register(["../@pfelements/pfelement.js"], function (exports_1, context_1) {
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
    var pfelement_js_1, RHKeycloak;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pfelement_js_1_1) {
                pfelement_js_1 = pfelement_js_1_1;
            }
        ],
        execute: function () {
            RHKeycloak = (function (_super) {
                __extends(RHKeycloak, _super);
                function RHKeycloak(element) {
                    if (element === void 0) { element = 'rh-keycloak'; }
                    var _this = _super.call(this, element) || this;
                    _this.template = function (el) {
                        var tpl = document.createElement("template");
                        tpl.innerHTML = "";
                        return tpl;
                    };
                    return _this;
                }
                Object.defineProperty(RHKeycloak.prototype, "url", {
                    get: function () {
                        return this._url;
                    },
                    enumerable: true,
                    configurable: true
                });
                RHKeycloak.prototype.connectedCallback = function () {
                };
                RHKeycloak.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                RHKeycloak.prototype.updateToken = function () {
                };
                return RHKeycloak;
            }(pfelement_js_1.default));
            exports_1("default", RHKeycloak);
            window.customElements.define('rh-keycloak', RHKeycloak);
        }
    };
});
//# sourceMappingURL=rh-keycloak.js.map