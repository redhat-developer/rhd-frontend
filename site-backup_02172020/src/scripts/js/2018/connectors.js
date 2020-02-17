app.connectors = {

    /**
     * Constants used to determine order of query result hits.
     *
     * @const
     */
    orderBy: {
        PRIORITY: 'priority',
        SYS_TITLE: 'sys_title'
    },

    open: function (html) {
        $('.overlay-content').html(html);
        $('body').addClass('overlay-open');
    },

    close: function () {
        $('body').removeClass('overlay-open');
        $('.overlay-content').empty();
    },

    fallbackImage: function (el) {
        el.src = "#{cdn( site.base_url + '/images/design/default_connector_200x150.png')}";
    },

    hideCodeSnippetIfEmpty: function (snippet_elem) {
        var snippet_value = snippet_elem.find('.snippet-value');
        if (!snippet_value.val()) {
            snippet_elem.hide();
        }
    },

    hideDocsLinkIfEmpty: function (docs_elem) {
        var docs_link = docs_elem.find('.docs-link');
        var docs_link_text = docs_elem.find('.docs-link-text');
        if (!docs_link.attr("href")) {
            docs_link_text.hide();
        }
    },

    hideExtLinkIfEmpty: function (ext_elem) {
        var link_1 = ext_elem.find('.link_1');
        var link_1_text = ext_elem.find('.link_1_text');
        var link_2 = ext_elem.find('.link_2');
        var link_2_text = ext_elem.find('.link_2_text');
        if (!link_1.attr("href")) {
            link_1_text.hide();
        }
        if (!link_2.attr("href")) {
            link_2_text.hide();
        }
    },


    displayOverlay: function (e) {
        e.preventDefault();
        var overlay_content = $(this).parents('li').find('.connector-overlay-content');
        app.connectors.hideCodeSnippetIfEmpty(overlay_content.find('.connector-a'));
        app.connectors.hideCodeSnippetIfEmpty(overlay_content.find('.connector-b'));
        app.connectors.hideDocsLinkIfEmpty(overlay_content);
        app.connectors.hideExtLinkIfEmpty(overlay_content);
        app.connectors.open(overlay_content.html());  
    },
    
    orderByPriority: function(e) {
        e.preventDefault();
        var targetProductFilter = $('[data-target-product]').data('target-product');
        app.connectors.connectorFilter(null, $('ul.connector-results'), targetProductFilter, null, app.connectors.orderBy.PRIORITY);

        $('.connectors-order a').removeClass('active');
        $('.order-priority').addClass('active');
    },

    orderByAlpha: function(e) {
        e.preventDefault();
        var targetProductFilter = $('[data-target-product]').data('target-product');
        app.connectors.connectorFilter(null, $('ul.connector-results'), targetProductFilter, null, app.connectors.orderBy.SYS_TITLE);
        $('.connectors-order a').removeClass('active');
        $('.order-alpha').addClass('active');
    },

    /**
     * Parameters 'query', 'target_product', 'orderBy' and 'featuredIDs' determine input parameters
     * for connectors query (see [1]).
     *
     * [1] https://github.com/searchisko/configuration/blob/master/data/query/connectors.md
     *
     * @param {string} query
     * @param {!HTMLElement} container
     * @param {string} target_product
     * @param {string} thumbnailSize
     * @param {string=} orderBy
     * @param {Array.<string>=} featuredIDs
     */
    connectorFilter : function(query, container, target_product, thumbnailSize, orderBy, featuredIDs) {
        var url = app.dcp.url.connectors;

        var request_data = {};

        if (query) {
            request_data.query = query;
        }

        if (target_product) {
            request_data.target_product = target_product;
        }

        if (orderBy && orderBy == this.orderBy.SYS_TITLE) {
            request_data.sortAlpha = true;
        }

        //And specify the connector IDs if specified.
        if (featuredIDs && $.isArray(featuredIDs) && featuredIDs.length > 0) {
            request_data.id = featuredIDs;
        }

        // append loading class to wrapper
        $("ul.connector-results").addClass('loading');

        $.ajax({
            url : url,
            dataType: 'json',
            data : request_data,
            container : container,
            thumbnailSize : thumbnailSize,
            error : function() {
                $('ul.connector-results').html(app.dcp.error_message);
            }
        }).done(function(data){
            var container = this.container || $('ul.connector-results');
            var thumbnailSize = this.thumbnailSize || "200x150";
            app.connectors.format(data, container, thumbnailSize);
        });
    },

    /**
     *
     * @param {*} data
     * @param {!HTMLElement} container
     * @param {string} thumbnailSize
     */
    format: function (data, container, thumbnailSize) {
        if (data.responses) {
            var hits = data.responses[0].hits.hits;
        } else {
            var hits = data.hits.hits;
        }

        var html = "";
        // loop over every hit
        for (var i = 0; i < hits.length; i++) {
            var props = hits[i]._source;

            props.img_path_thumb = "https://static.jboss.org/connectors/" + props.id + "_" + thumbnailSize + ".png";
            props.fallback_img = app.connectors.fallbackImage(this);

            //If no 'long description', use the short one (before it is truncated)
            if (!('sys_content' in props)) {
                props.sys_content = props.sys_description;
            }
            
            //Limit the short description length, in-case the source data is invalid.
            if (props.sys_description.length > 150 ) {
                props.sys_description = props.sys_description.slice(0,146).concat(' ...');
            }
            
            //The templating fails if these values are undefined. There's probably a better way to do this.
            if (!props.code_snippet_1) {
                props.code_snippet_1 = '';
            }
            if (!props.code_snippet_2) {
                props.code_snippet_2 = '';
            }
            if (!props.more_details_url) {
                props.more_details_url = '';
            }
            if(!props.link_1_text || !props.link_1_url){
               props.link_1_text = '';
                props.link_1_url = '';
            }
            if(!props.link_2_text || !props.link_2_url){
                props.link_2_text = '';
                props.link_2_url = '';
            }
            
            var connectorTemplate = app.templates.connectorTemplate;
            html += connectorTemplate.template(props);

        }

        container.html(html).removeClass('loading');
    }
};


$(function () {

    $('ul.connector-results').on('click','a.fn-open-connector',app.connectors.displayOverlay);
    $('ul.featured-connectors-results').on('click','a.fn-open-connector',app.connectors.displayOverlay);
    
    $('.link-list').on('click','a.order-priority',app.connectors.orderByPriority);
    $('.link-list').on('click','a.order-alpha',app.connectors.orderByAlpha);
    
    $('.overlay-close').on('click', app.connectors.close);

    var targetProductFilter = $('[data-target-product]').data('target-product');
    var orderBy = $('[data-order-by]').data('order-by');
    
    /*
        All Connectors
     */
    var connectorResults = $('.connector-results');
    if(connectorResults.length) {
        app.connectors.connectorFilter(null, $('ul.connector-results'), targetProductFilter, null, orderBy);
    }

    
    /*
        Featured Connectors
     */
    var featuredConnectorIds = $('.featured-connector-ids');
    if(featuredConnectorIds.length) {
        var featuredIds = JSON.parse(featuredConnectorIds.text());
        if ($.isArray(featuredIds) && featuredIds.length > 0) {
            app.connectors.connectorFilter(null, $('ul.featured-connectors-results'), targetProductFilter, '500x400', null, featuredIds);
        }
    }
});

