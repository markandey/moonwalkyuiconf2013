/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('simpleFlickrMojitBinderIndex', function(Y, NAME) {

    /**
     * The simpleFlickrMojitBinderIndex module.
     *
     * @module simpleFlickrMojitBinderIndex
     */

    /**
     * Constructor for the simpleFlickrMojitBinderIndex class.
     *
     * @class simpleFlickrMojitBinderIndex
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
           
        }

    };

}, '0.0.1', {
    requires: ['event-mouseenter', 'mojito-client']
});