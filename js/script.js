// ドロワーメニュー
$('.hamburger-btn').on('click',function(){
  $('.close').fadeToggle();
  $('.menu').fadeToggle();
});



// ヘッダー
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


// $(window).resize(function() {
//   windowWidth = $(window).width();
//   if (windowWidth <= 560){
//     $('.slick').slick();
//   }
// });

// window.onload = function() {
//   windowWidth = $(window).width();
//   if (windowWidth <= 560){
//     $('.slick').slick();
//   }
// };
$(function(){
  $('.slick').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    arrows:false,
    dotsClass: 'slide-dots'
  });
});
$(function(){
  $('.slick1').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    arrows:false,
    dotsClass: 'slide-dots'
  });
});