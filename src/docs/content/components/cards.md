---
title: "Card"
date: 2018-07-22T11:15:00-04:00
description: ""
draft: true
tags: ["component"]
weight: 4
scripts: ["@patternfly/pfe-cta/pfe-cta.umd", "@patternfly/pfe-card/pfe-card.umd"]
---

__Articles and Blogs__
{{< code >}}
  <div class="pfe-l-grid pfe-m-gutters">
    <div class="pfe-m-2-col pfe-m-startat-2-col-on-md">
      <pfe-card color="lightest" size-"small" class="rhd-c-card">
        <div class="rhd-c-card__tag">
          <span class="fa fa-newspaper"></span>
          OPINION
        </div>
        <img src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=altitude-clouds-cold-417173.jpg&fm=jpg" class="rhd-c-card__image"/>
        <h3 class="rhd-c-card__title"><a href="#">Title of the article that can go to two lines only and then must truncate after it passes two lines.</a></h3>
        <p class="rhd-c-card__body rhd-m-text-truncate-3">This is the article description that can go to three lines and will be followed by a footer. Must truncate after 3 lines.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            <a href="#" class="rhd-m-link">Author Name</a>
          </div>
          <div>
            <span class="fa fa-comment"></span> 2
          </div>
        </div>
      </pfe-card>
    </div>
    <div class="pfe-m-2-col">
      <pfe-card color="lightest" size-"small" class="rhd-c-card">
        <div class="rhd-c-card__tag">
          <span class="fa fa-newspaper"></span>
          QUICKSTART
        </div>
        <h3 class="rhd-c-card__title rhd-m-card-title__no-image"><a href="#">Title of the article</a></h3>
        <p class="rhd-c-card__body rhd-m-text-truncate-3">This is the article description that can go to three lines and will be followed by a footer. Must truncate after 3 lines.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            <a href="#" class="rhd-m-link">Author Name</a>
          </div>
          <div>
            <span class="fa fa-comment"></span> 2
          </div>
        </div>
      </pfe-card>
    </div>
    <div class="pfe-m-2-col">
      <pfe-card color="lightest" size-"small" class="rhd-c-card">
        <h3 class="rhd-c-card__title"><a href="#">Title of the article</a></h3>
        <p class="rhd-c-card__body rhd-m-text-truncate-3">This is the article description that can go to three lines and will be followed by a footer. Must truncate after 3 lines.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            <a href="#" class="rhd-m-link">Author Name</a>
          </div>
          <div>
            <span class="fa fa-comment"></span> 2
          </div>
        </div>
      </pfe-card>
    </div>
  </div>
  <div class="pfe-l-grid pfe-m-gutters" style="margin-top: 40px;">
    <div class="pfe-m-2-col pfe-m-startat-2-col-on-md">
      <div class="rhd-l-grid__list">
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Title of the article</a></h3>
          <p class="rhd-c-card__body rhd-m-text-truncate-3">This is the article description that can go to three lines and will be followed by a footer. <div class="rhd-m-list__comment"><span class="fas fa-comment"></span> 2</div></p>
        </pfe-card>
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Title of the article</a></h3>
          <p class="rhd-c-card__body rhd-m-text-truncate-3">This is the article description that can go to three lines and will be followed by a footer. <div class="rhd-m-list__comment"><span class="fas fa-comment"></span> 2</div></p>
        </pfe-card>
      </div>
    </div>
    <div class="pfe-m-2-col">
      <div class="rhd-l-grid__list">
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Title of the article that can be two li...<a/> <div class="rhd-m-list__comment"><span class="fas fa-comment"></span> 2</div></h3>
        </pfe-card>
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Title of the article</a> <div class="rhd-m-list__comment"><span class="fas fa-comment"></span> 2</div></h3>
        </pfe-card>
      </div>
    </div>
  </div>
{{</ code >}}

__Series__

{{< code >}}
  <div class="pfe-l-grid pfe-m-gutters">
    <div class="pfe-m-2-col pfe-m-startat-2-col-on-md">
      <pfe-card color="lightest" size-"small" class="rhd-c-card">
        <div class="rhd-c-card__tag">
          <span class="fa fa-newspaper"></span>
          SERIES
        </div>
        <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?cs=srgb&dl=adventure-calm-clouds-414171.jpg&fm=jpg" class="rhd-c-card__image"/>
        <h3 class="rhd-c-card__title"><a href="#">Series title that can go to two lines only and then must truncate after it passes two lines.</a></h3>
        <div class="rhd-c-card__subtitle">3 articles</div>
        <p class="rhd-c-card__body rhd-m-text-truncate-3">This is the series description that can go to three lines and will be followed by a footer. Must truncate after 3 lines.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            <a href="#" class="rhd-m-link">Author Name</a>
          </div>
        </div>
      </pfe-card>
    </div>
    <div class="pfe-m-2-col">
      <pfe-card color="lightest" size-"small" class="rhd-c-card">
        <div class="rhd-c-card__tag">
          <span class="fa fa-newspaper"></span>
          SERIES
        </div>
        <h3 class="rhd-c-card__title rhd-m-card-title__no-image"><a href="#">Series title</a></h3>
        <div class="rhd-c-card__subtitle">3 articles</div>
        <p class="rhd-c-card__body rhd-m-text-truncate-3">This is the series description that can go to three lines and will be followed by a footer. Must truncate after 3 lines.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            <a href="#" class="rhd-m-link">Author Name</a>
          </div>
        </div>
      </pfe-card>
    </div>
    <div class="pfe-m-2-col">
      <pfe-card color="lightest" size-"small" class="rhd-c-card">
        <h3 class="rhd-c-card__title"><a href="#">Series title</a></h3>
        <div class="rhd-c-card__subtitle">3 articles</div>
        <p class="rhd-c-card__body rhd-m-text-truncate-3">This is the series description that can go to three lines and will be followed by a footer. Must truncate after 3 lines.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            <a href="#" class="rhd-m-link">Author Name</a>
          </div>
        </div>
      </pfe-card>
    </div>
  </div>
  <div class="pfe-l-grid pfe-m-gutters" style="margin-top: 40px;">
    <div class="pfe-m-2-col pfe-m-startat-2-col-on-md">
      <div class="rhd-l-grid__list">
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Series title</a></h3>
          <p class="rhd-c-card__body rhd-m-text-truncate-3">This is the series description that can go to three lines and will be followed by a footer. <div class="rhd-m-list__comment"><span class="fas fa-comment"></span> 2</div></p>
        </pfe-card>
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Series title</a></h3>
          <p class="rhd-c-card__body rhd-m-text-truncate-3">This is the series description that can go to three lines and will be followed by a footer. <div class="rhd-m-list__comment"><span class="fas fa-comment"></span> 2</div></p>
        </pfe-card>
      </div>
    </div>
    <div class="pfe-m-2-col">
      <div class="rhd-l-grid__list">
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Title of the series that can be two li...</a> <div class="rhd-m-list__comment"><span class="fas fa-comment"></span> 2</div></h3>
        </pfe-card>
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Title of the series</a> <div class="rhd-m-list__comment"><span class="fas fa-comment"></span> 2</div></h3>
        </pfe-card>
      </div>
    </div>
  </div>
  <div class="pfe-l-grid pfe-m-gutters" style="margin-top: 40px;">
    <div class="pfe-m-2-col pfe-m-startat-2-col-on-md">
      <pfe-card color="lightest" size-"small" class="rhd-c-card">
        <div class="rhd-c-card__tag">
          <span class="fa fa-newspaper"></span>
          MORE IN THIS SERIES
        </div>
        <img src="https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?cs=srgb&dl=adventure-alpine-alps-714258.jpg&fm=jpg" class="rhd-c-card__image"/>
        <h3 class="rhd-c-card__title"><a href="#">This is the article title</a></h3>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name
          </div>
        </div>
        <hr>
        <h3 class="rhd-c-card__title"><a href="#">This is the article title</a></h3>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name
          </div>
        </div>
        <hr>
        <h3 class="rhd-c-card__title"><a href="#">This is the article title</a></h3>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--author">
            Author Name
          </div>
        </div>
      </pfe-card>
    </div>
    <div class="pfe-m-2-col">
      <pfe-card color="lightest" size-"small" class="rhd-c-card">
        <div class="rhd-c-card__tag">
          <span class="fa fa-newspaper"></span>
          MORE IN THIS SERIES
        </div>
        <img src="https://images.pexels.com/photos/462149/pexels-photo-462149.jpeg?cs=srgb&dl=alpine-clouds-daylight-462149.jpg&fm=jpg" class="rhd-c-card__image"/>
        <div class="pf-u-display-flex pf-u-justify-content-center">
          <div class="rhd-c-card__footer--author">
            Author Name
          </div>
        </div>
        <h3 class="rhd-c-card__title"><a href="#">This is the article title</a></h3>
        <hr>
        <h3 class="rhd-c-card__title"><a href="#">This is the article title</a></h3>
        <hr>
        <h3 class="rhd-c-card__title"><a href="#">This is the article title</a></h3>
      </pfe-card>
    </div>
  </div>
{{</ code >}}

## __Products__

{{< code >}}
  // First three cards
  <div class="pfe-l-grid pfe-m-gutters">
    <div class="pfe-m-2-col pfe-m-startat-2-col-on-md">
      <pfe-card color="lightest" size-"small" class="rhd-c-card">
        <img src="https://developers.redhat.com/sites/default/files/styles/teaser/public/externals/fc954fdb2506fde810a74701776127e6.png?itok=y5At3nm0" class="rhd-c-card__image"/>
        <p class="rhd-c-card__body">A stable, proven foundation that’s versatile enough for rolling out new applications, virtualizing environments, and creating a secure hybrid cloud.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Download <span class="fa fa-arrow-right"></span></a>
          </div>
        </div>
      </pfe-card>
    </div>
    <div class="pfe-m-2-col">
      <pfe-card color="lightest" size-"small" class="rhd-c-card">
        <div class="rhd-c-card__tag">
          <span class="fa fa-newspaper"></span>
          TRY IT
        </div>
        <h3 class="rhd-c-card__title rhd-m-card-title__no-image">Red Hat Enterprise Linux</h3>
        <p class="rhd-c-card__body">A stable, proven foundation that’s versatile enough for rolling out new applications, virtualizing environments, and creating a secure hybrid cloud.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Download <span class="fa fa-arrow-right"></span></a>
          </div>
        </div>
      </pfe-card>
    </div>
    <div class="pfe-m-2-col">
      <pfe-card color="lightest" size-"small" class="rhd-c-card">
        <h3 class="rhd-c-card__title">Red Hat Enterprise Linux</h3>
        <p class="rhd-c-card__body">A stable, proven foundation that’s versatile enough for rolling out new applications, virtualizing environments, and creating a secure hybrid cloud.</p>
        <div class="rhd-c-card__footer">
          <div class="rhd-c-card__footer--download">
            <a href="#" class="rhd-m-link">Download <span class="fa fa-arrow-right"></span></a>
          </div>
        </div>
      </pfe-card>
    </div>
  </div>
  // Cards w/o borders
  <div class="pfe-l-grid pfe-m-gutters" style="margin-top: 40px;">
    <div class="pfe-m-2-col pfe-m-startat-2-col-on-md">
      <div class="rhd-l-grid__list">
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Red Hat Enterprise Linux</a></h3>
          <p class="rhd-c-card__body">A stable, proven foundation that’s versatile enough for rolling out new applications, virtualizing environments, and creating a secure hybrid cloud.</p>
          <div class="rhd-c-card__footer">
            <div class="rhd-c-card__footer--download">
              <a href="#" class="rhd-m-link">Download <span class="fa fa-arrow-right"></span></a>
            </div>
          </div>
        </pfe-card>
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Red Hat Enterprise Linux</a></h3>
          <p class="rhd-c-card__body">A stable, proven foundation that’s versatile enough for rolling out new applications, virtualizing environments, and creating a secure hybrid cloud.</p>
          <div class="rhd-c-card__footer">
            <div class="rhd-c-card__footer--download">
              <a href="#" class="rhd-m-link">Download <span class="fa fa-arrow-right"></span></a>
            </div>
          </div>
        </pfe-card>
      </div>
    </div>
    <div class="pfe-m-2-col">
      <div class="rhd-l-grid__list">
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Red Hat Enterprise Linux</a></h3>
        </pfe-card>
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Red Hat Enterprise Linux</a></h3>
        </pfe-card>
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Red Hat Enterprise Linux</a></h3>
        </pfe-card>
        <pfe-card color="lightest" size-"small" class="rhd-c-card rhd-m-card__no-border">
          <h3 class="rhd-c-card__title"><a href="#">Red Hat Enterprise Linux</a></h3>
        </pfe-card>
      </div>
    </div>
  </div>
{{</ code >}}

__Katacoda Courses__

{{< code >}}
{{</ code >}}

__Katacoda Lessons__

{{< code >}}
{{</ code >}}
