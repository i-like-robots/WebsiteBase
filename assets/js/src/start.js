/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @description Basic 'views' - organise your scripts and don't init all the things!
 * @modified 19/11/2012
 */
window.base = {

    /**
     * Registered views
     * @type  {object}
     * @private
     */
    _views: {},

    /**
     * Register
     * @description Register a new view
     * @param  {string}  view  View name
     * @param  {object}  obj   View object
     */
    register: function(view, obj)
    {
        if ( ! this.exists(view) )
        {
            this._views[view] = obj;
        }
    },

    /**
     * Extend
     * @description Extend a previously registered view
     * @param  {string}  view  View name to extend
     * @param  {string}  ext   Extension name
     * @param  {object}  obj   View object
     */
    extend: function(view, ext, obj)
    {
        if ( this.exists(view) )
        {
            this._views[view + '/' + ext] = $.extend({}, this._views[view], obj);
        }
    },

    /**
     * Exists
     * @description Check if a view has been registered
     * @param  {string}  view  View name
     * @return {boolean}
     */
    exists: function(view)
    {
        return this._views.hasOwnProperty(view);
    },

    /**
     * Trigger
     * @description Execute methods within a registered view
     * @param  {string}  view  View name or comma-separated list of view names
     */
    trigger: function(view)
    {
        view = view.split(',');

        for (var i = 0, len = view.length; i < len; i++)
        {
            var namespace = view[i];

            if ( this.exists(namespace) )
            {
                for ( var prop in this._views[namespace] )
                {
                    if ( typeof this._views[namespace][prop] === 'function' && prop.indexOf('_') !== 0 )
                    {
                        this._views[namespace][prop]();
                    }
                }
            }
        }
    }

};