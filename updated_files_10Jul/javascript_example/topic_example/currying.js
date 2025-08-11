// <!-- currying breaks down a function that takes multiple parameter into chain function that each take one parameter  -->

// <!-- normal function  -->
function sum(a,b){
    return a+b ;
}
console.log(sum(3,10));

// <!-- CURRIED FUNCTION -->
function curriedFunc(a){
    return function(b){
        return a+b;
    }
}

console.log(curriedFunc(2)(3))