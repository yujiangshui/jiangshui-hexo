;(function($) {

// global var
var G = {};

$(document).ready(function() {



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
	if( scrollt > 200 ){
		$('.back-to-top').fadeIn(200);
	}else{
		$('.back-to-top').fadeOut(200);
	}

	// header nav transition
	var rate = scrollt / G.headerHeight;
	if ( scrollt < G.headerHeight ) {
		$('.section-menu .section').css({'max-width': G.navWidth + G.expendLength * rate});
		$('.section-menu').removeClass('fixed');
	}else{
		$('.section-menu').addClass('fixed');
	}

});

})(jQuery);