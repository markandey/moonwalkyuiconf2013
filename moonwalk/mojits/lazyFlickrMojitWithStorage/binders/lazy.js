/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('lazyFlickrMojitWithStorageBinderLazy', function(Y, NAME) {

    /**
     * The lazyFlickrMojitBinderIndex module.
     *
     * @module lazyFlickrMojitBinderIndex
     */

    /**
     * Constructor for the lazyFlickrMojitBinderIndex class.
     *
     * @class lazyFlickrMojitBinderIndex
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
            window.localStorage.setItem('flickr-data-'+query,node.one(".photos").getContent());
        }

    };

}, '0.0.1', {
    requires: ['mojito-client']
});