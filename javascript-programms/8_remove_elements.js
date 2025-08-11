// # How Remove the first element from an array in JavaScript

// 1. Using slice() (Non-mutating)
/*
  - Does not modify the original array.
  - Returns a new array starting from index 1.
*/
//  remove 1st element
let arr = [2, 3, 4];

// remove 1st element
let removeFirstEle = arr.slice(1);
console.log(arr);
console.log(removeFirstEle);

// remove 2nd element
let remove2Ele = arr.slice(2);
console.log(remove2Ele);

// ===============================================================================================

// 2. using shift
/*
  - mutates the original array  and return with remove array
*/
let arr1 = [2, 3, 4];
arr1.shift();
console.log(arr1);

// ===============================================================================================
// 3. Using splice()
/*
  - Mutates the array.
  - splice(start, deleteCount) → removes deleteCount elements starting at start.
*/

let arr2 = [2, 3, 4];
let newArr = arr2.splice(0, 1);
console.log(newArr);
console.log(arr2);
