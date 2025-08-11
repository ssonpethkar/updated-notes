// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
let arr=[,,,,] 
console.log(arr.length) //4

let arr1=[1,2,3,5]
console.log(arr1.length) //4
let arr2=[[1,3],[3,5]]
console.log(arr2.length) //2


let arr3 = [5,7,6,9,1,3]
let sortArr= arr3.sort((a,b)=>b-a)
console.log(sortArr) //[ 9, 7, 6, 5, 3, 1 ]
console.log(arr3) // [ 9, 7, 6, 5, 3, 1 ]

let mapArr3= arr3.map((item) => item*2)
console.log(mapArr3) // [ 18, 14, 12, 10, 6, 2 ]

console.log(arr3) // [ 9, 7, 6, 5, 3, 1 ]
let mapArr4= arr3.map((item) => item>7)
console.log(mapArr4) // [ true, false, false, false, false, false ]

let mapArr5= arr3.filter((item) => item>7)
console.log(mapArr5) //[ 9 ]

let mapArr6= arr3.reduce((item) => item>7)
console.log(mapArr6) 

// remove duplicates
let arr4 = [1,2,3,4,5,6,6,5]
let uniqueArr= [...new Set(arr4)]
console.log(uniqueArr) // [ 1, 2, 3, 4,


function abc(a,b,c) {}
function pqr(a=0,b,c) {}
console.log(abc.length,pqr.length); //3,0

// In JavaScript, arrays are objects, and object comparison checks by reference, not by value.
// console.log([]===[]); //false
// console.log([]==[]); // false

// first element on every word should be capital and print in new line
let str = "this is swati sonpethkar"
let words = str.split(" ");
let newStr = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1) ).join("\n");
console.log(newStr);
// This
// Is
// Swati
// Sonpethkar

console.log(NaN===NaN); // false
console.log(NaN==NaN); // false


var a=10;
console.log(++a); //11 (pre increment)
console.log(a++); //11 (post increment)
console.log(a); //12

var c=10;
console.log(c++); //10 (post increment after the line execution it will reflect the increment)
console.log(a); //11

// const b=10;
// console.log(++b); //TypeError: Assignment to constant variable.
// console.log(b++); 
// console.log(b); 


function check() {
    return 100
}
var check;
console.log(check); //[Function: check]




// package.json vs package-lock.json
// dev dependencies vs normal dependencied 
// transitive dependencies 
// tield operator vs carrot operator
// polyfill
// let const
// how we can handle asynchronous
// first class function
// destructuring 
// phases of event propogation
// event targeting

