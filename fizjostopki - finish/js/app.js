$(document).ready(function() {   
   // otwarcie menu mobile 
    $(function() {
      $('.toggleNav').on('click',function() {
        $('.flex-nav ul').toggleClass('open');
      });
    }); // mobilne
    
    $("nav a").click(function() {
      
      var id = $(this).data('href');
      if($("#"+id).length > 0) {
      $('html, body').delay(300).animate({
      scrollTop: $("#"+id).offset().top- ($("nav").outerHeight())
      }, 700);
        
  
          return false;
      }
   
  }); // przekierowanie w menu

   $(window).scroll(function() {
    if ($(document).scrollTop() > 170) {
      $('#main').addClass('fixed-nav');
    } else {
      $('#main').removeClass('fixed-nav');
    }
  }); // efekt rozmycia przy scrollowaniu menu

 // efekt na text w header

const bg = document.querySelector('header');
const bgNazwa = document.querySelector('header span');
const windowWidth = window.innerWidth / 8;
const windowHeight = window.innerHeight / 8 ;

bg.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;
  
  bgNazwa.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});
  // o nas efekt 
  
  var pContainerHeight = $('#o_mnie').height();
  
  $(window).scroll(function(){
  
    var wScroll = $(this).scrollTop();
  
    if (wScroll <= pContainerHeight) {

     

      $('#oMnie_opis').css({
        'transform' : 'translate(0px, -'+ wScroll /10 +'%)'
      });
  
    }
 // Promoscope
 if(wScroll > $('.large-window').offset().top - $(window).height()){
  
      $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});
  
      var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);
  
      $('.window-tint').css({'opacity': opacity});
  
    }


  });
    
    
// obsługa panelu z opisami kursów

$('.tabs a').click(function() {
  var $this = $(this);
 $('.kafel').hide();
 $('.tabs a.now').removeClass('now');
     $this.addClass('now').blur();	
     var kafel = $this.attr('href');
     var bgkafel = $this.attr('bgcolor');
 $(kafel).fadeIn(350);
 

 return(false);
}); // koniec funkcji click
  $('.tabs li:first a').click();

    
}); // koniec document ready
                