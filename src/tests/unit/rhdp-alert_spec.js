"use strict";
// Alert component testing
describe('Alert component', function() {
    var wc, 
        heading = 'Test Heading', 
        txt = 'Test Text';
    beforeEach(async () => {
        await System.import('./base/src/docs/static/js/@rhd/rhdp-alert.js').then(() => {
            wc = document.createElement('rhdp-alert');
            wc.heading = heading;
            wc.innerText = txt;
            document.body.appendChild(wc);
        });
    });

    afterEach(function() {
        document.body.removeChild(wc);
    });

    it('should have the right structure', function() {
        expect(wc.innerText).toEqual(txt);
        expect(wc.shadowRoot.querySelector('strong').innerText).toEqual(heading);
    });

});