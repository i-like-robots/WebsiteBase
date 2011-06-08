/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @created 12/01/2011
 * @modified 08/06/2011
 * @fileOverview Executes page onLoad methods when ready
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

/**
 * Execute methods within Website.load
 */
$(function()
{
	for (var method in Website['load']) Website.load[method]();
});