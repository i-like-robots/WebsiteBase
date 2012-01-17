/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @created 12/01/2011
 * @modified 16/01/2012
 * @package yourProject
 */

var project = 'yourProject';

// Project namespace and version number
if (!window[project])
{
	window[project] = { _autoload: [] };
}

/**
 * Replace no-js
 */
var body = document.documentElement;
body.className = body.className.replace(/\bno-js\b/, '');

/**
 * Quick wrapper for a missing console
 */
if (!window.console)
{
	var console = {};
	console.history = [];

	console.log = function(i)
	{
		console.history.push(i);
	}
}

/**
 * Prototypal inheritance operator support
 * Douglas Crockford <http://javascript.crockford.com/prototypal.html>
 */
if (typeof Object.create !== 'function') {
	Object.create = function(o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

/**
 * Execute methods registered within [project]._autoload in reverse order.
 */
jQuery(function()
{
	for (var i = 0; i < window[project]._autoload.length; i++)
	{
		for (var method in window[project][ window[project]._autoload[i] ])
		{
			if (typeof window[project][ window[project]._autoload[i] ][method] == 'function')
			{
				window[project][ window[project]._autoload[i] ][method]();
			}
		}
	}
});
