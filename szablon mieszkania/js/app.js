
$(document).ready(function() {
    
   var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider(); // kalkulator
     
   $('.kafelek_slaider').click(function() {
	   var $this = $(this);
		$('.panel').hide();
		$('.tabs').find(".tabs_active").removeClass('tabs_active');
        $this.addClass('tabs_active').blur();
        var panel = $this.attr('href');
		$(panel).fadeIn(350);
		return(false);
	}); // koniec funkcji click
    $('.tabs .kafelek_slaider:first').click(); // show/hide slider information
     
 }); // koniec document ready

