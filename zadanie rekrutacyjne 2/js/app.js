$(document).ready(function(){
    
    $(".collapse.in").each(function(){
        $(this).siblings(".panel-heading").find(".table_arrow").addClass("rotate");
    });
    
    
    $(".collapse").on('show.bs.collapse', function(){
        $(this).parent().find(".table_arrow").addClass("rotate");
        $(this).parent().addClass("active_table");
        
    }).on('hide.bs.collapse', function(){
        $(this).parent().find(".table_arrow").removeClass("rotate");
        $(this).parent().removeClass("active_table");
    });
});