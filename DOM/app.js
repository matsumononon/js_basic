//getElementByClassName

let date = new Date();
let hoge = document.getElementById('hoge');
hoge.textContent = date.toLocaleDateString();

//getElementsByTagName

let list=
    document.getElementsByTagName('a');
console.log(list);
console.log(list.length);
//lengthで、配列の中身の数を取得できる。

//getElementsByTagName で取得したaタグのhrefのURLを全件consoleに表示する処理を書いてみる

console.log(list[0].href);
//↑amazonのurlのみ配置
//↓回答
for (let i=0; i <list.length; i++){
  console.log(list[i].href);
}
//連想配列と繰り返し処理

//イベントハンドラー
function btna_click(){
  window.alert('ボタンAがクリックされた');
}