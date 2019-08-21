---
title: "Buttons and CTAs"
date: 2019-08-14T11:19:07-04:00
draft: false
type: component
tags: ["component"]
weight: 99
description: ""
component: "cta"
scripts: ["@patternfly/pfe-cta/pfe-cta.umd"]
---

## Button variations

<div class="pfe-l-grid pfe-m-gutters">
  <div class="pfe-l-grid__item pfe-m-startat-2-col-on-md">
  <h3>Regular button styles
  {{< code >}}
  <button class="pf-c-button pf-m-primary">Primary</button>
  <button class="pf-c-button pf-m-secondary">Secondary</button>
  <button class="pf-c-button pf-m-tertiary">Tertiary</button>
  <button class="pf-c-button pf-m-danger">Danger</button>
  <button class="pf-c-button pf-m-link">
    Link button
    <span class="pf-c-button__icon"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
  </button>
  {{< /code >}}
  </div>
  <div class="pfe-l-grid__item pfe-m-startat-2-col-on-md">
    <h3>Large button styles</h3>
    {{< code >}}
    <pfe-cta pfe-priority="primary" pfe-color="base">CTA / Primary / base</pfe-cta>
    <pfe-cta pfe-priority="secondary" pfe-color="base">CTA / Secondary / base</pfe-cta>
    {{< /code >}}
  </div>
</div>


## Button states
<div class="pfe-l-grid pfe-m-gutters">
  <div class="pfe-l-grid__item pfe-m-startat-2-col-on-md">
    <h3>Primary button styles</h3>
    {{< code >}}
    <button class="pf-c-button pf-m-primary" type="button">Primary</button>
    <button class="pf-c-button pf-m-primary pf-m-active" type="button">Primary active</button>
    <button class="pf-c-button pf-m-primary pf-m-focus" type="button">Primary focus</button>
    <button class="pf-c-button pf-m-primary pf-m-disabled" type="button">Primary disabled</button>
    {{< /code >}}
  </div>
  <div class="pfe-l-grid__item pfe-m-startat-2-col-on-md">
    <h3>Secondary button styles</h3>
    {{< code >}}
    <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
    <button class="pf-c-button pf-m-secondary pf-m-active" type="button">Secondary active</button>
    <button class="pf-c-button pf-m-secondary pf-m-focus" type="button">Secondary focus</button>
    <button class="pf-c-button pf-m-secondary pf-m-disabled" type="button">Secondary disabled</button>
    {{< /code >}}
  </div>
  <div class="pfe-l-grid__item pfe-m-startat-2-col-on-md">
    <h3>Tertiary button styles</h3>
    {{< code >}}
    <button class="pf-c-button pf-m-tertiary" type="button">Tertiary</button>
    <button class="pf-c-button pf-m-tertiary pf-m-active" type="button">Tertiary active</button>
    <button class="pf-c-button pf-m-tertiary pf-m-focus" type="button">Tertiary focus</button>
    <button class="pf-c-button pf-m-tertiary pf-m-disabled" type="button">Tertiary disabled</button>
    {{< /code >}}
  </div>
  <div class="pfe-l-grid__item pfe-m-startat-2-col-on-md">
    <h3>Danger button styles</h3>
    {{< code >}}
    <button class="pf-c-button pf-m-danger" type="button">Danger</button>
    <button class="pf-c-button pf-m-danger pf-m-active" type="button">Danger active</button>
    <button class="pf-c-button pf-m-danger pf-m-focus" type="button">Danger focus</button>
    <button class="pf-c-button pf-m-danger pf-m-disabled" type="button">Danger disabled</button>
    {{< /code >}}
  </div>
  <div class="pfe-l-grid__item pfe-m-startat-2-col-on-md">
    <h3>Link button styles</h3>
    {{< code >}}
    <button class="pf-c-button pf-m-link" type="button">
      Link button
      <span class="pf-c-button__icon"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
    </button>
    <button class="pf-c-button pf-m-link pf-m-active" type="button">
      Link button
      <span class="pf-c-button__icon"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
    </button>
    <button class="pf-c-button pf-m-link pf-m-focus" type="button">
      Link button
      <span class="pf-c-button__icon"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
    </button>
    <button class="pf-c-button pf-m-link pf-m-disabled" type="button">
      Link button
      <span class="pf-c-button__icon"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
    </button>
    {{< /code >}}
  </div>
  <div class="pfe-l-grid__item pfe-m-startat-2-col-on-md">
    <h3>Large button styles</h3>
    {{< code >}}
    <pfe-cta pfe-priority="primary" pfe-color="base">CTA / Primary / base</pfe-cta>
    <pfe-cta pfe-priority="primary" pfe-color="base">CTA / Primary / active</pfe-cta>
    <pfe-cta pfe-priority="primary" pfe-color="base">CTA / Primary / focus</pfe-cta>
    <pfe-cta pfe-priority="primary" pfe-color="base">CTA / Primary / disabled</pfe-cta>
    {{< /code >}}
  </div>
  <div class="pfe-l-grid__item pfe-m-startat-2-col-on-md">
    {{< code >}}
    <pfe-cta pfe-priority="secondary" pfe-color="base">CTA / Secondary / base</pfe-cta>
    <pfe-cta pfe-priority="secondary" pfe-color="base">CTA / Secondary / active</pfe-cta>
    <pfe-cta pfe-priority="secondary" pfe-color="base">CTA / Secondary / focus</pfe-cta>
    <pfe-cta pfe-priority="secondary" pfe-color="base">CTA / Secondary / disabled</pfe-cta>
    {{< /code >}}
  </div>
</div>
