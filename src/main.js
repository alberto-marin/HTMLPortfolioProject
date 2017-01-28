$(document).ready(function(){
	/* Background Transition */
	$(".img-background").css({
		'transition' : 'opacity 2s ease-in-out',
		'opacity' : '1'
	});

	/* Buttons Effect */
	$(".button").mouseenter(function(){
		$(this).fadeTo('fast', 1);
	});
	$(".button").mouseleave(function(){
		$(this).fadeTo('fast', 0.5);
	});
	/* Links */
	$("#github-link").click(function(){
		window.open("https://github.com/alberto-marin", '_blank');
	});
	$("#twitter-link").click(function(){
		window.open("http://www.twitter.com/_albertomarin", '_blank');
	});


});