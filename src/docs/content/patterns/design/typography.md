---
title: "Typography"
date: 2017-08-03T10:56:11-04:00
draft: true
tags: ["design"]
scripts: ["@patternfly/pfe-cta/pfe-cta.umd"]
---

<style>
  section {
    margin: 0 32px;
  }
  table {
    width: 100%;
    background-color: #fff;
  }
  table thead tr th {
    text-align: left;
  }
  tr {
    border-bottom: 1px solid #d7d7d7;
  }
  table tbody tr {
    background-color: #fff;
  }
  table thead tr th,
  table tbody tr td {
    padding: 16px 0 16px 16px;
  }
</style>

## Our font family
We use the open source Red Hat Text and Red Hat Display fonts.

## Heading XL (992px and above)

| Font family | Font size | Font weight | Line height |
| --- | --- | --- | --- |
| RedHatDisplay | 40px | 300 | 53 |

<blockquote><h1 style="font-family: var(--pfe-theme--font-family--heading); font-size: 40px; font-weight: 300;">This is heading XL (992px and above) for the developer site</h1></blockquote>

## Heading 1

| Font family | Font size | Font weight | Line height |
| --- | --- | --- | --- |
| RedHatDisplay | 32px | 400 | 42 |

<blockquote><span style="font-family: var(--pfe-theme--font-family--heading); font-size: 32px; font-weight: 400;">This is heading 1 for the developer site</span></blockquote>

## Heading 2

| Font family | Font size | Font weight | Line height |
| --- | --- | --- | --- |
| RedHatDisplay | 28px | 400 | 37 |

<blockquote><span style="font-family: var(--pfe-theme--font-family--heading); font-size: 28px; font-weight: 400;">This is heading 2 for the developer site</span></blockquote>

## Heading 3

| Font family | Font size | Font weight | Line height |
| --- | --- | --- | --- |
| RedHatDisplay | 24px | 400 | 31 |

<blockquote><span style="font-family: var(--pfe-theme--font-family--heading); font-size: 24px; font-weight: 400;">This is heading 3 for the developer site</span></blockquote>

## Heading 4

| Font family | Font size | Font weight | Line height |
| --- | --- | --- | --- |
| RedHatDisplay | 20px | 400 | 26 |

<blockquote><span style="font-family: var(--pfe-theme--font-family--heading); font-size: 20px; font-weight: 400;">This is heading 4 for the developer site</span></blockquote>

## Standard text / Link text / Line text + hover

| Font family | Font size | Font weight | Line height | Color | Text decoration |
| --- | --- | --- | --- | --- | --- |
| RedHatText | 16px | 400 | 24 | #333 | none |
| RedHatText | 16px | 400 | 24 | <span style="color: #0066CC">#0066cc</span> | none |
| RedHatText | 16px | 400 | 24 | <span style="color: #004080; text-decoration: underline;">#004080</span> | underline |

<blockquote>
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400;">This is standard text for the developer site</p>
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #0066CC">This is link text for the developer site</p>
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #004080; text-decoration: underline;">This is hovered link text for the developer site</p>
</blockquote>

# Light CTAs (light - pfe-theme)

| Font family | Font size | Font weight | Line height |  Color | Variation |
| --- | --- | --- | --- | --- | --- |
| RedHatDisplay | 16px | 700 | 23 | #151515 | base |
| RedHatDisplay | 16px | 700 | 23 | <span style="color: #0066CC">#0066cc</span> | hover |
| RedHatDisplay | 16px | 700 | 23 | <span style="color: #004080;">#004080</span> | dark |

<blockquote>
<p style="font-family: var(--pfe-theme--font-family--heading); font-size: 16px; font-weight: 700; display: flex; align-items: center;">This is a light CTA for the developer site <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" style="width: 14px; margin-left: 6px;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>
<p style="font-family: var(--pfe-theme--font-family--heading); font-size: 16px; font-weight: 700; color: #0066CC; display: flex; align-items: center;">This is a light CTA for the developer site<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" style="width: 14px; margin-left: 6px;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>
<p style="font-family: var(--pfe-theme--font-family--heading); font-size: 16px; font-weight: 700; color: #004080; display: flex; align-items: center;">This is a light CTA for the developer site<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" style="width: 14px; margin-left: 6px;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>
</blockquote>

<div style="margin: 32px 0;">
  <hr>
</div>

# Dark typography - on dark background (pfe-theme)

## Heading XL (992px and above)

| Font family | Font size | Font weight | Line height |
| --- | --- | --- | --- |
| RedHatDisplay | 40px | 300 | 53 |

<blockquote>
  <div style="background-color: #000; padding: 16px;">
    <span style="font-family: var(--pfe-theme--font-family--heading); font-size: 40px; font-weight: 300; color: #fff;">This is heading XL (992px and above) for the developer site</span>
  </div>
</blockquote>

## Heading 1

| Font family | Font size | Font weight | Line height |
| --- | --- | --- | --- |
| RedHatDisplay | 32px | 400 | 42 |

<blockquote>
  <div style="background-color: #000; padding: 16px;">
    <span style="font-family: var(--pfe-theme--font-family--heading); font-size: 32px; font-weight: 400; color: #fff;">This is heading 1 for the developer site</span>
  </div>
</blockquote>

## Heading 2

| Font family | Font size | Font weight | Line height |
| --- | --- | --- | --- |
| RedHatDisplay | 28px | 400 | 37 |

<blockquote>
  <div style="background-color: #000; padding: 16px;">
    <span style="font-family: var(--pfe-theme--font-family--heading); font-size: 28px; font-weight: 400; color: #fff;">This is heading 2 for the developer site</span>
  </div>
</blockquote>

## Heading 3

| Font family | Font size | Font weight | Line height |
| --- | --- | --- | --- |
| RedHatDisplay | 24px | 400 | 31 |

<blockquote>
  <div style="background-color: #000; padding: 16px;">
    <span style="font-family: var(--pfe-theme--font-family--heading); font-size: 24px; font-weight: 400; color: #fff;">This is heading 3 for the developer site</span>
  </div>
</blockquote>

## Heading 4

| Font family | Font size | Font weight | Line height |
| --- | --- | --- | --- |
| RedHatDisplay | 20px | 400 | 26 |

<blockquote>
  <div style="background-color: #000; padding: 16px;">
    <span style="font-family: var(--pfe-theme--font-family--heading); font-size: 20px; font-weight: 400; color: #fff;">This is heading 4 for the developer site</span>
  </div>
</blockquote>

## Standard text / Link text / Line text + hover

| Font family | Font size | Font weight | Line height | Color | Text decoration |
| --- | --- | --- | --- | --- | --- |
| RedHatText | 16px | 400 | 24 | #fff | none |
| RedHatText | 16px | 400 | 24 | <span style="color: #0066CC">#0066cc</span> | none |
| RedHatText | 16px | 400 | 24 | <span style="color: #004080; text-decoration: underline;">#004080</span> | underline |
| RedHatText | 16px | 400 | 24 | #fff | none |
| RedHatText | 16px | 400 | 24 | <span style="color: #d2d2d2; text-decoration: underline;">#d2d2d2</span> | underline |

<blockquote>
<div style="background-color: #000; padding: 16px;">
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #fff;">This is standard text for the developer site</p>
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #73bcf7">This is link text for the developer site</p>
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #2b9af3; text-decoration: underline;">This is hovered link text for the developer site</p>
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #fff;">This is standard text for the developer site</p>
  <p style="font-family: var(--pfe-theme--font-family); font-size: 16px; font-weight: 400; color: #d2d2d2; text-decoration: underline;">This is hovered link text for the developer site</p>
</div>
</blockquote>

<div style="margin: 32px 0;">
  <hr>
</div>

# Light CTAs (dark - pfe-theme)

| Font family | Font size | Font weight | Line height | Color | Variation |
| --- | --- | --- | --- | --- | --- |
| RedHatDisplay | 16px | 700 | 23 | #fff | base |
| RedHatDisplay | 16px | 700 | 23 | <span style="color: #d2d2d2">#d2d2d2</span> | hover |
| RedHatDisplay | 16px | 700 | 23 | <span style="color: #73bcf7;">#73bcf7</span> | link |
| RedHatDisplay | 16px | 700 | 23 | <span style="color: #2b9af3">#2b9af3</span> | hover |

<blockquote>
<div style="background-color: #000; padding: 16px;">
  <p style="font-family: var(--pfe-theme--font-family--heading); font-size: 16px; font-weight: 700; display: flex; align-items: center; color: #fff;">This is a light CTA for the developer site <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" style="width: 14px; margin-left: 6px;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>
  <p style="font-family: var(--pfe-theme--font-family--heading); font-size: 16px; font-weight: 700; color: #d2d2d2; display: flex; align-items: center;">This is a light CTA for the developer site<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" style="width: 14px; margin-left: 6px;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>
  <p style="font-family: var(--pfe-theme--font-family--heading); font-size: 16px; font-weight: 700; color: #73bcf7; display: flex; align-items: center;">This is a light CTA for the developer site<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" style="width: 14px; margin-left: 6px;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>
  <p style="font-family: var(--pfe-theme--font-family--heading); font-size: 16px; font-weight: 700; color: #2b9af3; display: flex; align-items: center;">This is a light CTA for the developer site<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" style="width: 14px; margin-left: 6px;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></p>
</div>
</blockquote>
