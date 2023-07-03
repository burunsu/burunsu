window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}
window.onpageshow = function(event) {
  if (event.persisted) {
    window.location.reload();
  }
};
let nav = document.querySelector("#navArea")
let btn = document.querySelector(".toggle-btn")
let msk= document.querySelector("#mask")

btn.onclick = () => {
  nav.classList.toggle("open");
}

mask.onclick = () => {
  nav.classList.toggle("open");
}
console.log('Hello World!');
$(window).on('load', function() {
  $("#splash-logo").delay(1200).fadeOut('slow'); //ロゴを1.2秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1500).fadeOut('slow', function() { //ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

    $('body').addClass('appear'); //フェードアウト後bodyにappearクラス付与

  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function() {
    //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる

});