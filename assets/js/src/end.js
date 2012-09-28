/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @created 28/09/2012
 * @modified 28/09/2012
 */
jQuery(document).ready(function()
{
	var auto = ['global'].concat( window._JSViews ? _JSViews.split(',') : [] );

	for (var i = 0; i < auto.length; i++)
	{
		_base.trigger( auto[i] );
	}
});

document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, '');