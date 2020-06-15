 var mySwiper = new Swiper ('#banner .swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 5000,
    },
    infinite: true
  });
  
  var mySwiper2 = new Swiper('#fbanner .swiper-container', {
    slidePerView: 3,
    scrollbar: {           
      el: '.swiper-scrollbar',            
    },
  });
