/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @created 12/01/2011
 * @modified 17/10/2011
 * @package yourProject
 */

// Project namespace and version number
if (!window.yourProject)
{
	var yourProject = {
		_autoload: [],
		version: '0.0.1'
	};
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
 * Execute methods within objects registered within yourProject._autoload in reverse order.
 */
$(function()
{
	for (var i = 0; i < yourProject._autoload.length; i++)
	{
		for (var method in yourProject[yourProject._autoload[i]])
		{
			if (typeof yourProject[yourProject._autoload[i]][method] == 'function') yourProject[yourProject._autoload[i]][method]();
		}
	}
});
