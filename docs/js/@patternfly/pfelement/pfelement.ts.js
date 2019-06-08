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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./reveal.ts.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reveal_ts_js_1 = require("./reveal.ts.js");
    var prefix = "pfe-";
    var PFElement = (function (_super) {
        __extends(PFElement, _super);
        function PFElement(pfeClass, options) {
            var _this = _super.call(this) || this;
            _this.connected = false;
            _this._queue = [];
            _this.template = document.createElement("template");
            _this._pfeClass = pfeClass;
            _this.tag = pfeClass.tag;
            _this.props = pfeClass.properties;
            _this.slots = pfeClass.slots;
            _this.attachShadow({ mode: "open" });
            if (options && options.type) {
                _this._queueAction({
                    type: "setProperty",
                    data: {
                        name: "pfeType",
                        value: options.type
                    }
                });
            }
            if (options && !options.delayRender) {
                _this.render();
            }
            return _this;
        }
        PFElement.create = function (pfe) {
            window.customElements.define(pfe.tag, pfe);
        };
        PFElement.debugLog = function (preference) {
            if (preference === void 0) { preference = null; }
            if (preference !== null) {
                PFElement._debugLog = !!preference;
            }
            return PFElement._debugLog;
        };
        PFElement.log = function () {
            var msgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msgs[_i] = arguments[_i];
            }
            if (PFElement.debugLog()) {
                console.log.apply(console, __spread(msgs));
            }
        };
        Object.defineProperty(PFElement, "PfeTypes", {
            get: function () {
                return {
                    Container: "container",
                    Content: "content",
                    Combo: "combo"
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PFElement.prototype, "pfeType", {
            get: function () {
                return this.getAttribute(prefix + "type");
            },
            set: function (value) {
                this.setAttribute(prefix + "type", value);
            },
            enumerable: true,
            configurable: true
        });
        PFElement.prototype.has_slot = function (name) {
            return this.querySelector("[slot='" + name + "']");
        };
        PFElement.prototype.has_slots = function (name) {
            return __spread(this.querySelectorAll("[slot='" + name + "']"));
        };
        PFElement.prototype.connectedCallback = function () {
            this.connected = true;
            if (window.hasOwnProperty('ShadyCSS')) {
                window['ShadyCSS'].styleElement(this);
            }
            this.classList.add("PFElement");
            this.setAttribute("pfelement", "");
            if (typeof this.props === "object") {
                this._mapSchemaToProperties(this.tag, this.props);
            }
            if (typeof this.slots === "object") {
                this._mapSchemaToSlots(this.tag, this.slots);
            }
            if (this._queue.length) {
                this._processQueue();
            }
        };
        PFElement.prototype.disconnectedCallback = function () {
            this.connected = false;
        };
        PFElement.prototype.attributeChangedCallback = function (attr, oldVal, newVal) {
            if (!this._pfeClass.cascadingAttributes) {
                return;
            }
            var cascadeTo = this._pfeClass.cascadingAttributes[attr];
            if (cascadeTo) {
                this._copyAttribute(attr, cascadeTo);
            }
        };
        PFElement.prototype._copyAttribute = function (name, to) {
            var e_1, _a;
            var recipients = __spread(this.querySelectorAll(to), this.shadowRoot.querySelectorAll(to));
            var value = this.getAttribute(name);
            var fname = value == null ? "removeAttribute" : "setAttribute";
            try {
                for (var recipients_1 = __values(recipients), recipients_1_1 = recipients_1.next(); !recipients_1_1.done; recipients_1_1 = recipients_1.next()) {
                    var node = recipients_1_1.value;
                    node[fname](name, value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (recipients_1_1 && !recipients_1_1.done && (_a = recipients_1.return)) _a.call(recipients_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        PFElement.prototype._mapSchemaToProperties = function (tag, properties) {
            var _this = this;
            Object.keys(properties).forEach(function (attr) {
                var data = properties[attr];
                var hasPrefix = true;
                var attrName = attr;
                _this[attr] = data;
                _this[attr].value = null;
                if (typeof _this[attr].prefixed !== "undefined") {
                    hasPrefix = _this[attr].prefixed;
                }
                if (hasPrefix) {
                    attrName = "" + prefix + attr;
                }
                if (_this.hasAttribute(attrName)) {
                    _this[attr].value = _this.getAttribute(attrName);
                }
                else if (data.default) {
                    var dependency_exists = _this._hasDependency(tag, data.options);
                    var no_dependencies = !data.options || (data.options && !data.options.dependencies.length);
                    if (dependency_exists || no_dependencies) {
                        _this.setAttribute(attrName, data.default);
                        _this[attr].value = data.default;
                    }
                }
            });
        };
        PFElement.prototype._hasDependency = function (tag, opts) {
            var dependencies = opts ? opts.dependencies : [];
            var hasDependency = false;
            for (var i = 0; i < dependencies.length; i += 1) {
                var slot_exists = dependencies[i].type === "slot" &&
                    this.has_slots(tag + "--" + dependencies[i].id).length > 0;
                var attribute_exists = dependencies[i].type === "attribute" &&
                    this.getAttribute("" + prefix + dependencies[i].id);
                if (slot_exists || attribute_exists) {
                    hasDependency = true;
                    break;
                }
            }
            return hasDependency;
        };
        PFElement.prototype._mapSchemaToSlots = function (tag, slots) {
            var _this = this;
            Object.keys(slots).forEach(function (slot) {
                var slotObj = slots[slot];
                var slotExists = false;
                if (slotObj.namedSlot) {
                    if (_this.has_slots(tag + "--" + slot).length > 0) {
                        slotExists = true;
                    }
                }
                else {
                    if (__spread(_this.querySelectorAll(":not([slot])")).length > 0) {
                        slotExists = true;
                    }
                }
                if (slotExists) {
                    _this.setAttribute("has_" + slot, "");
                }
                else {
                    _this.removeAttribute("has_" + slot);
                }
            });
        };
        PFElement.prototype._queueAction = function (action) {
            this._queue.push(action);
        };
        PFElement.prototype._processQueue = function () {
            var _this = this;
            this._queue.forEach(function (action) {
                _this["_" + action.type](action.data);
            });
            this._queue = [];
        };
        PFElement.prototype._setProperty = function (_a) {
            var name = _a.name, value = _a.value;
            this[name] = value;
        };
        PFElement.var = function (name, element) {
            if (element === void 0) { element = document.body; }
            return window
                .getComputedStyle(element)
                .getPropertyValue(name)
                .trim();
        };
        PFElement.prototype.var = function (name) {
            return PFElement.var(name, this);
        };
        PFElement.prototype.render = function () {
            this.shadowRoot.innerHTML = "";
            this.template.innerHTML = this.html;
            if (window.hasOwnProperty('ShadyCSS')) {
                window['ShadyCSS'].prepareTemplate(this.template, this.tag);
            }
            this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        };
        PFElement.prototype.log = function () {
            var msgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msgs[_i] = arguments[_i];
            }
            PFElement.log.apply(PFElement, __spread(["[" + this.tag + "]"], msgs));
        };
        return PFElement;
    }(HTMLElement));
    exports.PFElement = PFElement;
    reveal_ts_js_1.autoReveal(PFElement.log);
});
