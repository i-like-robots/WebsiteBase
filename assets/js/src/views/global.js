/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @modified 19/11/2012
 */
base.register('global', {

    /**
     * Retina
     * @description Swap out template images for scalable vectors
     */
    retina: function()
    {
        if ( window.devicePixelRatio && window.devicePixelRatio === 2 ){}
    }

});