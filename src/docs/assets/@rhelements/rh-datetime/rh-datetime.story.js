System.register(["@storybook/polymer", "./rh-datetime"], function (exports_1, context_1) {
    "use strict";
    var polymer_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (polymer_1_1) {
                polymer_1 = polymer_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            polymer_1.storiesOf("Datetime", module).add("rh-datetime", function () {
                var now = new Date();
                var realtime = now;
                var yearsago = new Date(new Date().setFullYear(new Date().getFullYear() - 10));
                var yearago = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
                var hoursago = new Date(new Date().setHours(new Date().getHours() - 2));
                var minutesago = new Date(new Date().setMinutes(new Date().getMinutes() - 10));
                var minutesuntil = new Date(new Date().setMinutes(new Date().getMinutes() + 22));
                var hoursuntil = new Date(new Date().setHours(new Date().getHours() + 13));
                var yearuntil = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
                var yearsuntil = new Date(new Date().setFullYear(new Date().getFullYear() + 10));
                function timer() {
                    document.getElementById("realtime").setAttribute("datetime", new Date());
                    window.requestAnimationFrame(timer);
                }
                window.requestAnimationFrame(timer);
                return "\n      <style>\n        section {\n          margin-bottom: 32px;\n        }\n      </style>\n\n      <section>\n        <h2>Unformatted</h2>\n        <rh-datetime datetime=\"" + now + "\">\n          " + now + "\n        </rh-datetime>\n      </section>\n      <section>\n        <h2>Local</h2>\n        <p>\n          <strong>Just date:</strong>\n          <rh-datetime\n            datetime=\"" + now + "\"\n            type=\"local\"\n            day=\"numeric\"\n            month=\"long\"\n            year=\"numeric\">\n            " + now + "\n          </rh-datetime>\n        </p>\n        <p>\n          <strong>With time: </strong>\n          <rh-datetime\n            datetime=\"" + now + "\"\n            type=\"local\"\n            weekday=\"long\"\n            month=\"short\"\n            day=\"2-digit\"\n            year=\"numeric\"\n            hour=\"2-digit\"\n            minute=\"2-digit\"\n            second=\"2-digit\">\n            " + now + "\n          </rh-datetime>\n        </p>\n        <p>\n          <strong>With an en-GB locale: </strong>\n          <rh-datetime\n            datetime=\"" + now + "\"\n            type=\"local\"\n            weekday=\"long\"\n            month=\"short\"\n            day=\"2-digit\"\n            year=\"numeric\"\n            hour=\"2-digit\"\n            minute=\"2-digit\"\n            second=\"2-digit\"\n            locale=\"en-GB\">\n            " + now + "\n          </rh-datetime>\n        </p>\n        <p>\n          <strong>With a es locale: </strong>\n          <rh-datetime\n            datetime=\"" + now + "\"\n            type=\"local\"\n            weekday=\"long\"\n            month=\"short\"\n            day=\"2-digit\"\n            year=\"numeric\"\n            hour=\"2-digit\"\n            minute=\"2-digit\"\n            second=\"2-digit\"\n            locale=\"es\">\n            " + now + "\n          </rh-datetime>\n        </p>\n      </section>\n      <section>\n        <h2>Time Adverbial</h2>\n        <p>\n          <rh-datetime type=\"relative\" datetime=\"" + yearsago + "\">\n            " + yearsago + "\n          </rh-datetime>\n        </p>\n        <p>\n          <rh-datetime type=\"relative\" datetime=\"" + yearago + "\">\n            " + yearago + "\n          </rh-datetime>\n        </p>\n        <p>\n          <rh-datetime type=\"relative\" datetime=\"" + hoursago + "\">\n            " + hoursago + "\n          </rh-datetime>\n        </p>\n        <p>\n          <rh-datetime type=\"relative\" datetime=\"" + minutesago + "\">\n            " + minutesago + "\n          </rh-datetime>\n        </p>\n        <p>\n          <rh-datetime type=\"relative\" datetime=\"" + now + "\">\n            " + now + "\n          </rh-datetime>\n        </p>\n        <p>\n          <rh-datetime type=\"relative\" datetime=\"" + minutesuntil + "\">\n            " + minutesuntil + "\n          </rh-datetime>\n        </p>\n        <p>\n          <rh-datetime type=\"relative\" datetime=\"" + hoursuntil + "\">\n            " + hoursuntil + "\n          </rh-datetime>\n        </p>\n        <p>\n          <rh-datetime type=\"relative\" datetime=\"" + yearuntil + "\">\n            " + yearuntil + "\n          </rh-datetime>\n        </p>\n        <p>\n          <rh-datetime type=\"relative\" datetime=\"" + yearsuntil + "\">\n            " + yearsuntil + "\n          </rh-datetime>\n        </p>\n      </section>\n      <section>\n        <h2>Real-time updates</h2>\n        <rh-datetime\n          id=\"realtime\"\n          datetime=\"" + realtime + "\"\n          type=\"local\"\n          hour=\"2-digit\"\n          minute=\"2-digit\"\n          second=\"2-digit\">\n          " + realtime + "\n        </rh-datetime>\n      </section>\n\n      <script>\n        (() => {\n          var realtime = document.getElementById('realtime');\n          var relative1 = document.getElementById('minutesago');\n          var relative2 = document.getElementById('hoursuntil');\n          var relative3 = document.getElementById('daysuntil');\n\n          relative1.setAttribute('datetime', new Date(Date.now() - 600000).toString());\n          relative2.setAttribute('datetime', new Date(Date.now() + 6000000).toString());\n          relative3.setAttribute('datetime', new Date(Date.now() + 200000000).toString());\n\n          function timer() {\n            realtime.setAttribute('datetime', new Date());\n            window.requestAnimationFrame(timer);\n          }\n\n          window.requestAnimationFrame(timer);\n        })();\n      </script>\n    ";
            });
        }
    };
});
