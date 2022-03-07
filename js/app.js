$(function(){
  //スライド
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1119,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  //メニュー表示・非表示
  $(".open1").on('click', function(){
      $(".menu1").slideToggle();
    });

  $(".open2").on('click', function(){
    $(".menu2").slideToggle();
  });

  $(".open3").on('click', function(){
    $(".menu3").slideToggle();
  });

  //フェードイン
  $(window).scroll(function(){
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".fade-box").each(function(){
      const targetPosition = $(this).offset().top;
      if(scroll > targetPosition - windowHeight + 100){
        $(this).addClass("fadein")
      }
    });
  });

});