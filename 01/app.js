//コメントアウト
console.log('------consolelog-----------');
console.log('---------hoge-----------');

console.log('----------四則演算---------');
console.log(1+1);
console.log(5-2);
console.log(5*2);
console.log(5/2);
console.log(5%2);
//数字を打ち込む時は’’で囲わない。数字としての性質を失う
console.log('--------文字列連結------------');
console.log('ふじなみ'+'たいじゅ');

console.log('-----------変数----------');
//変数とは、データを入れるための箱。
//箱の名前→変数名
//変数を使用する理由
//①変更に対応しやすい
//②同じ値を繰り返し使える
//③値の意味がわかりやすい


//変数の宣言　let
let name ='はしもと';
console.log(name);
console.log(name);
console.log(name);
console.log(name);

//複数のものを一気に変更可能
//代入ができる
let num = 2;
console.log(num);
num + num + 2;
console.log(num);
num +=2;　
//変数を使った省略形
console.log(num);

//定数
const age =20;
console.log(age);

console.log(`私の年齢は、${age}歳です。`);
//バックコーテーションを使う


console.log('-------------条件分岐--------------');
console.log('-------if文----------');
//if(条件式){
//   処理;
//   }

let int = 5;
if(int > 3){
  console.log(`${int}は3より大きいです`);
}

//true もしくは false で返す
//真偽値

//比較演算子
//<, <=, >, >=, ===, !==,

//論理演算子
//&&(OOかつOO),||(OOもしくはOO)

console.log('----else if-------------');
if(int>=10){
  console.log(int + 'は10以上です');
}else if(int > 3){
  console.log(int + 'は３より大きいです')
}
else{
  console.log(int + 'は3以下です')
}

console.log('switch文------------');
let signal = 'green';
switch (signal){
  case 'red':
    console.log('止まれ');
    break;
  case 'green':
    console.log('進め');
    break;
  default:
    console.log('その他');
    break;
}

console.log('繰り返し処理-------------');
console.log('for-----------------');
//for(変数の定義;条件式;変数の更新){処理}
for (let i = 1; i<= 10; i++){
  console.log(i);
}

console.log('while--------------------');
//while(ループから抜ける条件　ex変数が〜〜に達したら){
//consol.logで何かを表示 console.log(変数);
//増やすor減らす ex i++; or i--;
//}
let j = 11;
while(j <= 20){
  console.log(j);
  j++;
}
//これを使って、ブログなどの表示数を決められる
 console.log('繰り返しと条件分岐を組み合わせてできるfizzbuzz問題-----------');
//3の倍数はfizz
//5の倍数はbuzz
//3と5の倍数はfizbuzz

let num2 = 30;
//1-num2の値になるまで、続ける。
console.log('??????????????');

//答え

for(i = 1; i <= num2; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log('fizzbuzz');
  }else if(i % 3 == 0){
    console.log('fizz');
  }else if(i % 5 == 0){
  console.log('buzz');
  }else{
  console.log(i); 
  }
}
//num=ナンバー（任意）
//int=整数のみ intenger(整数)の場合が多い？


console.log('-------------関数-------------');
//関数とは
//→複数の処理をまとめたもの
//function 関数名(){処理}
//関数は変数に代入することもできる

//function greeting(){
//  console.log('おはよう');
//}

//↑これだけでは何も起きない
//↓関数を呼び出してあげる

//greeting();

//変数名も、関数も、キャメルケースにする
//(複数からなる単語の始まりを大文字に)
// ex let schoolName

console.log('-----------引数------------------');
function greeting(say){
  console.log('さとうさんが '+ say + 'と言っています');
}

greeting('こんちは〜');

console.log('ローカル変数------------------');

function local(){
  let hoge = '私の名前は' + name + 'です';
  return hoge;
  //returnとは　結果を返すこと
}
// {}内で変数を宣言すると、その{}内でしか反映されない

console.log(local('くによし'));
//console.log(hoge);


console.log('----------配列--------------');
//配列　= グループ化されたデータ
//[値1,値2]
//変数が箱だとしたら、配列はタンス
//配列を決める！↓console.log で表示！
let studentList = ['橋本さん' ,'三宅さん' ,'さとうさん'];
console.log(studentList);
//配列は０番目からスタートする

console.log(studentList[1]);
//↑2番目だけ表示

console.log(studentList[1] = '藤並さん');
console.log(studentList);
//指定部分を入れ替え

studentList.push('松島さん');
console.log(studentList);
//末尾に追加

studentList.pop(); //末尾を削除
studentList.shift();//先頭の値を削除
console.log(studentList);

console.log('---------連想配列---------');
//タンス一段一段に名前（ラベル＝キー）をつける

//{キー1:値1 ,キー2:値2}

//配列を決める！
//console.logで表示！
let user ={
  food:'ラーメン',
  age:50,
  from:'沖縄'
};

console.log(user);
console.log(user['food']);

let user2 ={
  food:'焼きそば',
  age:40,
  from:'大阪'
};

console.log(user2);
console.log(user2['food']);

console.log('--------------二次元配列-----------')
let users = [user, user2];
console.log(users);

//沖縄が0番目、大阪が1番目になる

console.log(users[0]['from']);

//↑↓どっちのやり方でも可！

console.log(users[0].food);
//連想配列(オブジェクト)はピリオド　.　でつなぐことができる

console.log('-----------メソッド----------');
let user3 = {
  food:'寿司',
  age:20,
  from:'千葉',
  greet:function(name){//メソッド
  console.log('私の名前は '+ name + 'です。'
  +this.from + 'からきました。');
}
}
user3.greet('斎藤');

console.log('日付-------------------------------');
let date = new Date();
console.log(date);

console.log('')
console.log('DOM---------------------------------');
//jsからhtmlにアクセスするための様々な命令のこと
//jsからhtmlをいじる！

let test = document.getElementById('test');
test.style.color = 'blue';
//カラーの変更
console.log(test);

test.className= 'addlass';
//クラスの追加

test.textContent = '変更します';
//コンテンツの変更

console.log('イベント----------------------');
//cssだったらホバーとかクリックとかのことをイベントという
document.getElementById('btn').addEventListener(
  'click',function(){
    let tag = document.createElement('p');
    let text = document.createTextNode('Hello js');
    document.body.appendChild(tag).appendChild(text);    
  })