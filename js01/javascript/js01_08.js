let x = 5; //숫자형 (number)
let y = "five"; //문자형(string)
let isTrue = true; //불린형(Boolean)
let empty = null; // null
let nothing; // undefined
let sym = Symbol("me"); // Symbol

let item = {
  price: 5000,
  count: 10,
}; // 객체(Object)
let fruits = ["apple", "orange", "kiwi"]; //배열 (array)
let addFruits = function (fruit) {
  fruits.push(fruit);
}; // 함수(function)
addFruits("watermelon");
console.log(fruits);
