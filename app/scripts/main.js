$(function() {
	'use strict';

	// Load the IFrame Player API code asynchronously.
	var tag = document.createElement('script');
	tag.src = 'https://www.youtube.com/player_api';
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	$('.video-container').click(function() {
		var $container = $(this);
		$container.find('.play-container, .content-container, .type-tag').hide();
		$container.addClass('playing');

		var $frame = $container.find('.player-placeholder');
		$frame.attr('id', 'video'+Math.floor(Math.random()*10000));

		new YT.Player($frame.attr('id'), {
			videoId: $frame.attr('data-video-id'),
			playerVars: {
				autoplay: 1
			}
		});

		$frame = $container.find('iframe').show();

		return false; //stop prop and prev def
	});
});