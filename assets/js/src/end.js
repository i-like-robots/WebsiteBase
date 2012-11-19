/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @modified 19/11/2012
 */
document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, '');

jQuery(window).load(function()
{
	base.trigger( 'global,' + (window._JSViews || '') );
});