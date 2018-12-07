System.register(["./dp-referrer.js", "./dp-category-list/dp-category-list.js", "./dp-category-list/dp-category.js", "./dp-category-list/dp-category-item-list.js", "./dp-category-list/dp-category-item.js", "./dp-category-list/dp-product-short-teaser.js"], function (exports_1, context_1) {
    "use strict";
    var dp_referrer_js_1, dp_category_list_js_1, dp_category_js_1, dp_category_item_list_js_1, dp_category_item_js_1, dp_product_short_teaser_js_1, RHDApp;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (dp_referrer_js_1_1) {
                dp_referrer_js_1 = dp_referrer_js_1_1;
            },
            function (dp_category_list_js_1_1) {
                dp_category_list_js_1 = dp_category_list_js_1_1;
            },
            function (dp_category_js_1_1) {
                dp_category_js_1 = dp_category_js_1_1;
            },
            function (dp_category_item_list_js_1_1) {
                dp_category_item_list_js_1 = dp_category_item_list_js_1_1;
            },
            function (dp_category_item_js_1_1) {
                dp_category_item_js_1 = dp_category_item_js_1_1;
            },
            function (dp_product_short_teaser_js_1_1) {
                dp_product_short_teaser_js_1 = dp_product_short_teaser_js_1_1;
            }
        ],
        execute: function () {
            RHDApp = (function () {
                function RHDApp() {
                    this.b = new dp_category_list_js_1.default();
                    this.c = new dp_category_js_1.default();
                    this.d = new dp_category_item_list_js_1.default();
                    this.e = new dp_category_item_js_1.default();
                    this.f = new dp_product_short_teaser_js_1.default();
                    this.g = new dp_referrer_js_1.default();
                }
                return RHDApp;
            }());
            exports_1("default", RHDApp);
        }
    };
});
//# sourceMappingURL=rhd-app.js.map