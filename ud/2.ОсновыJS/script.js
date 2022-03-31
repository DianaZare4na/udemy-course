"use strict";
//26.Динамическая типизация в js
//to string 
//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(5 +''));
console.log(typeof(null +''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';
//To number

//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'4'));

//3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt("Hello", "");

//To boolean

//0, '', null, undefined, NaN; - это всегда false
//1)

switcher = null;

if(switcher){
   console.log('Working...');
}

switcher = 1;

if(switcher){
   console.log('Working...');
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!'444'));

//27. задачи с собеседований на понимание основ

//1
let x = 5; alert( x++ ); //сначала вернет 5 а потом 6
let x = 5; alert( ++x ); // вернет 6

//2
[ ] + false - null + true;

console.log([ ] + false - null + true) //NaN

//3
let y = 1;
let x = y = 2;
alert(x);

//4
console.log([] + 1 + 2)// 12 строка

//5
alert("1"[0])//1 

//6
console.log(2 && 1 && null && 0 && undefined) //null "и" запинаеться на лжи, или запинаеться на правде

//7 
console.log(!!(1 && 2) === (1 && 2 ));//false

//8       3        3     3
alert( null || 2 && 3 || 4);//3

//9
const a = [1,2,3];
const b = [1,2,3]; // a не == b

//10
alert(+"infinity"); //infinit тип данных число

//11
console.log("Ёжик" > "яблоко"); //false

//12
console.log(0 || '' || 2 || undefined || false) //2



