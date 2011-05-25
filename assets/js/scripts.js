/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @created 12/01/2011
 * @modified 05/05/2011
 * @fileOverview Safely loads jQuery and executes page onLoad methods when ready
 */

var Website = {};

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
 * Load jQuery and execute methods within Website.load
 */
yepnope({
	load: 'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.6.min.js',
	callback: function ()
	{
		if (!window.jQuery) yepnope('/assets/js/jquery-1.6.min.js');
	},
	complete: function ()
	{
		$(function()
		{
			for (var method in Website['load']) Website.load[method]();
		});
	}
});

/**
 * Methods to execute automatically on page load
 */
Website.load = {

	/**
	 * Something
	 *
	 * @description This does nothing
	 */
	something: function ()
	{
		return;
	}
};
