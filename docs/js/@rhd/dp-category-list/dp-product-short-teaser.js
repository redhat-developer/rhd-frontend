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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../@patternfly/pfelement/pfelement.ts.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var pfelement_ts_js_1 = require("../../@patternfly/pfelement/pfelement.ts.js");
    var DPProductShortTeaser = (function (_super) {
        __extends(DPProductShortTeaser, _super);
        function DPProductShortTeaser() {
            return _super.call(this, DPProductShortTeaser, { delayRender: true }) || this;
        }
        Object.defineProperty(DPProductShortTeaser.prototype, "html", {
            get: function () {
                return "\n<style>\n    :host { \n        font-family: \"Overpass\", \"Open Sans\", Arial, Helvetica, sans-serif;\n        font-size: 14px;\n        line-height: 21px;\n        margin-bottom: 30px;\n        display: flex;\n        flex-direction: column;\n        text-align: left;\n    }\n    h4 { \n        flex: 0 0 24px;\n        font-family: \"Overpass\", \"Open Sans\", Arial, Helvetica, sans-serif;\n        font-size: 14px;\n        font-weight: bold;\n        line-height: 24px;\n        margin: 0 0 5px 0;\n    }\n    h4 a {\n        color: #0066CC;\n        text-decoration: none;\n    }\n\n    div {\n        flex: 1 1 auto;\n        margin-bottom: 16px;\n        color: #000000;\n    }\n\n    a.more {\n        flex: 0 0 25px;\n        display: block;\n        width: auto;\n        color: #0066CC;\n        font-size: 16px;\n        line-height: 25px;\n    }\n</style>\n<h4><a href=\"" + this.link + "\">" + this.name + "</a></h4>\n<div>\n<slot></slot>\n</div>\n<a class=\"more\" href=\"" + this.downloadLink + "\">View all downloads <i class=\"fas fa-caret-right\"></i></a>\n        ";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPProductShortTeaser, "tag", {
            get: function () { return 'dp-product-short-teaser'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPProductShortTeaser.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (val) {
                if (this._name === val)
                    return;
                this._name = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPProductShortTeaser.prototype, "link", {
            get: function () {
                return this._link;
            },
            set: function (val) {
                if (this._link === val)
                    return;
                this._link = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DPProductShortTeaser.prototype, "downloadLink", {
            get: function () {
                return this._downloadLink;
            },
            set: function (val) {
                if (this._downloadLink === val)
                    return;
                this._downloadLink = val;
            },
            enumerable: true,
            configurable: true
        });
        DPProductShortTeaser.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            _super.prototype.render.call(this);
        };
        Object.defineProperty(DPProductShortTeaser, "observedAttributes", {
            get: function () {
                return ['name', 'link', 'download-link'];
            },
            enumerable: true,
            configurable: true
        });
        DPProductShortTeaser.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
            if (name !== 'download-link') {
                this[name] = newVal;
            }
            else {
                this.downloadLink = newVal;
            }
        };
        return DPProductShortTeaser;
    }(pfelement_ts_js_1.PFElement));
    exports.default = DPProductShortTeaser;
    pfelement_ts_js_1.PFElement.create(DPProductShortTeaser);
});
