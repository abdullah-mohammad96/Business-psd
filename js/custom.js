$(function(){
    //banner slider;
    $('.banner-slider').slick({
        dots: true,
        prevArrow:'<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-next right-arrow"></i>',
    });

    
    //funfact counter

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //animate css control by wow

    new WOW().init();

    //feedback slider
   

    $('.feedback-slider').slick({
        slidesToShow:2,
        slidesToScroll:1,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-next right-arrow"></i>'
    });

    //gallary popup

    $('.venobox').venobox({
        spinner: 'three-bounce',
        spincolor: '#ffc155',
        titleattr: 'data-title'
        
    });

    //banner scroll using parallux js

    $('#banner').parallax({imageSrc: 'images/b2.jpg'});
    $('#video').parallax({imageSrc: 'images/b3.jpg'});

   //type js

   var typed = new Typed('.element', {
    strings: ['photographer', 'web designer' , 'graphic designer'],
    smartBackspace: true,
    loop:true,
    backSpeed: 100,
    typeSpeed: 200,
    showCursor: true,
    cursorChar: '*',

    });

    //countdown timer

    $('#countdown').countdown({
        year:2022
    
    })

    //gallary filter

    var mixer = mixitup('.gallary-main');

 });