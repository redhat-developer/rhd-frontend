---
title: "Community"
date: 2018-04-17T14:39:40-04:00
description: ""
draft: true
tags: ["component"]
weight: 7
scripts: ["js/@rhd/rhdp-projects/rhdp-project-filter-box.js","js/@rhd/rhdp-projects/rhdp-project-item.js","js/@rhd/rhdp-projects/rhdp-project-query.js","js/@rhd/rhdp-projects/rhdp-project-url.js",
"js/@rhd/rhdp-projects/rhdp-projects.js"]

---



{{< code >}}<div data-product-id="fuse">
<rhdp-projects dcp-url="https://dcp2.jboss.org/v2/rest/search/suggest_project_name_ngram_more_fields?sort=sys_title&amp;query=" upstream-product-id="fuse">
    <rhdp-project-query></rhdp-project-query>
    <rhdp-project-url></rhdp-project-url>
</rhdp-projects>
</div>{{</ code >}}