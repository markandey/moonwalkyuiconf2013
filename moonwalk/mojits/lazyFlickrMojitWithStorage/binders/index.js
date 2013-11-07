/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('lazyFlickrMojitWithStorageBinderIndex', function(Y, NAME) {

/**
 * The lazyFlickrMojitWithStorageBinderIndex module.
 *
 * @module lazyFlickrMojitWithStorageBinderIndex
 */

    /**
     * Constructor for the lazyFlickrMojitWithStorageBinderIndex class.
     *
     * @class lazyFlickrMojitWithStorageBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
             var me = this;
            this.node = node;
            var params = me.mojitProxy.data.get("params");
            var photos=node.one('.photos');
            var params = me.mojitProxy.data.get("params"),query;
            if(params.url){
                query=params.url.q;    
            }else{
                query="";
            }
            if(params.url.q){
                query=params.url.q.replace(/[^a-zA-Z0-9]/g,'-');
            }else{
                query=""; 
            }
            if(window.localStorage){
                var html=window.localStorage.getItem("flickr-data-"+query);
                if(html){
                    photos.setContent(html);
                }
            }
            me.mojitProxy.invoke('lazy', {
                "params": params
            }, function(err, html) {
                if (html) {
                    me.node.replace(html || 'error');
                }
            });
            
        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});