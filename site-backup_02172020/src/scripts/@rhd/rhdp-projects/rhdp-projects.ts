import {RHDPProjectQuery} from './rhdp-project-query';
import {RHDPProjectURL} from './rhdp-project-url';
import {RHDPProjectItem} from './rhdp-project-item';

export class RHDPProjects extends HTMLElement {

    private _loading = true;
    private _dcpUrl = '';
    private _productId = '';
    private _data;

    get dcpUrl() {
        return this._dcpUrl; // this.getAttribute('dcp-url') ? this.getAttribute('dcp-url') : this._dcpUrl;
    }

    set dcpUrl(value) {
        if(this._dcpUrl === value) return;
        this._dcpUrl = value;
        this.setAttribute('dcp-url',this._dcpUrl);
    }

    get productId() {
        return this._productId;
    }

    set productId(value) {
        if(this._productId === value) return;
        this._productId = value;
        this.setAttribute('upstream-product-id', this._productId);
        if(this.querySelector('rhdp-project-query')) {
            this.querySelector('rhdp-project-query').setAttribute('filter',this._productId);
        }
        
    }

    get loading() {
        return this._loading;
    }

    set loading(value) {
        // Set the css for the loading symbol
        if(value == false){
            this.querySelector('ul.results').classList.remove('loading');
        }else{
            this.querySelector('ul.results').classList.add('loading');
        }
        this._loading = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    constructor() {
        super();
    }

    connectedCallback() {
        let query = new RHDPProjectQuery();
        let url = new RHDPProjectURL();
        this.innerHTML = this.template`${this}`;
        this.appendChild(query);
        this.appendChild(url);
        this.addEventListener('data-results-complete', this._loadDataResult);
        query.dcpUrl = this.dcpUrl;
        if(this.productId){
            query.filter = this.productId;
        }
    }

    removeAllProjects(){
        var childNodes = this.querySelector('ul.results');
        while(childNodes.firstChild){
            childNodes.removeChild(childNodes.firstChild);
        }
    }

    _loadDataResult(e){
        this.removeAllProjects();
        this.loading = true;
        if(e.detail && e.detail.data){
            let hits;
            if (e.detail.data.responses) {
                hits = e.detail.data.responses[0].hits.hits;
            } else {
                hits = e.detail.data.hits.hits;
            }
            for (var i = 0; i < hits.length; i++) {
                var project = new RHDPProjectItem();
                var props = hits[i].fields;
                var thumbnailSize = "200x150";
                project.imageUrl = "https://static.jboss.org/" + (props.specialIcon || props.sys_project) + "/images/" + (props.specialIcon || props.sys_project) + "_" + thumbnailSize + ".png";
                project.downloadsLink = props.downloadsLink;
                project.projectName = props.sys_project_name;
                project.sys_url_view = props.sys_url_view;
                project.descriptions = props.description;
                project.docsLink = props.docsLink;
                project.communityLink = props.communityLink;
                project.knowledgebaseLink = props.knowledgeBaseLink;
                project.userForumLink = props.userForumLink;
                project.devForumLink = props.devForumLink;
                project.mailingListLink = props.mailingListLink;
                project.chatLink = props.chatLink;
                project.blogLink = props.blogLink;
                project.issueTracker = props.issueTrackerLink;
                project.jiraLink= props.jiraLink;
                project.srcLink= props.srcLink;
                project.anonymousLink = props.anonymousLink;
                project.commiterLink = props.commiterLink;
                project.fisheyeLink = props.fisheyeLink;
                project.viewvcLink = props.viewvcLink;
                project.githubLink = props.githubLink;
                project.committerGitLink = props.committerGitLink;
                project.buildLink = props.buildLink;
                project.hudsonLink = props.hudsonLink;

                let listItem = document.createElement('li');
                listItem.setAttribute('class', 'upstream');
                listItem.appendChild(project);
                this.querySelector('ul.results').appendChild(listItem);
            }
            this.loading = false;
        }
    }

    static get observedAttributes() {
        return ['dcp-url', 'upstream-product-id'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'dcp-url':
                this.dcpUrl = newVal;
                break;
            case 'upstream-product-id':
                this.productId = newVal;
                break;
            default:
                this[name] = newVal;
        }
        this.innerHTML = this.template`${this}`;
    }

    template = (strings, project) => {
        return `<ul class="small-block-grid-2 large-block-grid-4 medium-block-grid-3 results"></ul>`;
    }
}

window.customElements.define('rhdp-projects', RHDPProjects);