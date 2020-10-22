// ドロワーメニュー
$('.hamburger-btn').on('click',function(){
  $('.close').fadeToggle();
  $('.menu').fadeToggle();
});



// ヘッダーが上からフェードイン
$(window).scroll(function(){
  $('.fadein-down').each(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 0){
      $(this).addClass('fadein');
    }else if (scroll == 0){
      $(this).removeClass('fadein');
    }
  });
});

// 画面幅を変えた時、もしくはリロードした際に画面幅を測定してレスポンシブ可動化を判定。レスポンシブだった場合起動。
$(window).resize(function() {
  windowWidth = $(window).width();
  if (windowWidth <= 560){
    $('.slick').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      arrows:false,
      dotsClass: 'slide-dots'
    });
    $('.slick1').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      arrows:false,
      dotsClass: 'slide-dots'
    });
  } else{
    $('.slick').slick('unslick');
    $('.slick1').slick('unslick');
  }
});
