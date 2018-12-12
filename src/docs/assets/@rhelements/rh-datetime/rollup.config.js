System.register(["../../scripts/rollup.config.factory.js", "./package.json"], function (exports_1, context_1) {
    "use strict";
    var rollup_config_factory_js_1, package_json_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rollup_config_factory_js_1_1) {
                rollup_config_factory_js_1 = rollup_config_factory_js_1_1;
            },
            function (package_json_1_1) {
                package_json_1 = package_json_1_1;
            }
        ],
        execute: function () {
            exports_1("default", rollup_config_factory_js_1.default(package_json_1.default.rhelement));
        }
    };
});
