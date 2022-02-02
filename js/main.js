$(document).ready(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 5000,
        directionNav: false,
        pausePlay: true,
        start: function () { //처음슬라이드 발생후 일어나는 일을 작성하는 콜백함수
            $('.mSlider .flexslider .slides > li').addClass('on')
        },
        before: function () { //매 슬라이드가 발생되기 전에 일어나는 일을 작성하는 콜백함수
            $('.mSlider .flexslider .slides > li').removeClass('on')
        },
        after: function () { //매 슬라이드 발생후 일어나는 일을 작성하는 콜백함수
            $('.mSlider .flexslider .slides > li').addClass('on')
        }
    });

});


$(document).ready(function(){
    $('.slider-for').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
});






$(document).ready(function () {

    $('.pri02').fadeOut(0);
    $('.priBtn a').click(function () {
        var i = $(this).parent().index()
        if (i == 0) {
            $('.priPro ul').animate({
                top: 0
            }, 'slow');
        } else {
            $('.pri02').fadeIn(0);
            $('.priPro ul').animate({
                top: -450
            }, 'slow');
        }

    });
});


$(document).ready(function () {
    /*
			var defaults = {
	  			containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
	 		};
			*/

    $().UItoTop({
        easingType: 'easeOutQuart'
    });

});


