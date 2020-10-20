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