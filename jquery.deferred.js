/**
 * jQuery deferred
 *
 * @url		http://github.com/marioestrada/jquery-deferred
 * @author	Mario Estrada <me@mario.ec>
 * @version	1.0
 */
(function($)
{

	$.fn.deferjs = function()
	{
		return this.each(function()
		{
			var elem = $(this);
			var content = elem.html();
			var src = elem.attr('src');
			var delay = elem.data('delay') || 1;

			if(!src)
				var script = $('<script>' + content + '</script>');
			else
				var script = $('<script src="' + src + '"></script>');

			setTimeout(function(){ $(elem).replaceWith(script) }, delay);	
		});
	}

$(function()
{
	$('script[type="text/deferred-javascript"]').deferjs();
});
	
})(jQuery);