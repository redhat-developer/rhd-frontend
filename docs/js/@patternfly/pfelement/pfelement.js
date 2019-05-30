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
    var logger, prefix, PFElement;
    var __moduleName = context_1 && context_1.id;
    function reveal() {
        logger("[reveal] elements ready, revealing the body");
        window.document.body.removeAttribute("unresolved");
    }
    function autoReveal(logFunction) {
        logger = logFunction;
        var polyfillPresent = window.WebComponents;
        var polyfillReady = polyfillPresent && window.WebComponents.ready;
        if (!polyfillPresent || polyfillReady) {
            handleWebComponentsReady();
        }
        else {
            window.addEventListener("WebComponentsReady", handleWebComponentsReady);
        }
    }
    function handleWebComponentsReady() {
        logger("[reveal] web components ready");
        reveal();
    }
    return {
        setters: [],
        execute: function () {
            logger = function () { return null; };
            prefix = "pfe-";
            PFElement = (function (_super) {
                __extends(PFElement, _super);
                function PFElement(pfeClass, _a) {
                    var _b = _a === void 0 ? {} : _a, _c = _b.type, type = _c === void 0 ? null : _c, _d = _b.delayRender, delayRender = _d === void 0 ? false : _d;
                    var _this = _super.call(this) || this;
                    _this.connected = false;
                    _this._pfeClass = pfeClass;
                    _this.tag = pfeClass.tag;
                    _this.props = pfeClass.properties;
                    _this.slots = pfeClass.slots;
                    _this._queue = [];
                    _this.template = document.createElement("template");
                    _this.attachShadow({ mode: "open" });
                    if (type) {
                        _this._queueAction({
                            type: "setProperty",
                            data: {
                                name: "pfeType",
                                value: type
                            }
                        });
                    }
                    if (!delayRender) {
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
                        console.log.apply(console, msgs);
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
                    return this.querySelectorAll("[slot='" + name + "']").slice();
                };
                PFElement.prototype.connectedCallback = function () {
                    this.connected = true;
                    if (window.ShadyCSS) {
                        window.ShadyCSS.styleElement(this);
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
                    var recipients = this.querySelectorAll(to).concat(this.shadowRoot.querySelectorAll(to));
                    var value = this.getAttribute(name);
                    var fname = value == null ? "removeAttribute" : "setAttribute";
                    for (var _i = 0, recipients_1 = recipients; _i < recipients_1.length; _i++) {
                        var node = recipients_1[_i];
                        node[fname](name, value);
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
                            if (_this.querySelectorAll(":not([slot])").slice().length > 0) {
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
                    if (window.ShadyCSS) {
                        window.ShadyCSS.prepareTemplate(this.template, this.tag);
                    }
                    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
                };
                PFElement.prototype.log = function () {
                    var msgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        msgs[_i] = arguments[_i];
                    }
                    PFElement.log.apply(PFElement, ["[" + this.tag + "]"].concat(msgs));
                };
                return PFElement;
            }(HTMLElement));
            autoReveal(PFElement.log);
            exports_1("default", PFElement);
        }
    };
});
