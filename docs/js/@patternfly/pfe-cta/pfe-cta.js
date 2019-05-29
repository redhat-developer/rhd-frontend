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
    var pfelement_js_1, PfeCta;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pfelement_js_1_1) {
                pfelement_js_1 = pfelement_js_1_1;
            }
        ],
        execute: function () {
            PfeCta = (function (_super) {
                __extends(PfeCta, _super);
                function PfeCta() {
                    return _super.call(this, PfeCta) || this;
                }
                Object.defineProperty(PfeCta.prototype, "html", {
                    get: function () {
                        return "<style>:host{--pfe-cta--main:var(--pfe-theme--color--ui-link, #06c);--pfe-cta--main--hover:var(--pfe-theme--color--ui-link--hover, #003366);--pfe-cta--main--focus:var(--pfe-theme--color--ui-link--focus, #003366);--pfe-cta--main--visited:var(--pfe-theme--color--ui-link--visited, rebeccapurple);--pfe-cta--aux:transparent;--pfe-cta--aux--hover:transparent;display:inline-block;font-weight:700}:host ::slotted(a){line-height:inherit;color:var(--pfe-cta--main);-webkit-transition:all cubic-bezier(.465,.183,.153,.946);transition:all cubic-bezier(.465,.183,.153,.946);-webkit-transition:all var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:all var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946))}:host ::slotted(a)::after{display:block;margin-left:calc(1rem * .25);margin-left:calc(var(--pfe-theme--content-spacer,1rem) * .25);vertical-align:middle;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);border-width:.313em .313em 0;border-color:transparent;border-top-color:var(--pfe-cta--main);-webkit-transform:rotate(-90deg);transform:rotate(-90deg);display:inline-block;content:\"\"}:host ::slotted(a:hover){color:var(--pfe-cta--main--hover)}:host ::slotted(a:hover)::after{border-top-color:var(--pfe-cta--main--hover)}:host ::slotted(a:focus){color:var(--pfe-cta--main--focus)}:host ::slotted(a:focus)::after{border-top-color:var(--pfe-cta--main--focus)}:host([priority=primary]){--pfe-cta--main:var(--pfe-theme--color--ui-accent, #fe460d);--pfe-cta--main--hover:var(--pfe-theme--color--ui-accent--hover, #a42701);--pfe-cta--aux:var(--pfe-theme--color--ui-accent--text, #fff);--pfe-cta--aux--hover:var(--pfe-theme--color--ui-accent--text--hover, #fff)}:host([priority=primary]) ::slotted(a){display:inline-block;padding:calc(1rem * .5) calc(1rem * 2);padding:calc(var(--pfe-theme--container-padding,1rem) * .5) calc(var(--pfe-theme--container-padding,1rem) * 2);border-radius:calc(2px * 20);border-radius:calc(var(--pfe-theme--ui--border-radius,2px) * 20);border:1px solid transparent;border:var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) transparent;text-decoration:none;line-height:1.2;border-color:var(--pfe-cta--main);background:var(--pfe-cta--main);color:var(--pfe-cta--aux);--pfe-broadcasted--color--ui-link:var(--pfe-cta--aux)}:host([priority=primary]) ::slotted(a)::after{display:none}:host([priority=primary]) ::slotted(a:focus),:host([priority=primary]) ::slotted(a:hover){border-color:var(--pfe-cta--main--hover);background:var(--pfe-cta--main--hover);color:var(--pfe-cta--aux--hover);--pfe-broadcasted--color--ui-link--hover:var(--pfe-cta--aux--hover)}:host([priority=secondary]){--pfe-cta--main:var(--pfe-theme--color--ui-base, #0477a4);--pfe-cta--main--hover:var(--pfe-theme--color--ui-base--hover, #022f40);--pfe-cta--aux:var(--pfe-theme--color--ui-base--text, #fff);--pfe-cta--aux--hover:var(--pfe-theme--color--ui-base--text--hover, #fff)}:host([priority=secondary]) ::slotted(a){display:inline-block;padding:calc(1rem * .5) calc(1rem * 2);padding:calc(var(--pfe-theme--container-padding,1rem) * .5) calc(var(--pfe-theme--container-padding,1rem) * 2);border-radius:calc(2px * 20);border-radius:calc(var(--pfe-theme--ui--border-radius,2px) * 20);border:1px solid var(--pfe-cta--main);border:var(--pfe-theme--ui--border-width,1px) var(--pfe-theme--ui--border-style,solid) var(--pfe-cta--main);text-decoration:none;line-height:1.2;border-color:var(--pfe-cta--main);background:var(--pfe-cta--aux);color:var(--pfe-cta--main);--pfe-broadcasted--color--ui-link--hover:var(--pfe-cta--main)}:host([priority=secondary]) ::slotted(a)::after{display:none}:host([priority=secondary]) ::slotted(a:focus),:host([priority=secondary]) ::slotted(a:hover){border-color:var(--pfe-cta--main--hover);background:var(--pfe-cta--main--hover);color:var(--pfe-cta--aux--hover);--pfe-broadcasted--color--ui-link--hover:var(--pfe-cta--aux--hover)}:host([on=dark]){--pfe-cta--main:var(--pfe-theme--color--text--on-dark, #fff);--pfe-cta--main--hover:var(--pfe-theme--color--ui-link--on-dark--hover, #cce6ff);--pfe-cta--aux:transparent;--pfe-cta--aux--hover:transparent}:host([on=dark][priority=primary]){--pfe-cta--main:var(--pfe-theme--color--ui-accent--text, #fff);--pfe-cta--main--hover:var(--pfe-theme--color--ui-accent--text--hover, #fff);--pfe-cta--aux:var(--pfe-theme--color--ui-accent, #fe460d);--pfe-cta--aux--hover:var(--pfe-theme--color--ui-accent--hover, #a42701)}:host([on=dark][priority=secondary]){--pfe-cta--main:var(--pfe-theme--color--ui-base--text, #fff);--pfe-cta--main--hover:var(--pfe-theme--color--ui-base--text--hover, #fff);--pfe-cta--aux:transparent;--pfe-cta--aux--hover:var(--pfe-theme--color--ui-base--hover, #022f40)}:host([color=base]),:host([color=base][on=dark]){--pfe-cta--main:var(--pfe-theme--color--ui-base, #0477a4);--pfe-cta--main--hover:var(--pfe-theme--color--ui-base--hover, #022f40);--pfe-cta--aux:var(--pfe-theme--color--ui-base--text, #fff);--pfe-cta--aux--hover:var(--pfe-theme--color--ui-base--text--hover, #fff)}:host([color=complement]),:host([color=complement][on=dark]){--pfe-cta--main:var(--pfe-theme--color--ui-complement, #464646);--pfe-cta--main--hover:var(--pfe-theme--color--ui-complement--hover, #131313);--pfe-cta--aux:var(--pfe-theme--color--ui-complement--text, #fff);--pfe-cta--aux--hover:var(--pfe-theme--color--ui-complement--text--hover, #fff)}:host([color=accent]),:host([color=accent][on=dark]){--pfe-cta--main:var(--pfe-theme--color--ui-accent, #fe460d);--pfe-cta--main--hover:var(--pfe-theme--color--ui-accent--hover, #a42701);--pfe-cta--aux:var(--pfe-theme--color--ui-accent--text, #fff);--pfe-cta--aux--hover:var(--pfe-theme--color--ui-accent--text--hover, #fff)}</style><slot></slot>";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeCta, "tag", {
                    get: function () {
                        return "pfe-cta";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeCta.prototype, "styleUrl", {
                    get: function () {
                        return "pfe-cta.scss";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PfeCta.prototype, "templateUrl", {
                    get: function () {
                        return "pfe-cta.html";
                    },
                    enumerable: true,
                    configurable: true
                });
                PfeCta.prototype.connectedCallback = function () {
                    _super.prototype.connectedCallback.call(this);
                    var firstChild = this.children[0];
                    if (!firstChild) {
                        console.warn("The first child in the light DOM must be an anchor tag (<a>)");
                    }
                    else if (firstChild && firstChild.tagName.toLowerCase() !== "a") {
                        console.warn("The first child in the light DOM must be an anchor tag (<a>)");
                    }
                    else {
                        this.link = this.querySelector("a");
                    }
                };
                PfeCta.prototype.disconnectedCallback = function () { };
                return PfeCta;
            }(pfelement_js_1.default));
            pfelement_js_1.default.create(PfeCta);
            exports_1("default", PfeCta);
        }
    };
});
