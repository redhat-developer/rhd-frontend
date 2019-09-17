---
title: "Responsive Grid"
date: 2017-08-03T14:22:23-04:00
draft: false
tags: ["layout"]
---

{{< code >}}<section class="pf-l-grid pf-m-gutter">
    <div class="" style="padding: 1em; background-color:orange; height: 50px;">
        No Column Width
    </div>
</section>{{< /code >}}
{{< code >}}<section class="pf-l-grid pf-m-gutter">
    <div class="pf-m-6-col pf-m-offset-6-col" style="padding: 1em; background-color:orange; height: 50px;">
        Static Column Width: 6
    </div>
</section>{{< /code >}}
{{< code >}}<section class="pf-l-grid pf-m-gutter">
    <div class="pf-m-10-col-on-lg pf-m-offset-2-col-on-lg" style="padding: 1em; background-color:red; height: 50px;">
        Dynamic Column Width: 10
    </div>
</section>{{< /code >}}
{{< code >}}<section class="pf-l-grid pf-m-gutter">
    <div class="pf-m-8-col-on-lg pf-m-offset-4-col-on-lg" style="padding: 1em; background-color:green; height: 50px;">
        Dynamic Column Width: 8
    </div>
</section>{{< /code >}}
{{< code >}}<section class="pf-l-grid pf-m-gutter">
    <div class="pf-m-6-col-on-lg pf-m-offset-5-col-on-lg" style="padding: 1em; background-color:blue; height: 50px;">
        Dynamic Column Width: 6
    </div>
</section>{{< /code >}}
{{< code >}}<section class="pf-l-grid pf-m-gutter">
    <div class="pf-l-grid pf-m-gutter pf-m-all-6-col" style="padding:var(--pf-theme--container-spacer);">
        <div>
            <div style="background: #EEE;">
                <div style="padding:var(--pf-theme--container-spacer);">No Column Width</div>
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
{{< code >}}<section class="pf-l-grid pf-m-gutter">
    <div class="pf-l-grid pf-m-gutter pf-m-all-4-col" style="background-color:orange;padding:var(--pf-theme--container-spacer);">
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
