/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('lazyFlickrMojitWithStorageModelFoo', function(Y, NAME) {

    /**
     * The lazyFlickrMojitWithStorageModelFoo module.
     *
     * @module lazyFlickrMojitWithStorage
     */

    /**
     * Constructor for the lazyFlickrMojitWithStorageModelFoo class.
     *
     * @class lazyFlickrMojitWithStorageModelFoo
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(query,callback) {
            function yqldelayed() {
                var q = '';
                if (query) {
                    q = 'select * from flickr.photos.search where text="' + query + '" and api_key="0fbb2b721757f77a6a9d038f4649a2bf"';
                } else {
                    q = 'select * from flickr.photos.interestingness(20) where api_key="0fbb2b721757f77a6a9d038f4649a2bf"'

                }
                console.log(q);
                Y.YQL(q, function(rawData) {
                    console.log(rawData);
                    try {
                        if (!rawData.query.results) {
                            callback(false, {});
                            return;
                        }
                        callback(false, rawData.query.results);
                    } catch (e) {
                        callback(false, {});
                    }

                });
            }
            setTimeout(yqldelayed,3000);
        }

    };

}, '0.0.1', {
    requires: ['yql']
});