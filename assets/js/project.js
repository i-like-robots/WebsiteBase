/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @created 12/01/2011
 * @modified 12/07/2012
 */

// Replace no-js document class
document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, '');

// Quick wrapper for a missing console
if ( ! window.console)
{
	var console = { history: [] };

	console.error = console.log = function(i)
	{
		console.history.push(i);
	};
}

// Load and execute views
window._base = {

	views: {},

	// Execute methods within the given view
	trigger: function(v)
	{
		if ( this.views[v] )
		{
			for ( var m in this.views[v] )
			{
				if ( typeof this.views[v][m] === 'function' )
				{
					this.views[v][m]();
				}
			}
		}
	},

	// Trigger required views (E.G. <body data-views="homepage calendar">)
	// This could easily be swapped out with an AMD loader interface.
	autoload: function()
	{
		var v = document.body.getAttribute('data-views'),
		    auto = ['global'].concat( v && v.length ? v.split(' ') : [] );

		for (var i = 0; i < auto.length; i++)
		{
			_base.trigger( auto[i] );
		}
	}
};

jQuery(document).ready(_base.autoload);
