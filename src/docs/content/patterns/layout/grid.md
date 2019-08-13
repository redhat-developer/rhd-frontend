---
title: "Responsive Grid"
date: 2017-08-03T14:22:23-04:00
draft: false
tags: ["layout"]
---

{{< code >}}<section class="pfe-l-grid pfe-m-gutters">
    <div class="" style="padding: 1em; background-color:orange; height: 50px;">
        No Column Width
    </div>
</section>{{< /code >}}
{{< code >}}<section class="pfe-l-grid pfe-m-gutters">
    <div class="pfe-m-6-col pfe-m-startat-4-col" style="padding: 1em; background-color:orange; height: 50px;">
        Static Column Width: 6
    </div>
</section>{{< /code >}}
{{< code >}}<section class="pfe-l-grid pfe-m-gutters">
    <div class="pfe-m-10-col-on-lg pfe-m-startat-2-col-on-lg" style="padding: 1em; background-color:red; height: 50px;">
        Dynamic Column Width: 10
    </div>
</section>{{< /code >}}
{{< code >}}<section class="pfe-l-grid pfe-m-gutters">
    <div class="pfe-m-8-col-on-lg pfe-m-startat-3-col-on-lg" style="padding: 1em; background-color:green; height: 50px;">
        Dynamic Column Width: 8
    </div>
</section>{{< /code >}}
{{< code >}}<section class="pfe-l-grid pfe-m-gutters">
    <div class="pfe-m-6-col-on-lg pfe-m-startat-4-col-on-lg" style="padding: 1em; background-color:blue; height: 50px;">
        Dynamic Column Width: 6
    </div>
</section>{{< /code >}}
{{< code >}}<section class="pfe-l-grid pfe-m-gutters">
    <div class="pfe-l-grid pfe-m-gutters pfe-m-all-6-col" style="padding:var(--pfe-theme--container-spacer);">
        <div>
            <div style="background: #EEE;">
                <div style="padding:var(--pfe-theme--container-spacer);">No Column Width</div>
            </div>
        </div>
        <div>
            <div style="background: #EEE;">
                <div style="padding: 16px;">No Column Width</div>
            </div>
        </div>
        <div>
            <div style="background: #EEE;">
                <div style="padding: 16px;">No Column Width</div>
            </div>
        </div>
    </div>
</section>{{< /code >}}
{{< code >}}<section class="pfe-l-grid pfe-m-gutters">
    <div class="pfe-l-grid pfe-m-gutters pfe-m-all-4-col" style="background-color:orange;padding:var(--pfe-theme--container-spacer);">
        <div>
            <div style="background: #EEE;">
                <div style="padding: 16px;">No Column Width</div>
            </div>
        </div>
        <div>
            <div style="background: #EEE;">
                <div style="padding: 16px;">No Column Width</div>
            </div>
        </div>
        <div>
            <div style="background: #EEE;">
                <div style="padding: 16px;">No Column Width</div>
            </div>
        </div>
    </div>
</section>{{< /code >}}