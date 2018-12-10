// import PFElement from '../@pfelements/pfelement.js';
import RHElement from '../@rhelements/rhelement/rhelement.js';

export default class RHKeycloak extends RHElement {
    
    static get tag() { return 'dp-keycloak'; }

    _keycloak;
    _url : string; // Keycloak Server URL
    _json : string; // Keycloak JSON Configuration
    _realm : string;
    _clientId : string;
    _data;

    get url() {
        return this._url;
    }

    constructor() {
        super(RHKeycloak);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }

    updateToken() {

    }
}

RHElement.create(RHKeycloak);
// window.customElements.define('rh-keycloak', RHKeycloak);