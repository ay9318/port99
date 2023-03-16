// loading
$(window).on('load', function(){
    $('#loading').fadeOut(400);
});
$(function() {
    // slide
    var swiper01 = new Swiper('.swiper-container', {
        slidesPerView : 1.15,
        spaceBetween : 20,
        slidesOffsetAfter : 25,
        breakpoints: {
            480: {
                slidesPerView : 2.5,
            },
        },
    });

    // tab
    $('.port_wrap .tab_btn').each(function(){
        var portWrap = $(this).parents('.port_wrap');
        $(this).on('click', function(){
            portWrap.css('z-index','1');
            portWrap.siblings('.port_wrap:not(.no_hover)').css('z-index','0');
            if(portWrap.css('z-index','1')) {
                portWrap.addClass('on');
                portWrap.siblings('.port_wrap').removeClass('on');
            } else {
                portWrap.removeClass('on')
            }
            if($(this).parents('.port_wrap.port02').hasClass('on')) {
                $('body').css({'background':'#64b5f6','transition':'background .6s'});
            } else if($(this).parents('.port_wrap.port03').hasClass('on')) {
                $('body').css({'background':'#80cbc4','transition':'background .6s'});
            } else {
                $('body').css({'background':'#f48fb1','transition':'background .6s'});
            }
        });
    });
    
    // 구직중 반복
    // function textTransform() {
    //     var count = Math.round($('body').width() / $('.bottom span').width());
    //     for(var i =0; i <= count; i++) {
    //         $('.bottom').append('<span>구직중입니다.</span>');
    //     };
    // };
    // textTransform();
    // $(window).resize(textTransform());
});