/**
 * @author Matt Hinchliffe <http://www.maketea.co.uk>
 * @created 12/01/2011
 * @modified 28/09/2012
 */

window._base = {

	views: {},

	/**
	 * Trigger
	 * @description Execute methods within registered view
	 * @param  {string} v View name
	 */
	trigger: function(v)
	{
		if ( this.views[v] )
		{
			for ( var m in this.views[v] )
			{
				if ( typeof this.views[v][m] === 'function' )
				{
					this.views[v][m]();
				}
			}
		}
	}

};