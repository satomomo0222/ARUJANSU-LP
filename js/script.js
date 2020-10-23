// ドロワーメニュー
$('.hamburger-btn').on('click',function(){
  $('.close').fadeToggle();
  if($(".menu").hasClass("active")){
    $(".menu").removeClass("active");
  } else{
    $(".menu").addClass("active");
  }
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

// fadein-up
$(window).scroll(function(){
  $('.fadein-up').each(function(){
    var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight +100){
      $(this).addClass('fadein');
    }
  });
});


// ラインアニメーション
$(window).scroll(function(){
  $('#lineanimation').each(function(){
    var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight +0){
      $(this).addClass('long');
    }
  });
});

// $(window).scroll(function(){
//   $('.panel-fadein').each(function(){
//     var elemPos = $(this).offset().top,
//         scroll = $(window).scrollTop(),
//         windowHeight = $(window).height();
//     if (scroll > elemPos - windowHeight +100){
//       $(this).addClass('fadein');
//     }
//   });
// });
$(window).scroll(function(){
  $('.slick').each(function(){
    var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight +100){
      $(this).addClass('fadein');
    }
  });
});


// 画面幅を変えた時、もしくはリロードした際に画面幅を測定してレスポンシブ可動化を判定。レスポンシブだった場合起動。
var mql = window.matchMedia('screen and (max-width: 560px)');
function checkBreakPoint(mql) {
  if (mql.matches) {
    // スマホ向け（560px以下のとき）
    $('.slick').not('.slick-initialized').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      arrows:false,
      dotsClass: 'slide-dots'
    });
    $('.slick1').not('.slick-initialized').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      arrows:false,
      dotsClass: 'slide-dots'
    });
  } else {
    // PC向け
    $('.slick.slick-initialized').slick('unslick');
    $('.slick1.slick-initialized').slick('unslick');
  }
}
// ブレイクポイントの瞬間に発火
mql.addListener(checkBreakPoint);
// 初回チェック
checkBreakPoint(mql);


// ページ内スクロール
$(function() {
  // スクロールのオフセット値
  var offsetY = -10;
  // スクロールにかかる時間
  var time = 500;
  // ページ内リンクのみを取得
  $('a[href^="#"]').click(function() {
    if($(".menu").hasClass("active")){
      $('.close').fadeToggle();
      $(".menu").removeClass("active");
    }
    // 移動先となる要素を取得
    var target = $(this.hash);
    if (!target.length) return;
    // 移動先となる値
    var targetY = target.offset().top+offsetY;
    // スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, 800, 'swing');
    // ハッシュ書き換えとく
    window.history.pushState(null, null, this.hash);
    // デフォルトの処理はキャンセル
    return false;
  });
});




