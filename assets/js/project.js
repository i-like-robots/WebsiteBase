/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @created 12/01/2011
 * @modified 22/02/2012
 * @package yourProject
 */

var project = 'yourProject';

// Project namespace and version number
window[project] = window[project] || { _autoload: [] };

// Replace no-js
document.body.className = document.body.className.replace(/\bno-js\b/, '');

// Quick wrapper for a missing console
if ( ! window.console)
{
	var console = { history: [] };

	console.error = console.log = function(i)
	{
		console.history.push(i);
	}
}

// Execute methods registered within [project]._autoload in reverse order.
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
