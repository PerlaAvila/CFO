 $(function() {


   $('.contact-frm').hide();


 var $window = $(window),
     $div = $('.sponsor');
     $base = $('#bases');
     $div1 = $('.col-sm-8');

 $(window).on('resize', function () {
    if ($window.width() > 1230) {
       $div.addClass('pull-right') && $div1.addClass('pull-right');
   }else{

    $div.removeClass('pull-right') && $div1.removeClass('pull-right')};
 });
   

  $('#contact-form-1').submit(function(){
  		var url = 'form-handler-nodb.php';

  		$.ajax({
  			type: 'POST',
  			url: url,
  			data: $('#contact-form-1').serialize(),
  			success: function(data)
  			{

  				$('.contact-frm').html(data) && $('.contact-frm').show() && $('#contact-form-1').hide();
  			}
  		});

  		return false;
  });


$(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');




    jQuery(function($) {
    var speed = 1000; 
     $('a[href^=\\#') .unbind('click.smoothScroll') .bind('click.smoothScroll', function(event) { event.preventDefault(); $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top }, speed); }); });

});