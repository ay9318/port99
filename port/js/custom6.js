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
    $(".cursor").css({"left" : e.pageX+3,"top" : e.pageY-15});    
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
        } else {
            $(".gift-left p:nth-child(4)").removeClass("on");
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
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var width = 400;
var height = 250;

init()
function init() { 
    context.fillStyle = '#ddd';
    context.fillRect(0, 0, width, height); 
    canvas.style.background = 'url("https://www.kkkk1000.com/images/globalCompositeOperation/bg3.jpg") no-repeat center';
    canvas.style.backgroundSize = "100% 100%";

    context.lineWidth = 35;
    // 设置线交汇时，是圆角的
    context.lineJoin = "round";
}



canvas.addEventListener('mousedown', mouseDown, false);
canvas.addEventListener('mousemove', mouseMove, false);
canvas.addEventListener('mouseup', mouseUp, false);

/* 如果需要移动端也可以生效，
需要绑定touchstart、touchmove、touchend 事件，并且获取触摸点的坐标
*/
//canvas.addEventListener('touchstart', mouseDown, false);
//canvas.addEventListener('touchmove', mouseMove, false);
//canvas.addEventListener('touchend', mouseUp, false);


// 判断是否可以画线
var isDrawing; 
// 保存开始画线时，线的起点的X坐标
var startX=0;
// 保存开始画线时，线的起点的Y坐标
var startY=0; 

// 按下鼠标按钮时，调用mouseDown
function mouseDown(e){
     isDrawing = true;
     // 保存鼠标点击时 X坐标为，画线时，线的起点的X坐标
     startX = e.layerX;
     // 保存鼠标点击时 Y坐标为，画线时，线的起点的Y坐标
     startY = e.layerY;

     /* 移动端使用下面的方法 获取 startX 和 startY
     startX = e.touches[0].clientX;
     startY = e.touches[0].clientY;
     */
}

// 鼠标移动时，调用mouseDown
function mouseMove(e){
    if(isDrawing){
    // 获取鼠标相对于 canvas 的坐标
    var x = e.layerX;
    var y = e.layerY;

    /* 移动端使用下面的方法 获取 x 和 y
    var x = e.touches[0].clientX;
    var y = e.touches[0].clientY;
    */ 
    context.globalCompositeOperation = "destination-out"; 

    // 开始画线
    context.beginPath();
    // 起点坐标为 startX 和 startY
    context.moveTo(startX, startY);
    // 结束的坐标为这次移动时的坐标
    context.lineTo(x, y);
    context.closePath(); 
    context.stroke();

    // 设置这次移动结束时的坐标，为下次开始画线时的坐标
    startX = x;
    startY = y; 
    } 
}

// 松开鼠标按钮时，调用的事件
function mouseUp(e){
    // isDrawing 为false时，不可以画线
    isDrawing = false;
    // 获取图片像素信息
    var data = context.getImageData(0, 0, width, height).data;
    console.log("图片像素信息",data); 
    var length = data.length;
    var k = 0;

    // 如果一个像素是透明的（值都是0），k就+1
    for (var i = 0; i < length - 3; i += 4) {
        if (data[i] == 0 && data[i + 1] == 0 && data[i + 2] == 0 && data[i + 3] == 0) {
            k++;
        }
    }

    // 当k > width*height*0.2 时，
    // 也就是说有20%的面积是透明的时，就把整个canvas的背景显示出来
    if(k>width*height*0.2){
         context.fillStyle = "blue";
         context.fillRect(0, 0, width, height);
    }
}