---
title: "RHDP Downloads Component"
date: 2018-04-19T13:22:06-04:00
description: ""
draft: true
tags: ["component"]
weight: 6
scripts: ["js/@rhd/rhdp-downloads/rhdp-downloads-all-item.js","js/@rhd/rhdp-downloads/rhdp-downloads-all.js",
"js/@rhd/rhdp-downloads/rhdp-downloads-app.js","js/@rhd/rhdp-downloads/rhdp-downloads-popular-product.js",
"js/@rhd/rhdp-downloads/rhdp-downloads-popular-products.js","js/@rhd/rhdp-downloads/rhdp-downloads-products.js",
"js/@rhd/rhdp-os-download.js"]
---
{{< code >}}<rhdp-os-download product-code="rhel" download-url="https://developers.redhat.com/download-manager/content/origin/files/sha256/60/60a0be5aeed1f08f2bb7599a578c89ec134b4016cd62a8604b29f15d543a469c/rhel-server-7.6-x86_64-dvd.iso" name="Red Hat Enterprise Linux" version="7.6.0" platform-type="RHEL"></rhdp-os-download>{{</ code >}}

{{< code >}}<rhdp-downloads-app url="https://developers.redhat.com/download-manager/rest/available/rhel,eap,devstudio,fuse,datagrid,eap,webserver,cdk,devsuite,amq,brms,bpmsuite,datavirt,mobileplatform,openshift,openjdk,dotnet,migrationtoolkit?nv=1"></rhdp-downloads>{{</ code >}}