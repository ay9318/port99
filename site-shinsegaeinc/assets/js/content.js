AOS.init();

$(function(){
	//nav
	$(".sub_nav_wrap").hide();
	$(".gnb > li").each(function(){
		$(this).mouseover(function(){
			$(this).addClass("active");
			$(this).children(".sub_nav_wrap").show();
			$(".dim").show();
		});
		$(this).mouseleave(function(){
			$(this).removeClass("active");
			$(this).children(".sub_nav_wrap").hide();
			$(".dim").hide();
		});
	});
	//search
	$(".btn_close").hide();
	$(".search").on("click",function(){
		$(this).toggleClass("close");
		if($(this).hasClass("close")) {
			$(".search_box").show();
			$(".btn_serach").hide();
			$(".btn_close").show();
			$(".dim").show();
		} else {
			$(".search_box").hide();
			$(".btn_close").hide();
			$(".btn_serach").show();
			$(".dim").hide();
		}
	});
	//language
	$(".header ul.sub_menu li.down_drop ul").on('click',function(){
		$(this).css("opacity","1");
	});
	$(".header ul.sub_menu li.down_drop ul").on('mouseleave',function(){
		$(this).css("opacity","0");
	});
	
	//글자 쪼개기
	$("#intro .text_wrap p").each(function(){
		let txt = $(this).text();
		let split = txt.split("").join("</span><span aria-hidden='true'>");
		
		split = "<span aria-hidden='true'>" + split + "</span>"
		$(this).html(split).attr("aria-lable", txt);
	});

	//인트로 애니메이션		
	gsap.to("#intro .text_wrap p span", {opacity: 1, duration: 1.2, stagger: 0.03});
	gsap.to("#intro .text_wrap .btn_wrap", {opacity: 1, duration: .8, delay: 1.2, bottom: "-10px"});

	let scrollTop = $(window).scrollTop();
	$(window).scroll(function(){				
		let offsetTop = $(window).scrollTop();
		//header
		if(scrollTop >= offsetTop) {
			$("#header").css("top","0");
			$(".sub_nav_wrap").css({"top":"102px"});
			$(".search_box").css({"top":"102px"});
		} else {
			$("#header").css("top","-102px");
			$(".sub_nav_wrap").css({"top":"0"});
			$(".search_box").css({"top":"0"});
		}
		scrollTop = offsetTop;
		
		//bar animation
		if($(window).scrollTop() >= 10) {
			$("#wrap").addClass("scrollDown");
		} else {
			$("#wrap").removeClass("scrollDown");
		};
		
		//text active
		$("#about .desc").each(function(){
			let scrollTop = $(window).scrollTop() + $(window).height() / 2;
			if(scrollTop >= $(this).offset().top) {
				$(this).addClass("active");
				$(this).siblings(".desc").removeClass("active");
			} else {						
				$(this).removeClass("active");
			}
		});
	})
});