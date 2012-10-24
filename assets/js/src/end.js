/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @created 28/09/2012
 * @modified 24/10/2012
 */
jQuery(window).load(function()
{
    var auto = ['global'].concat( window._JSViews ? window._JSViews.split(',') : [] );

    for (var i = 0, len = auto.length; i < len; i++)
    {
        window._base.trigger( auto[i] );
    }
});

document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, '');