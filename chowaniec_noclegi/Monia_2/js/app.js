$(document).ready(function () {

    $('button#toggle').click(function () {
        $('#page-slide').toggleClass('slide');
        $('#toggle').toggleClass('slide-tog');
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
    }); // slider
    $('.wydarzenia .tabs').click(function () {
        var $this = $(this);
        $('.panel').hide();
        $('.menu_wydarzenia').find(".tabs_active").removeClass('tabs_active');
        $this.addClass('tabs_active').blur();
        var panel = $this.attr('href');
        $(panel).fadeIn(350);
        return (false);
    }); // koniec funkcji click
    $('.menu_wydarzenia .tabs:first').click(); //steps= show and hide information about steps

   
    
    
    
    
    $("nav a").click(function() {
            
            var id = $(this).data('href');
            if($("#"+id).length > 0) {
            $('html, body').delay(300).animate({
            scrollTop: $("#"+id).offset().top- ($("nav").outerHeight())
            }, 700);
               $('#page-slide').toggleClass('slide');
               $('#toggle').toggleClass('slide-tog'); 
        
                return false;
            }
         
        }); // menu

       window.sr = ScrollReveal();
                        sr.reveal('.tabs, .panel_cointainer, .text-center, .hovereffect-1 ', {
                        reset: true,
                        delay: 400,
                        duration: 700,
                        rotate: { x:50, y: 0, z: 0 }
                        
                });
    
$(window).scroll(function() {
  if ($(document).scrollTop() > 70) {
    $('.navbar').addClass('shrink');
  } else {
    $('.navbar').removeClass('shrink');
  }
});
    
//    var $grid = $('.grid').masonry({
//  itemSelector: '.grid-item',
//  percentPosition: true,
//  columnWidth: '.grid-sizer'
//});
//// layout Isotope after each image loads
//$grid.imagesLoaded().progress( function() {
//  $grid.masonry();
//});  
    var $grid = $('.grid').masonry({
  // disable initial layout
  initLayout: false,
  //...
});


// trigger initial layout
$grid.masonry();
    
}); // koniec document ready
