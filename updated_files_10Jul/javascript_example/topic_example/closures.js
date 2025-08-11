// <!-- closure : Closure is a javascript function that can accessed outer function variable in their inner function if the outer function has finished the execution  -->

function outerFunc(){
    var count = 0;
    return function innerFun(){
        count++;
        console.log(count);
    }
}

var counter = outerFunc()
counter() 
counter()
counter()
// o/p : 
// 1
// 2
// 3

function createCounter(){
    var count = 0; 
    return {
        increment: function(){
            count++
            console.log("incremented count : "+ count)
        },
        decrement: function(){
            count--;
            console.log("Decremented count: "+ count)
        },
        getCount: function(){
            console.log("Count : "+ count)
        },
        getCount1: function(){
            console.log("Count : "+ count)
            return count;
        }
    }
}

var counterN = createCounter()
counterN.increment() 
counterN.increment() 
console.log(counterN.getCount()) 
console.log(counterN.getCount1())
counterN.decrement()

// <!-- o/p : -->
// <!-- incremented count : 1
// incremented count : 2
// Count : 2
// undefined
// Count : 2
// 2
// Decremented count: 1 -->