$(function() {
	'use strict';

	$('.video-container').click(function() {
		var $container = $(this);
		$container.find('iframe').show().css('display', 'block');
		$container.find('.play-container, .content-container').hide();
		$container.addClass('playing');

		return false; //stop prop and prev def
	});
});