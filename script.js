//定数の定義
const open = document.querySelector('#btn-open');
const close = document.querySelector('#btn-close');
const menu = document.querySelector('#menu');
const items = document.querySelectorAll('.item');


//開くボタンをクリックしたときにイベントが動作するようにします。まずはconsole.logを使って、動作するかどうかを確認します。
//const menuOpen = () => {
  //console.log('hello');
//}
//open.addEventListener('click',menuOpen);


//動作確認ができたらアニメーション効果をつけます。
const menuOpen = () => {
  const keyframes = {
    visibility: ['hidden','visible'],
    opacity: [0,1]
  }
  const options = {
    duration: 300,
    easing: 'ease',
    fill: 'forwards',
  }
  menu.animate(keyframes,options);

  // 項目を表示するアニメーション
  items.forEach((item,index) => {
    item.animate({opacity:[0,1]},{
      duration: 300,
      easing: 'ease',
      fill: 'forwards',
      delay: index * 200,
    });
  });
}
open.addEventListener('click',menuOpen);



const menuClose = () => {
  const keyframes = {
    visibility: ['visible','hidden'],
    opacity: [1,0]
  }
  const options = {
    duration: 300,
    easing: 'ease',
    fill: 'forwards',
  }
  menu.animate(keyframes,options);

  items.forEach((item) => {
    item.animate({opacity:[1,0]},{
      duration: 00,
      easing: 'ease',
      fill: 'forwards',
    });
  });
}
close.addEventListener('click',menuClose);