---
title: "Search"
date: 2017-08-23T22:25:45-04:00
description: ""
draft: true
tags: ["component"]
weight: 1
scripts: ["js/@patternfly/pfelement/pfelement.js","js/@fortawesome/fontawesome-svg-core/index.es.js","js/@fortawesome/pro-solid-svg-icons/index.es.js",
"js/@rhd/dp-search/dp-search-app.js","js/@rhd/dp-search/dp-search-box.js","js/@rhd/dp-search/dp-search-filter-group.js",
"js/@rhd/dp-search/dp-search-filter-item.js","js/@rhd/dp-search/dp-search-filters.js","js/@rhd/dp-search/dp-search-onebox.js",
"js/@rhd/dp-search/dp-search-query.js","js/@rhd/dp-search/dp-search-result-count.js","js/@rhd/dp-search/dp-search-result.js","js/@rhd/dp-search/dp-search-results.js", "js/@rhd/dp-search/dp-search-sort-page.js","js/@rhd/dp-search/dp-search-url.js",
"js/@rhd/dp-search/dp-search-modal-filters.js","js/@rhd/dp-search/dp-search-active-filters.js",
"js/@rhd/dp-search/dp-search-filter-active-item.js", "js/@patternfly/pfe-datetime/pfe-datetime.min.js"]
---

{{< code >}}<dp-search-app url="https://dcp2.jboss.org/v2/rest/search/developer_materials">
<dp-search-box slot="query"></dp-search-box>
<dp-search-filters title="Filter By" slot="filters">
    <dp-search-filter-group name="CONTENT TYPE" name="type">
        <dp-search-filter-item group="type" key="webpage" value="webpage"  name="Web Page">Web Page</dp-search-filter-item>
        <dp-search-filter-item group="type" key="product" value="product"  name="Product">Product</dp-search-filter-item>
        <dp-search-filter-item group="type" key="learning_path" value="learning_path" name="Learning Path">Learning Path</dp-search-filter-item>
        <dp-search-filter-item group="type" key="article" value="article"  name="Article">Article</dp-search-filter-item>
        <dp-search-filter-item group="type" key="book" value="book" name="Book">Book</dp-search-filter-item>
        <dp-search-filter-item group="type" key="topic" value="topic" name="Topic">Topic</dp-search-filter-item>
        <dp-search-filter-item group="type" key="video" value="video" name="Video">Video</dp-search-filter-item>
        <dp-search-filter-item group="type" key="apidocs" value="rht_website,rht_apidocs" name="APIs and Docs">APIs and Docs</dp-search-filter-item>
    </dp-search-filter-group>
    <dp-search-filter-group name="PRODUCT" name="project">
        <dp-search-filter-item name=".NET Runtime for Red Hat Enterprise Linux" value="dotnet" class="filter-item-dotnet" key="dotnet" group="project">.NET Runtime for Red Hat Enterprise Linux</dp-search-filter-item>
    </dp-search-filter-group>
    <dp-search-filter-group name="TOPIC" key="tag"></dp-search-filter-group>
</dp-search-filters>
<dp-search-active-filters title="Active Filters:">
    <dp-search-filter-active-item group="type" key="webpage" value="webpage"  name="Web Page">Web Page</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="product" value="product"  name="Product">Product</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="learning_path" value="learning_path" name="Learning Path">Learning Path</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="article" value="article"  name="Article">Article</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="book" value="book" name="Book">Book</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="topic" value="topic" name="Topic">Topic</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="video" value="video" name="Video">Video</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="apidocs" value="rht_website,rht_apidocs" name="APIs and Docs">APIs and Docs</dp-search-filter-active-item>
</dp-search-active-filters>
<dp-search-result-count></dp-search-result-count>
<dp-search-sort-page></dp-search-sort-page>
<dp-search-onebox url="../../json/onebox.json"></dp-search-onebox>
<dp-search-results></dp-search-results>
<dp-search-query url="https://api.developers.stage.redhat.com/search/"></dp-search-query>
</dp-search-app>
<a href="#top" id="scroll-to-top"></a>{{< /code >}}

<!--
<dp-search-app url="https://dcp2.jboss.org/v2/rest/search/developer_materials">
<dp-search-box slot="query"></dp-search-box>
<dp-search-filters title="Filter By" slot="filters">
    <dp-search-filter-group name="CONTENT TYPE" name="type">
        <dp-search-filter-item group="type" key="webpage" value="webpage"  name="Web Page">Web Page</dp-search-filter-item>
        <dp-search-filter-item group="type" key="product" value="product"  name="Product">Product</dp-search-filter-item>
        <dp-search-filter-item group="type" key="learning_path" value="learning_path" name="Learning Path">Learning Path</dp-search-filter-item>
        <dp-search-filter-item group="type" key="article" value="article"  name="Article">Article</dp-search-filter-item>
        <dp-search-filter-item group="type" key="book" value="book" name="Book">Book</dp-search-filter-item>
        <dp-search-filter-item group="type" key="topic" value="topic" name="Topic">Topic</dp-search-filter-item>
        <dp-search-filter-item group="type" key="video" value="video" name="Video">Video</dp-search-filter-item>
        <dp-search-filter-item group="type" key="apidocs" value="rht_website,rht_apidocs" name="APIs and Docs">APIs and Docs</dp-search-filter-item>
    </dp-search-filter-group>
    <dp-search-filter-group name="PRODUCT" name="project">
        <dp-search-filter-item name=".NET Runtime for Red Hat Enterprise Linux" value="dotnet" class="filter-item-dotnet" key="dotnet" group="project">.NET Runtime for Red Hat Enterprise Linux</dp-search-filter-item>
    </dp-search-filter-group>
    <dp-search-filter-group name="TOPIC" key="tag"></dp-search-filter-group>
</dp-search-filters>
<dp-search-active-filters title="Active Filters:">
    <dp-search-filter-active-item group="type" key="webpage" value="webpage"  name="Web Page">Web Page</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="product" value="product"  name="Product">Product</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="learning_path" value="learning_path" name="Learning Path">Learning Path</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="article" value="article"  name="Article">Article</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="book" value="book" name="Book">Book</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="topic" value="topic" name="Topic">Topic</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="video" value="video" name="Video">Video</dp-search-filter-active-item>
        <dp-search-filter-active-item group="type" key="apidocs" value="rht_website,rht_apidocs" name="APIs and Docs">APIs and Docs</dp-search-filter-active-item>
</dp-search-active-filters>
<dp-search-result-count></dp-search-result-count>
<dp-search-sort-page></dp-search-sort-page>
<dp-search-onebox url="../../json/onebox.json"></dp-search-onebox>
<dp-search-results></dp-search-results>
<dp-search-query url="https://api.developers.stage.redhat.com/search/"></dp-search-query>
</dp-search-app>
<a href="#top" id="scroll-to-top"></a>
<script>
var inject = document.createElement('script')
inject.innerText = "System.import('/themes/custom/rhdp/js/@patternfly/pfelement/pfelement.js');\n"+
"System.import('/themes/custom/rhdp/js/@fortawesome/fontawesome-svg-core/index.es.js');\n"+
"System.import('/themes/custom/rhdp/js/@fortawesome/pro-solid-svg-icons/index.es.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-app.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-box.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-filter-group.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-filter-item.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-filters.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-onebox.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-query.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-result-count.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-result.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-results.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-sort-page.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-url.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-modal-filters.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-active-filters.js');\n"+
"System.import('/themes/custom/rhdp/js/@rhd/dp-search/dp-search-filter-active-item.js');\n"+
"System.import('/themes/custom/rhdp/js/@patternfly/pfe-datetime/pfe-datetime.min.js');"
setTimeout(function() {document.body.appendChild(inject); }, 5000);
</script>
-->