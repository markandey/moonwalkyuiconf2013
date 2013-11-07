/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('lazyFlickrMojitBinderLazy', function(Y, NAME) {

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
            console.log('lazy binder--------->');
        }

    };

}, '0.0.1', {requires: ['mojito-client']});