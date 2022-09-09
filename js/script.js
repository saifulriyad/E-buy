$(function($){

    var menuTop= $('#main_menu').offset().top; 
    $(window).on('scroll', function(){
        var scrollToTop = $(window).scrollTop();
        
        if(scrollToTop > menuTop){
            $('#main_menu').addClass('menuFix');
        }
        else{
            $('#main_menu').removeClass('menuFix');
        }

        if(scrollToTop > 150){
            $('.backTop i').fadeIn(800)
        }
        else{
            $('.backTop i').fadeOut(800)
        }
    });
    $('.backTop i').on('click', function(){
        $('html').animate({
            scrollTop: 0
        },500);
    });

    //preloader js
    //banner part js
    $('#banner').slick({
        autoplay: true,
        speed: 2000,
        arrows: false,
    });


});