(function ($) {
  $(document).ready(function(){
    
    $(".navscroll").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('.navscroll').fadeIn();
			} else {
				$('.navscroll').fadeOut();
			}
		});

	
	});

});
  }(jQuery));