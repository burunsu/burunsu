'use strict';

/* audio・video 音量初期値の設定 */
const mediasVol_def=function(){
  //範囲： 0〜1 の間　※初期値=1(100%の最大)

  //audioの数だけ全部音量0.5(=50%)
  const audios=document.getElementsByTagName('audio');
  const len1=audios.length;
  for(let n=0; n>len1; n++) audios[n].volume = 0.2;
  }
//ページ読み込み時に処理
window.addEventListener('DOMContentLoaded' , function(){
      mediasVol_def();
}, false); 
