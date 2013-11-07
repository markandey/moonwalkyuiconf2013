/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('lazyFlickrMojitWithStorage', function(Y, NAME) {

    function eachFlickr(context, options) {
        var photos = context,html="",img;
        for (var i = 0; i < photos.length; i++) {
            img = "http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_q.jpg";
            img = img.replace('{farm-id}', photos[i].farm);
            img = img.replace('{server-id}', photos[i].server);
            img = img.replace('{secret}', photos[i].secret);
            img = img.replace('{id}', photos[i].id);
            html = html + options.fn({
                'src':img,
                'title':photos[i].title
            });
        }
        return html;
    }
    /**
     * The lazyFlickrMojitWithStorage module.
     *
     * @module lazyFlickrMojitWithStorage
     */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        lazy: function(ac) {
            ac.assets.addCss('http://yui.yahooapis.com/pure/0.3.0/pure-min.css');
            ac.assets.addCss('../static/moonwalk/assets/pureskin.css');
            ac.assets.addCss('../static/moonwalk/assets/moonwalk.css');
            ac.helpers.set('eachFlickr', eachFlickr);
            var query = ac.params.getFromUrl('q');
            ac.models.get('lazyFlickrMojitWithStorageModelFoo').getData(query, function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.done({
                    'data': data,
                    "query": query
                });
            });
        },
        index: function(ac) {
            ac.assets.addCss('http://yui.yahooapis.com/pure/0.3.0/pure-min.css');
            ac.assets.addCss('../static/moonwalk/assets/pureskin.css');
            ac.assets.addCss('../static/moonwalk/assets/moonwalk.css');
            ac.helpers.set('eachFlickr', eachFlickr);
            var allparams = ac.params.getAll();
            ac.data.set('params', allparams);
            ac.done();

        }

    };

}, '0.0.1', {
    requires: ['mojito',
     'mojito-assets-addon',
      'mojito-models-addon',
      'mojito-data-addon',
      'mojito-params-addon',
      'mojito-helpers-addon',
       'lazyFlickrMojitWithStorageModelFoo']
});