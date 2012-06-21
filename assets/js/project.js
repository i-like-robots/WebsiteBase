/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @created 12/01/2011
 * @modified 21/06/2012
 */

// Replace no-js
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

// Get required views ( E.G. <body data-views="homepage calendar"> )
var _views = [], _autoload = function()
{
	var v = document.body.getAttribute('data-views');
	return ['global'].concat( v && v.length ? v.split(' ') : [] );
}();


// Execute methods registered within _views registered with _autoload.
// This could be easily swapped out with a neat AMD loader ;)
function _boot()
{
	for (var i = 0; i < _autoload.length; i++)
	{
		if ( _views[ _autoload[i] ] )
		{
			for (var method in _views[ _autoload[i] ])
			{
				if ( typeof _views[ _autoload[i] ][method] === 'function' )
				{
					_views[ _autoload[i] ][method]();
				}
			}
		}
	}
}

jQuery(document).ready(_boot);
