//커서
$(".cursor img").hide();

$("body").hover(function(){
    $(".cursor .cur").show();
}, function(){
    $(".cursor .cur").hide();
});

$("a, button").hover(function(){
    $(".cursor .pointer").show();
    $(".cursor .cur").hide();
},function(){
    $(".cursor .pointer").hide();
    $(".cursor .cur").show();
});

$(document).mousemove(function(e) {
    $(".cursor").css({"left" : e.pageX+3,"top" : e.pageY});    
});

//패럴럭스
$("#nav ul li").click(function(){
    let cont = $(".cm");
    let target = $(this);
    let index = target.index();
    let section = cont.eq(index);
    let offset = section.offset().top;
    $("html, body").animate({ scrollTop:offset }, 600);
});
$(".snav ul li").click(function(){        
    let cont = $(".cm");
    let target = $(this);
    let index = target.index();
    let section = cont.eq(index);
    let offset = section.offset().top;
    $("html, body").animate({ scrollTop:offset }, 600);
});

//애니메이션
$(document).ready(function() {
    $(window).scroll(function(){
        const scrollTop = $(window).scrollTop()+$(window).height()/3;

        $("section").each(function(){
            if(scrollTop > $(this).offset().top) {
                $(this).addClass("show");
            }
        });
        $(".cont03 .site-wrap").each(function(){
            if(scrollTop > $(this).offset().top) {
                $(this).addClass("show");
            }
        });

        //기프트 게이지
        let lotto = $(window).scrollTop();
        $(".bargauge").width(lotto/11);

        if(lotto >= 2000) {
            $(".gift-left p:first-child").removeClass("on");
            $(".gift-left p:nth-child(2)").addClass("on");
        } else {
            $(".gift-left p:first-child").addClass("on");
            $(".gift-left p:nth-child(2)").removeClass("on");
        };

        if(lotto >= 7500) {
            $(".gift-left p:nth-child(2)").removeClass("on");
            $(".gift-left p:nth-child(3)").addClass("on");
        } else {
            $(".gift-left p:nth-child(3)").removeClass("on");
        };

        if(lotto >= 12500) {
            $(".gift-left p:nth-child(3)").removeClass("on");
            $(".gift-left p:nth-child(4)").addClass("on");
            $(".lottoBox").css("display","none");
            $(".giftcontainer").css("display","block");
        } else {
            $(".gift-left p:nth-child(4)").removeClass("on");
            $(".giftcontainer").css("display","none");
            $(".lottoBox").css("display","block");
        };
    });
});

//서브메뉴 클릭
$(".sub-icon").click(function(){
    $(this).toggleClass("on");
    $("#smenu").slideToggle(300);
    $(".snav ul li").click(function(){
        $("#smenu").slideUp();
        $(".sub-icon").removeClass("on");
    });    
});

//사이트 소스 보기
$(".cont03 > div").each(function(index){
    $(this).find(".tab-wrap").attr("data-num",index);
    $(this).find(".tab-wrap").addClass("num"+index)
    
    $(".tab-btn > ul > li").click(function(e){
        e.preventDefault();
        let target = $(this);
        let num = target.parent().parent().parent().attr("data-num");
        let index = target.index();

        $(".tab-wrap.num"+num+" .tab-btn > ul > li").removeClass("active");  
        target.addClass("active");  
        
        $(".tab-wrap.num"+num+" .tab-cont > div").css("display","none");
        $(".tab-wrap.num"+num+" .tab-cont > div").eq(index).css("display","block");  
    });            
});

//다크 모드
$(".toggle-item").click(function(e){
    e.preventDefault("a");            
    let target = $(this);
    let num = target.parent().parent().parent().parent().attr("data-num");

    $(".tab-wrap.num"+num+" .tab-cont > div .language-js").toggleClass("on");
    $(".tab-wrap.num"+num+" .tab-mode").toggleClass("on");
});

//탭 바
let tabBar = $(".tabBar > ul > li");
let contBox = $(".contBox");

contBox.hide().eq(0).show();

tabBar.click(function(){
    let target = $(this);
    let index = target.index();
    
    tabBar.removeClass("show");
    target.addClass("show");
    contBox.css("display","none");
    contBox.eq(index).css({"display":"block","display":"grid"});
});

//애니메이션 슬라이드
$(".aniBox .iframe .frame-box").hide();
$(".aniBox .iframe img").click(function() {
    $(this).toggleClass("on")
    $(this).next(".frame-box").slideToggle(400);
});

//복권
(function() {
  
    'use strict';
    var isDrawing, lastPoint;
    var container    = document.getElementById('js-container'),
        canvas       = document.getElementById('js-canvas'),
        canvasWidth  = canvas.width,
        canvasHeight = canvas.height,
        ctx          = canvas.getContext('2d'),
        image        = new Image(),
        brush        = new Image();
        
    image.src = 'https://tistory1.daumcdn.net/tistory/3795912/skin/images/gift.png';
    image.onload = function() {
        ctx.drawImage(image, 0, 0, 315, 70);

        document.querySelectorAll('.giftImg')[0].style.visibility = 'visible';
    };
    brush.src = 'data:image/png;base64,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';

    canvas.addEventListener('mousedown', handleMouseDown, false);
    canvas.addEventListener('touchstart', handleMouseDown, false);
    canvas.addEventListener('mousemove', handleMouseMove, false);
    canvas.addEventListener('touchmove', handleMouseMove, false);
    canvas.addEventListener('mouseup', handleMouseUp, false);
    canvas.addEventListener('touchend', handleMouseUp, false);

    function distanceBetween(point1, point2) {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }

    function angleBetween(point1, point2) {
        return Math.atan2( point2.x - point1.x, point2.y - point1.y );
    }

    function getFilledInPixels(stride) {
        if (!stride || stride < 1) { stride = 1;}
        
        var pixels   = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
            pdata    = pixels.data,
            l        = pdata.length,
            total    = (l / stride),
            count    = 0;
        
            for(var i = count = 0; i < l; i += stride) {
            if (parseInt(pdata[i]) === 0) {
                count++;
            }
        }
        
        return Math.round((count / total) * 100);
    }

    function getMouse(e, canvas) {
        var offsetX = 0, offsetY = 0, mx, my;

        if (canvas.offsetParent !== undefined) {
        do {
            offsetX += canvas.offsetLeft;
            offsetY += canvas.offsetTop;
        } while ((canvas = canvas.offsetParent));
        }

        mx = (e.pageX || e.touches[0].clientX) - offsetX;
        my = (e.pageY || e.touches[0].clientY) - offsetY;

        return {x: mx, y: my};
    }

    function handlePercentage(filledInPixels) {
        filledInPixels = filledInPixels || 0;
        console.log(filledInPixels + '%');
        if (filledInPixels > 50) {
        canvas.parentNode.removeChild(canvas);
        }
    }

    function handleMouseDown(e) {
        isDrawing = true;
        lastPoint = getMouse(e, canvas);
    }

    function handleMouseMove(e) {
        if (!isDrawing) { return; }
        
        e.preventDefault();

        var currentPoint = getMouse(e, canvas),
            dist = distanceBetween(lastPoint, currentPoint),
            angle = angleBetween(lastPoint, currentPoint),
            x, y;
        
        for (var i = 0; i < dist; i++) {
        x = lastPoint.x + (Math.sin(angle) * i) - 25;
        y = lastPoint.y + (Math.cos(angle) * i) - 25;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.drawImage(brush, x, y);
        }
        
        lastPoint = currentPoint;
        handlePercentage(getFilledInPixels(32));
    }

    function handleMouseUp(e) {
        isDrawing = false;
    }
})();