// JavaScript Document

$(window).scroll(function() {
	var headerOrgOffset = 20;
    var currentScroll = $(this).scrollTop();
    if(currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('header').addClass('scrolled');
			$('body').addClass('scrolled');
        } else {
         	$('header').removeClass('scrolled');
			$('body').removeClass('scrolled');
        }
    } else {
         $('header').removeClass('scrolled');
		 $('body').removeClass('scrolled');   
    }
    previousScroll = currentScroll;
});
