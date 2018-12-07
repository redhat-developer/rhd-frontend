System.register(["../../@pfelements/pfelement.js", "./rhdp-search-url.js", "./rhdp-search-filters.js"], function (exports_1, context_1) {
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
    var pfelement_js_1, rhdp_search_url_js_1, rhdp_search_filters_js_1, RHDPSearchApp;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pfelement_js_1_1) {
                pfelement_js_1 = pfelement_js_1_1;
            },
            function (rhdp_search_url_js_1_1) {
                rhdp_search_url_js_1 = rhdp_search_url_js_1_1;
            },
            function (rhdp_search_filters_js_1_1) {
                rhdp_search_filters_js_1 = rhdp_search_filters_js_1_1;
            }
        ],
        execute: function () {
            RHDPSearchApp = (function (_super) {
                __extends(RHDPSearchApp, _super);
                function RHDPSearchApp() {
                    var _this = _super.call(this, 'rhdp-search-app') || this;
                    _this.template = function (el) {
                        var tpl = document.createElement("template");
                        tpl.innerHTML = "\n        <style>\n\n    :host { \n        display: flex;\n        flex-flow: column;\n        font-family: \"Overpass\", \"Open Sans\", Arial, Helvetica, sans-serif;\n        margin-bottom: 30px;\n    }\n\n    .query { flex: 0 0 auto; }\n    .content { flex: 1 1 auto; display: flex; flex-flow: row; }\n    .filters { flex: 0 0 auto; }\n    .results { flex: 1 0 auto; display: flex; flex-flow: column; }\n\n    .hide { display: none; }\n    \n    .show { display: block; }\n    \n    .mobile { display: none; }\n\n    h1 { flex: 0 0 auto; }\n\n    .loading {\n        background:url(\"https://developers.redhat.com/images/icons/ajax-loader.gif\") center 80px no-repeat;\n        min-height:250px;\n    }\n        </style>\n    <h1>" + el.name + "</h1>\n    <section class=\"query\"><slot name=\"query\"></slot></section>\n    <section class=\"content\">\n        <section class=\"filters\"><slot name=\"filters\"></slot></section>\n        <section class=\"results\">\n        <slot></slot>\n        </section>\n    </section>\n    ";
                        return tpl;
                    };
                    _this._name = 'Search';
                    _this.urlEle = new rhdp_search_url_js_1.default();
                    _this.modal = new rhdp_search_filters_js_1.default();
                    _this.filterObj = {
                        term: '',
                        facets: [
                            { name: 'CONTENT TYPE', key: 'type', items: [
                                    { key: 'apidocs', name: 'APIs and Docs', value: ['rht_website', 'rht_apidocs'], type: ['apidocs'] },
                                    { key: 'archetype', name: 'Archetype', value: ['jbossdeveloper_archetype'], type: ['jbossdeveloper_archetype'] },
                                    { key: 'article', name: 'Article', value: ['article', 'solution'], type: ['rhd_knowledgebase_article', 'rht_knowledgebase_solution'] },
                                    { key: 'blogpost', name: "Blog Posts", value: ['blogpost'], type: ['jbossorg_blog'] },
                                    { key: 'book', name: "Book", value: ["book"], type: ["jbossdeveloper_book"] },
                                    { key: 'bom', name: "BOM", value: ["jbossdeveloper_bom"], type: ['jbossdeveloper_bom'] },
                                    { key: 'cheatsheet', name: "Cheat Sheet", value: ['cheatsheet'], type: ['jbossdeveloper_cheatsheet'] },
                                    { key: 'demo', name: 'Demo', value: ['demo'], type: ['jbossdeveloper_demo'] },
                                    { key: 'event', name: 'Event', value: ['jbossdeveloper_event'], type: ['jbossdeveloper_event'] },
                                    { key: 'forum', name: 'Forum', value: ['jbossorg_sbs_forum'], type: ['jbossorg_sbs_forum'] },
                                    { key: 'get-started', name: "Get Started", value: ["jbossdeveloper_example"], type: ['jbossdeveloper_example'] },
                                    { key: 'quickstart', name: "Quickstart", value: ['quickstart'], type: ['jbossdeveloper_quickstart'] },
                                    { key: 'stackoverflow', name: 'Stack Overflow', value: ['stackoverflow_thread'], type: ['stackoverflow_question'] },
                                    { key: 'video', name: "Video", value: ["video"], type: ['jbossdeveloper_vimeo', 'jbossdeveloper_youtube'] },
                                    { key: 'webpage', name: "Web Page", value: ['webpage'], type: ['rhd_website'] }
                                ]
                            },
                            {
                                name: 'PRODUCT',
                                key: 'project',
                                items: [
                                    { key: 'dotnet', name: '.NET Runtime for Red Hat Enterprise Linux', value: ['dotnet'] },
                                    { key: 'amq', name: 'JBoss A-MQ', value: ['amq'] },
                                    { key: 'rhpam', name: 'Red Hat Process Automation Manager', value: ['rhpam', 'bpmsuite'] },
                                    { key: 'brms', name: 'Red Hat Decision Manager', value: ['brms'] },
                                    { key: 'datagrid', name: 'JBoss Data Grid', value: ['datagrid'] },
                                    { key: 'datavirt', name: 'JBoss Data Virtualization', value: ['datavirt'] },
                                    { key: 'devstudio', name: 'JBoss Developer Studio', value: ['devstudio'] },
                                    { key: 'eap', name: 'JBoss Enterprise Application Platform', value: ['eap'] },
                                    { key: 'fuse', name: 'JBoss Fuse', value: ['fuse'] },
                                    { key: 'webserver', name: 'JBoss Web Server', value: ['webserver'] },
                                    { key: 'openjdk', name: 'OpenJDK', value: ['openjdk'] },
                                    { key: 'rhamt', name: 'Red Hat Application Migration Toolkit', value: ['rhamt'] },
                                    { key: 'cdk', name: 'Red Hat Container Development Kit', value: ['cdk'] },
                                    { key: 'developertoolset', name: 'Red Hat Developer Toolset', value: ['developertoolset'] },
                                    { key: 'devsuite', name: 'Red Hat Development Suite', value: ['devsuite'] },
                                    { key: 'rhel', name: 'Red Hat Enterprise Linux', value: ['rhel'] },
                                    { key: 'mobileplatform', name: 'Red Hat Mobile Application Platform', value: ['mobileplatform'] },
                                    { key: 'openshift', name: 'Red Hat OpenShift Container Platform', value: ['openshift'] },
                                    { key: 'softwarecollections', name: 'Red Hat Software Collections', value: ['softwarecollections'] }
                                ]
                            },
                            { name: 'TOPIC', key: 'tag', items: [
                                    { key: 'dotnet', name: '.NET', value: ['dotnet', '.net', 'visual studio', 'c#'] },
                                    { key: 'containers', name: 'Containers', value: ['atomic', 'cdk', 'containers'] },
                                    { key: 'devops', name: 'DevOps', value: ['devops', 'CI', 'CD', 'Continuous Delivery'] },
                                    { key: 'enterprise-java', name: 'Enterprise Java', value: ['ActiveMQ', 'AMQP', 'apache camel', 'Arquillian', 'Camel', 'CDI', 'CEP', 'CXF', 'datagrid', 'devstudio', 'Drools', 'Eclipse', 'fabric8', 'Forge', 'fuse', 'Hawkular', 'Hawtio', 'Hibernate', 'Hibernate ORM', 'Infinispan', 'iPaas', 'java ee', 'JavaEE', 'JBDS', 'JBoss', 'JBoss BPM Suite', 'Red Hat Decision Manager', 'JBoss Data Grid', 'jboss eap', 'JBoss EAP', ''] },
                                    { key: 'iot', name: 'Internet of Things', value: ['iot', 'Internet of Things'] },
                                    { key: 'microservices', name: 'Microservices', value: ['microservices', ' WildFly Swarm'] },
                                    { key: 'mobile', name: 'Mobile', value: ['mobile', 'Red Hat Mobile', 'RHMAP', 'Cordova', 'FeedHenry'] },
                                    { key: 'web-and-api-development', name: 'Web and API Development', value: ['Web', 'API', 'HTML5', 'REST', 'Camel', 'Node.js', 'RESTEasy', 'JAX-RS', 'Tomcat', 'nginx', 'Rails', 'Drupal', 'PHP', 'Bottle', 'Flask', 'Laravel', 'Dancer', 'Zope', 'TurboGears', 'Sinatra', 'httpd', 'Passenger'] },
                                ]
                            }
                        ]
                    };
                    return _this;
                }
                Object.defineProperty(RHDPSearchApp.prototype, "name", {
                    get: function () {
                        return this._name;
                    },
                    set: function (val) {
                        if (this._name === val)
                            return;
                        this._name = val;
                        this.setAttribute('name', this.name);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchApp.prototype, "url", {
                    get: function () {
                        return this._url;
                    },
                    set: function (val) {
                        if (this._url === val)
                            return;
                        this._url = val;
                        this.setAttribute('url', this.url);
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchApp.prototype.connectedCallback = function () {
                    _super.prototype.render.call(this, this.template(this));
                    this.modal.setAttribute('type', 'modal');
                    this.modal.filters = this.filterObj;
                    top.document.body.appendChild(this.modal);
                    top.document.body.appendChild(this.urlEle);
                };
                Object.defineProperty(RHDPSearchApp, "observedAttributes", {
                    get: function () {
                        return ['url', 'name'];
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchApp.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                RHDPSearchApp.prototype.toggleModal = function (e) {
                    this.modal.toggle = e.detail.toggle;
                };
                RHDPSearchApp.prototype.updateSort = function (e) {
                };
                return RHDPSearchApp;
            }(pfelement_js_1.default));
            exports_1("default", RHDPSearchApp);
            customElements.define('rhdp-search-app', RHDPSearchApp);
        }
    };
});
