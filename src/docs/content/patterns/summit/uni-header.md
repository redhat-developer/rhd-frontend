---
title: "Universal Header"
date: 2017-08-03T14:58:26-04:00
draft: true
tags: ["2019summit"]
weight: 1
scripts: [""]
---

{{< code >}}
<div class="rh-universal-header">
    <nav class="rh-nav-universal" aria-label="Red Hat Global Navigation">
        <a class="rh-logo-wrapper" href="https://www.redhat.com/" title="Red Hat Home page"><img class="rh-header-logo" alt="Red Hat Logo" src="/themes/custom/rhdp/images/branding/RHLogo_white.svg"></a>
        <ul class="rhd-menu rh-nav-universal-list">
            <li class="menu-item rh-nav-universal-link">
                <a href="https://access.redhat.com/" title="The Red Hat Customer Portal provides comprehensive documentation, tools, security updates, and knowledge to help customers succeed with Red Hat solutions.">Customer Portal</a>
            </li>
            <li class="menu-item rh-nav-universal-link">
                <a href="/" title="The Red Hat Developer program provides tools, technologies, and community to help developers solve problems, connect with colleagues, discover what’s next, and lead their projects forward." data-drupal-link-system-path="<front>" class="is-active">Developer</a>
            </li>
            <li class="menu-item rh-nav-universal-link">
                <a href="https://www.openshift.com/" title="Red Hat OpenShift, built on Docker and Kubernetes, helps you develop, deploy, and manage your containers.">OpenShift</a>
            </li>
            <li class="menu-item rh-nav-universal-link">
                <a href="https://openshift.io/" title="Red Hat OpenShift.io is an open online development environment for planning, creating and deploying hybrid cloud services.">OpenShift.io</a>
            </li>
            <li class="menu-item rh-nav-universal-link">
                <a href="https://www.redhat.com/en/partners" title="Connect with Red Hat: Work together to build ideal customer solutions and support the services you provide with our products.">Partners</a>
            </li>
            <li class="menu-item rh-nav-universal-link">
                <a href="https://www.redhat.com/en/store" title="The Red Hat Store lets you easily configure and buy select Red Hat products and services in our online store―without having to talk to anyone.">Store</a>
            </li>
        </ul>
        <ul class="rhd-menu rh-universal-login">
            <li class="login">
                <a><span class="icon"><i class="fal fa-angle-down"></i></span></a>
                <ul class="dropdwn-menu rh-user-menu">
                    <li class="logged-in dropdwn-item" style="display: none;">
                        <a class="account-info" href="#">Account Info</a>
                    </li>
                    <li class="logged-in dropdwn-item" style="display: none;">
                        <a class="logout" href="#">Log Out</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</div>
{{</ code >}}