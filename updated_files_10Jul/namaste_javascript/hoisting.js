// console.log(x)
// getName()
// var x = 2;
// function getName(){
//     console.log("Namaste javascript");
// }
// o/p : 
// undefined
// Namaste javascript

// console.log(x)
// console.log(getName)
// var x = 2;
// function getName(){
//     console.log("Namaste javascript");
// }

// // o/p: 
// // undefined
// // [Function: getName]

console.log(x) // undefined
console.log(getName) // return full function
var x = 2;  
function getName(){
    console.log("Namaste javascript");
}

console.log(getName1); // undefined (treat like variable)
console.log(getName2); // undefined (treat like variable)

var getName1 = function (){
    console.log("Namaste javascript");
}
var getName2 = () => {
    console.log("arrow function");
}

// ==============================================================

function newFun() {
  for (let i = 1; i <= 5; i++) { // i is declared with let so it is block scope and give new value in each iteration
    setTimeout(() => {
        console.log(i)
    }, 1000); 
  }  
  console.log("Namaste javascript");
  
}
newFun()
// o/p: 
// 0
// 1
// 2
// 3
// 4
// 5

function newFun1() {
  for (var i = 1; i <= 5; i++) { // i is declared with var so it is function scope and give old value in each iteration
    setTimeout(() => {
        console.log(i)
    }, 1000); 
  }  
  console.log("Namaste javascript");
  
}
newFun1()
// o/p : 
// 6
// 6
// 6
// 6
// 6

// use var and show it in sequence (using closure)
function newFun2() {
  for (var i = 1; i <= 5; i++) { 
    function close(i) {
        setTimeout(() => {
            console.log(i)
        }, 1000); 
    }
    close(i) // when we invoke this function it creates new copy of i so it gives proper response due to closure
  }  
  console.log("Namaste javascript");
  
}
newFun2()
// o/p:
// 1
// 2
// 3
// 4
// 5