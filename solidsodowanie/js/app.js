
$(document).ready(function() {
    
     
    
    $("nav a").click(function() {
            
            var id = $(this).data('href');
            if($("#"+id).length > 0) {
            $('html, body').delay(300).animate({
            scrollTop: $("#"+id).offset().top- ($("nav").outerHeight())
            }, 700);
        
                return false;
            }
         
        });
    
    $(".oferta_name").click(function() {
            
            var id = $(this).data('href');
            if($("#"+id).length > 0) {
            $('html, body').delay(300).animate({
            scrollTop: $("#"+id).offset().top- ($("nav").outerHeight())
            }, 700);
        
                return false;
            }
         
        });
    // dynamiczne pokazywanie tresci w #offert
                window.sr = ScrollReveal();
                        sr.reveal('#realizacje img, #oferta ul, form ', {
                        reset: true,
                        delay: 400,
                        duration: 700,
                        rotate: { x:50, y: 0, z: 0 }
                        
                });
     

    
$("#form").validate({
  rules: {
    name: "required",
    subject: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: "Proszę podać nazwe",
    subject: "Proszę podać temat wiadomości",
    email: {
      required: "Email jest nam potrzebny by się z Tobą skontaktować",
      email: "Nie podałeś poprawnego adresu email"
    }
  }
}); 
    $(".cennik_wycena").hide();
   $("#show_cennik").click(function () {
        $(".cennik_wycena").fadeToggle("slow");
    });  
     
 }); // koniec document ready

