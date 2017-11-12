$(function () {

    if ($(window).width() > 960) {

        var controller = new ScrollMagic.Controller();


        // ### //
        var tl0 = new TimelineMax()
            .fromTo(".home-hero .svg-curve", .5, {scaleY: 0}, {scaleY: 1})

        var scene0 = new ScrollMagic.Scene({
            duration: 600,
            // reverse: false,
            triggerHook: '0',
        })
            .setTween(tl0)
            // .setPin(".home-hero .svg-curve", {pushFollowers: false})
            // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
            .addTo(controller)

        // ### //
        var scene1 = new ScrollMagic.Scene({
            duration: 180,
            // reverse: false,
            triggerHook: '0',
        })
            .setPin("#header", {pushFollowers: false})
            // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
            .addTo(controller)


        // ### //
        var tl2 = new TimelineMax()
            .fromTo(".hero-content h1", .5, {opacity: 1, y: 0}, {opacity: 0, y: -20})
            .fromTo(".hero-content p", .5, {opacity: 1, y: 0}, {opacity: 0, y: -20})
            .fromTo(".hero-content .btn", .5, {opacity: 1, y: 0}, {opacity: 0, y: -20})

        var scene2 = new ScrollMagic.Scene({
            triggerElement: ".hero-content",
            duration: 400,
            // reverse: false,
            triggerHook: '.1'
        })
            .setTween(tl2)
            // .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
            .addTo(controller)


        // ### //
        var tl3 = new TimelineMax()
            .fromTo("#what-we-do .section-title", .5, {opacity: 0, y: 20}, {opacity: 1, y: 0})
            .fromTo("#what-we-do .section-title h3", .5, {opacity: 0, y: 20}, {opacity: 1, y: 0})
            .fromTo("#what-we-do .section-title p", .5, {opacity: 0, y: 20}, {opacity: 1, y: 0})

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
            .staggerFromTo("#what-we-do-list > div", 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, .3)

        var scene4 = new ScrollMagic.Scene({
            triggerElement: "#what-we-do",
            duration: 700,
            // reverse: false,
            triggerHook: '0'
        })
            .setTween(tl4)
            .setPin("#what-we-do")
            // .addIndicators({name: "4 (duration: 300)"}) // add indicators (requires plugin)
            .addTo(controller)


        // ### //
        var tl5 = new TimelineMax()
            .fromTo("#sofe-of-work .section-title", .5, {opacity: 0, y: 20}, {opacity: 1, y: 0})
            .fromTo("#sofe-of-work .section-title h3", .5, {opacity: 0, y: 20}, {opacity: 1, y: 0})
            .fromTo("#sofe-of-work .section-title p", .5, {opacity: 0, y: 20}, {opacity: 1, y: 0})

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
            .staggerFromTo(".portfolio-list > figure", 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, .3)

        var scene6 = new ScrollMagic.Scene({
            triggerElement: "#sofe-of-work",
            duration: 800,
            // reverse: false,
            triggerHook: '0'
        })
            .setTween(tl6)
            .setPin("#sofe-of-work")
            // .addIndicators({name: "6 (duration: 300)"}) // add indicators (requires plugin)
            .addTo(controller)


        // ### //
        var tl7 = new TimelineMax()
            .fromTo("#technologies .section-title", .5, {opacity: 0, y: 20}, {opacity: 1, y: 0})
            .fromTo("#technologies .section-title h3", .5, {opacity: 0, y: 20}, {opacity: 1, y: 0})
            .fromTo("#technologies .section-title p", .5, {opacity: 0, y: 20}, {opacity: 1, y: 0})

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
            .staggerFromTo(".technologies-list > li", 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, .3)
            .fromTo(".technologies-list > li", 1, {borderColor: "transparent"}, {borderColor: '#d4d4d4'})

        var scene8 = new ScrollMagic.Scene({
            triggerElement: "#technologies",
            duration: 1200,
            // reverse: false,
            triggerHook: '0'
        })
            .setTween(tl8)
            .setPin("#technologies")
            // .addIndicators({name: "8 (duration: 300)"}) // add indicators (requires plugin)
            .addTo(controller)




        // ### //
        var tl9 = new TimelineMax()
            .staggerFromTo("#fun-stats .col", 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, .3)

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



}


});








