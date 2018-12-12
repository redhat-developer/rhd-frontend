System.register(["./reveal.js"], function (exports_1, context_1) {
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
    var reveal_js_1, RHElement;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (reveal_js_1_1) {
                reveal_js_1 = reveal_js_1_1;
            }
        ],
        execute: function () {
            RHElement = (function (_super) {
                __extends(RHElement, _super);
                function RHElement(rhClass, _a) {
                    var _b = _a === void 0 ? {} : _a, _c = _b.type, type = _c === void 0 ? null : _c, _d = _b.delayRender, delayRender = _d === void 0 ? false : _d;
                    var _this = _super.call(this) || this;
                    _this._rhClass = rhClass;
                    _this.tag = rhClass.tag;
                    _this._queue = [];
                    _this.template = document.createElement("template");
                    _this.attachShadow({ mode: "open" });
                    if (type) {
                        _this._queueAction({
                            type: "setProperty",
                            data: {
                                name: "rhType",
                                value: type
                            }
                        });
                    }
                    if (!delayRender) {
                        _this.render();
                    }
                    return _this;
                }
                RHElement.create = function (rhe) {
                    window.customElements.define(rhe.tag, rhe);
                };
                RHElement.debugLog = function (preference) {
                    if (preference === void 0) { preference = null; }
                    if (preference !== null) {
                        RHElement._debugLog = !!preference;
                    }
                    return RHElement._debugLog;
                };
                RHElement.log = function () {
                    var msgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        msgs[_i] = arguments[_i];
                    }
                    if (RHElement.debugLog()) {
                        console.log.apply(console, msgs);
                    }
                };
                Object.defineProperty(RHElement, "RhTypes", {
                    get: function () {
                        return {
                            Container: "container",
                            Content: "content",
                            Pattern: "pattern"
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHElement.prototype, "rhType", {
                    get: function () {
                        return this.getAttribute("rh-type");
                    },
                    set: function (value) {
                        this.setAttribute("rh-type", value);
                    },
                    enumerable: true,
                    configurable: true
                });
                RHElement.prototype.connectedCallback = function () {
                    if (window.ShadyCSS) {
                        window.ShadyCSS.styleElement(this);
                    }
                    this.classList.add("rhelement");
                    if (this._queue.length) {
                        this._processQueue();
                    }
                };
                RHElement.prototype.attributeChangedCallback = function (attr, oldVal, newVal) {
                    if (!this._rhClass.cascadingAttributes) {
                        return;
                    }
                    var cascadeTo = this._rhClass.cascadingAttributes[attr];
                    if (cascadeTo) {
                        this._copyAttribute(attr, cascadeTo);
                    }
                };
                RHElement.prototype._copyAttribute = function (name, to) {
                    var recipients = this.querySelectorAll(to).concat(this.shadowRoot.querySelectorAll(to));
                    var value = this.getAttribute(name);
                    var fname = value == null ? "removeAttribute" : "setAttribute";
                    for (var _i = 0, recipients_1 = recipients; _i < recipients_1.length; _i++) {
                        var node = recipients_1[_i];
                        node[fname](name, value);
                    }
                };
                RHElement.prototype._queueAction = function (action) {
                    this._queue.push(action);
                };
                RHElement.prototype._processQueue = function () {
                    var _this = this;
                    this._queue.forEach(function (action) {
                        _this["_" + action.type](action.data);
                    });
                    this._queue = [];
                };
                RHElement.prototype._setProperty = function (_a) {
                    var name = _a.name, value = _a.value;
                    this[name] = value;
                };
                RHElement.prototype.render = function () {
                    this.shadowRoot.innerHTML = "";
                    this.template.innerHTML = this.html;
                    if (window.ShadyCSS) {
                        window.ShadyCSS.prepareTemplate(this.template, this.tag);
                    }
                    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
                };
                RHElement.prototype.log = function () {
                    var msgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        msgs[_i] = arguments[_i];
                    }
                    RHElement.log.apply(RHElement, ["[" + this.tag + "]"].concat(msgs));
                };
                return RHElement;
            }(HTMLElement));
            reveal_js_1.autoReveal(RHElement.log);
            exports_1("default", RHElement);
        }
    };
});
