$(function () {

    // Scroll Reveal
    window.sr = ScrollReveal({reset: false});
    sr.reveal('.fade-in-up', {
    	duration: 1000,
        distance: '30px',
        origin: 'bottom',
		scale: 1
    });
    sr.reveal('.fade-in-down', {
        duration: 1000,
        distance: '30px',
        origin: 'top',
        scale: 1
    });
    sr.reveal('.fade-in-right', {
        duration: 1000,
        distance: '30px',
        origin: 'left',
        scale: 1
    });
    sr.reveal('.fade-in-left', {
        duration: 1000,
        distance: '30px',
        origin: 'right',
        scale: 1
    });
    sr.reveal('.fade-in-with-interval .fade-in-up', {
        duration: 1000,
        distance: '30px',
        origin: 'bottom',
        scale: 1
    }, 50);
    sr.reveal('.fade-in-with-interval .fade-in-down', {
        duration: 1000,
        distance: '30px',
        origin: 'top',
        scale: 1
    }, 50);
    sr.reveal('.fade-in-with-interval .fade-in-right', {
        duration: 1000,
        distance: '30px',
        origin: 'left',
        scale: 1
    }, 50);
    sr.reveal('.fade-in-with-interval .fade-in-left', {
        duration: 1000,
        distance: '30px',
        origin: 'right',
        scale: 1
    }, 50);



    // Smooth Scroll
	var $window = $(window);
	var scrollTime = 0.7;
	var scrollDistance = 240;
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



	// popup init
    $('.popup-btn').magnificPopup({
        type: 'inline',
        // fixedContentPos: false,
        // fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        // preloader: false,
        // midClick: true,
        removalDelay: 300
    });
});








	
	
