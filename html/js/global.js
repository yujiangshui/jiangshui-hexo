// global var
var G = {};
var share;

G.fadeInByOrder = function(selector,interval,callback){
    var i = 1,
        length = $(selector+' .fade').length + 1,
        intervala = interval || 100,
        callbacka = callback || function(){ return; };

    (function fadeInIt(){
        if ( i < length ) {
            $(selector+' .fade'+i).addClass('fade-in');
            i++;
            setTimeout( arguments.callee , intervala );
            if ( i === length) {
                callbacka();
            }
        }
    })();
};

;(function($) {


$(document).ready(function() {

	G.getWindowHeight = function() {
		return $(window).height();
	}

// ajax 预留 demo
// $('.helo').on('click',function(e) {
// 	e.preventDefault();
// 	var url = $(this).attr('href');

// 	$.ajax({
// 		type: 'GET',
// 		url: url
// 	})
// 	.done(function(data) {
// 		var dataHtml = $(data).filter('.section-page').html();

// 		$('.section-page').html(dataHtml);
// 	})
// 	.fail(function(e, txt) {
// 		console.log(txt);
// 	});

// });




	// header nav transition
	G.headerHeight = $('.section-header').outerHeight(true) + $('.section-menu').outerHeight(true) - $('.section-menu').height();
	G.navWidth = $('.section-menu .section').width();
	G.windowWidth = $(window).width();
	G.expendLength = ( G.windowWidth - G.navWidth );

	// back to top
	$('.back-to-top').click(function(event) {
		$('html,body').animate({scrollTop:0}, 200);
	});



});

$(window).load(function() {

});

$(window).scroll(function(){

	var scrollt = $(window).scrollTop();

	// back to top
	if( scrollt > 200 ){
		$('.back-to-top').fadeIn(200);
	}else{
		$('.back-to-top').fadeOut(200);
	}

	// header nav transition
	var rate = scrollt / G.headerHeight;
	if ( scrollt < G.headerHeight && scrollt >= 0 ) {
		$('.section-menu .section').css({'max-width': G.navWidth + G.expendLength * rate});
		$('.section-menu').removeClass('fixed');
	}else if( scrollt > G.headerHeight && scrollt >= 0 ) {
		$('.section-menu').addClass('fixed');
	}

	// scroll load more
	if ( $('.list-pagination').length ) {

		var windowHeight = $(window).height();

	}

});

})(jQuery);