/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('lazyFlickrMojitWithStorageNDocumentWriteBinderIndex', function(Y, NAME) {

/**
 * The lazyFlickrMojitWithStorageNDocumentWriteBinderIndex module.
 *
 * @module lazyFlickrMojitWithStorageNDocumentWriteBinderIndex
 */

    /**
     * Constructor for the lazyFlickrMojitWithStorageNDocumentWriteBinderIndex class.
     *
     * @class lazyFlickrMojitWithStorageNDocumentWriteBinderIndex
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