import PFElement from '../@pfelements/pfelement.js';

export default class RHKeycloak extends PFElement {
    template = el => {
        const tpl = document.createElement("template");
        tpl.innerHTML = ``;
        return tpl;

    }

    _keycloak;
    _url : string; // Keycloak Server URL
    _json : string; // Keycloak JSON Configuration
    _realm : string;
    _clientId : string;
    _data;

    get url() {
        return this._url;
    }

    constructor(element: string='rh-keycloak') {
        super(element);
    }

    connectedCallback() {
        
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }

    updateToken() {

    }
}

window.customElements.define('rh-keycloak', RHKeycloak);