/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @created 27/03/2012
 * @modified 12/07/2012
 * @package Your project
 */
_base.views.global = {

	/**
	 * Retina
	 * @description Swap out template images for scalable vectors
	 */
	retina: function()
	{
		if ( window.devicePixelRatio && window.devicePixelRatio === 2 ){}
	}

};