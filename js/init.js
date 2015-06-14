(function($) {
	$(function() {
//Video control with mouse positionX
			var mousePos = 0;
			var language = $('#control');
			var video = $('#control video');
			//generate mouse1
			language.mousemove(function(e) {
				mousePos = e.pageX;
				});
					//generate mouse2
					var mouseX = 0;
					//function to set the vid duration to width and tie to mouse position
					var loop = setInterval(function(){
						//get vid duration
						var time = video[0].duration;
						//get distance between mouse 1 & 2 and add ease/lag between
						mouseX += (mousePos - mouseX)*.4;
						//set mouse position to duration where duration is width
						var target = (time*mouseX/$(window).width());
						//current time = position of mouse ease
						video[0].currentTime = target;
					}, 100);                     
	});
})(jQuery);