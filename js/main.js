var controller = new ScrollMagic.Controller();

$(function () {

	// ### //
	var scene1 = new ScrollMagic.Scene({
			duration: 220,
			// reverse: false,
			triggerHook: 'onLeave',
		})
		.setPin("#header", {pushFollowers: false})
		// .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
		.addTo(controller)


	// ### //
	var scene2 = new ScrollMagic.Scene({
			triggerElement: ".hero-content", 
			duration: 200,
			// reverse: false,
			triggerHook: 'onLeave'
		})
		.setTween(".hero-content", {opacity: 0})
		// .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
		.addTo(controller)


	// ### //
	var tl3 = new TimelineMax()
		.fromTo("#what-we-do .section-title", .5, {opacity: 0}, {opacity: 1})
		.fromTo("#what-we-do .section-title h3", .5, {opacity: 0}, {opacity: 1})
		.fromTo("#what-we-do .section-title p", .5, {opacity: 0}, {opacity: 1})

	var scene3 = new ScrollMagic.Scene({
			triggerElement: "#what-we-do", 
			duration: 600,
			// reverse: false,
			triggerHook: '.65'
		})
		.setTween(tl3)
		// .addIndicators({name: "3 (duration: 300)"}) // add indicators (requires plugin)
		.addTo(controller)


	// ### //
	var tl4 = new TimelineMax()
		.staggerFromTo("#what-we-do-list > div", 1, {opacity: 0}, {opacity: 1}, .3)

	var scene4 = new ScrollMagic.Scene({
			triggerElement: "#what-we-do", 
			duration: 1500,
			// reverse: false,
			triggerHook: '0'
		})
		.setTween(tl4)
		.setPin("#what-we-do")
		// .addIndicators({name: "4 (duration: 300)"}) // add indicators (requires plugin)
		.addTo(controller)


	// ### //
	var tl5 = new TimelineMax()
		.fromTo("#sofe-of-work .section-title", .5, {opacity: 0}, {opacity: 1})
		.fromTo("#sofe-of-work .section-title h3", .5, {opacity: 0}, {opacity: 1})
		.fromTo("#sofe-of-work .section-title p", .5, {opacity: 0}, {opacity: 1})

	var scene5 = new ScrollMagic.Scene({
			triggerElement: "#sofe-of-work", 
			duration: 600,
			// reverse: false,
			triggerHook: '.65'
		})
		.setTween(tl5)
		// .addIndicators({name: "5 (duration: 300)"}) // add indicators (requires plugin)
		.addTo(controller)


	// ### //
	var tl6 = new TimelineMax()
		.staggerFromTo(".portfolio-list > figure", 1, {opacity: 0}, {opacity: 1}, .3)

	var scene6 = new ScrollMagic.Scene({
			triggerElement: "#sofe-of-work", 
			duration: 1500,
			// reverse: false,
			triggerHook: '0'
		})
		.setTween(tl6)
		.setPin("#sofe-of-work")
		// .addIndicators({name: "6 (duration: 300)"}) // add indicators (requires plugin)
		.addTo(controller)


	// ### //
	var tl7 = new TimelineMax()
		.fromTo("#technologies .section-title", .5, {opacity: 0}, {opacity: 1})
		.fromTo("#technologies .section-title h3", .5, {opacity: 0}, {opacity: 1})
		.fromTo("#technologies .section-title p", .5, {opacity: 0}, {opacity: 1})

	var scene7 = new ScrollMagic.Scene({
			triggerElement: "#technologies", 
			duration: 600,
			// reverse: false,
			triggerHook: '.65'
		})
		.setTween(tl7)
		// .addIndicators({name: "7 (duration: 300)"}) // add indicators (requires plugin)
		.addTo(controller)


	// ### //
	var tl8 = new TimelineMax()
		.staggerFromTo(".technologies-list > li", 1, {opacity: 0}, {opacity: 1}, .3)
		.fromTo(".technologies-list > li", 1, {borderColor: "transparent"}, {borderColor: '#d4d4d4'})

	var scene8 = new ScrollMagic.Scene({
			triggerElement: "#technologies", 
			duration: 1500,
			// reverse: false,
			triggerHook: '0'
		})
		.setTween(tl8)
		.setPin("#technologies")
		// .addIndicators({name: "8 (duration: 300)"}) // add indicators (requires plugin)
		.addTo(controller)




	// ### //
	var tl9 = new TimelineMax()
		.staggerFromTo("#fun-stats .col", 1, {opacity: 0}, {opacity: 1}, .3)

	var scene9 = new ScrollMagic.Scene({
			triggerElement: "#fun-stats", 
			duration: 500,
			// reverse: false,
			triggerHook: '.75'
		})
		.setTween(tl9)
		// .setPin("#technologies", {pushFollowers: false})
		// .setPin("#fun-stats")
		// .addIndicators({name: "9 (duration: 300)"}) // add indicators (requires plugin)
		.addTo(controller)






	var $window = $(window);		//Window object
	var scrollTime = 0.7;			//Scroll time
	var scrollDistance = 240;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
	
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});


});








	
	
