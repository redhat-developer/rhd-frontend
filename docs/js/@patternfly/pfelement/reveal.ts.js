(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logger = function (str) { return null; };
    function reveal() {
        logger("[reveal] elements ready, revealing the body");
        window.document.body.removeAttribute("unresolved");
    }
    exports.reveal = reveal;
    function autoReveal(logFunction) {
        logger = logFunction;
        var polyfillPresent = window['WebComponents'];
        var polyfillReady = polyfillPresent && window['WebComponents']['ready'];
        if (!polyfillPresent || polyfillReady) {
            handleWebComponentsReady();
        }
        else {
            window.addEventListener("WebComponentsReady", handleWebComponentsReady);
        }
    }
    exports.autoReveal = autoReveal;
    function handleWebComponentsReady() {
        logger("[reveal] web components ready");
        reveal();
    }
});
