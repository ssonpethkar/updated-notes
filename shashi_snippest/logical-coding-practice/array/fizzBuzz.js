// Write a program that prints the numbers from 1 to 100
// But for multiples of three, print "Fizz" instaed of the number
// For the multiples of fivem print "Buzz".
// For numbers which are multiples of both three and five, print "FizzBuzz"
//If it is none of the above print the number

// for (let i = 1; i < 50; i++) {
//     if ( i % 15 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else if(i % 3 == 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }

// shorter syntax

for (let j = 1; j < 50; j++) {
    console.log((j%3 ? '' : 'Fizz') + (j%5 ? '': 'Buzz') || j);
}