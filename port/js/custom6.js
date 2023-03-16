function imagesProgress(){
    var $container = $("#progress"),
        $progressText = $container.find(".progress-text"),
        imgLoad = imagesLoaded("body"),	
        imgTotal = imgLoad.images.length,	
        imgLoaded = 0,										
        current = 0,							
        progressTimer = setInterval(updateProgress, 2000 / 60);	

        imgLoad.on("progress", function(){
            imgLoaded++;
        });

    function updateProgress(){
        var target = ( imgLoaded / imgTotal) * 100;

        current += ( target - current) * 0.1;
        $progressText.text( Math.floor(current) + '%' );

        if(current >= 100){
            clearInterval(progressTimer);
            $container.animate({opacity: '0'},1500,'easeInOutQuint').animate({top: '-100%'},1500); 

            gsap.to(".main .main-left h2 span", {opacity: 1, y: 0, duration: 2.5, delay: 2, stagger: 0.1, ease: "elastic.out(1, 0.3)"});
            gsap.to(".main .main-left p span", {opacity: 1, duration: 0.1, delay: 3.5, stagger: 0.06});
            gsap.to(".img-wrap .heart", {opacity: 1, duration: 0.5, delay: 3});
            gsap.to(".img-wrap .monkey", {opacity: 1, duration: 0.5, delay: 3.4});
            gsap.to(".img-wrap .duck", {opacity: 1, duration: 0.5, delay: 3.8});
            gsap.to("#header", {top: 0, opacity: 1, duration: 1.5, delay: 4});
            gsap.to(".gift", {left: 0, duration: 0.7, delay: 4});
        }
        if(current > 99.9){
            current = 100;
        };
    };
};

imagesProgress();

$(".splice").each(function () {
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
});

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
        $(".bargauge").width(scrollTop/8);

        if(scrollTop<2000) {
            $(".gift").css("background","#F1EFE6");
        };
        if(scrollTop >= 2000) {
            $(".gift-left p:first-child").removeClass("on");
            $(".gift-left p:nth-child(2)").addClass("on");
            $(".gift").css("background","#FFF4C5");
        } else {
            $(".gift-left p:first-child").addClass("on");
            $(".gift-left p:nth-child(2)").removeClass("on");       
        };
        if(scrollTop >= 7500) {
            $(".gift-left p:nth-child(2)").removeClass("on");
            $(".gift-left p:nth-child(3)").addClass("on");
            $(".gift").css("background","#FFF0AB");
        } else {
            $(".gift-left p:nth-child(3)").removeClass("on"); 
        };
        if(scrollTop >= 13000) {
            console.log(scrollTop);
            $(".gift-left p:nth-child(3)").removeClass("on");
            $(".gift-left p:nth-child(4)").addClass("on");
            $(".gift").css("background","#F1EFE6");
            $(".clickMe").css("opacity","1");
        } else {
            $(".gift-left p:nth-child(4)").removeClass("on");
            $(".clickMe").css("opacity","0");
            $(".modal").removeClass("on")
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

//다이렉트 콜
$(".clickMe").click(function(){
    $(".modal").addClass("on");
});

$(".modalHead .close").click(function(){
    $(".modal").removeClass("on");
});