// find missing number in an array

// input = [1, 2, 3, 6];
// output = [4, 5]

function missingNumber(arr) {
    let missingArray = [];

    // Math.min(1, 2, 3); // 1
    let minNum = Math.min(...arr);  // 1
    let maxNum = Math.max(...arr);  // 6

    // indexOf return its position, not there in -1
    for (let i = minNum; i < maxNum; i++) {
        if (arr.indexOf(i) < 0) {
            missingArray.push(i);
        }
    }

    return missingArray;
}

let numArray = [1, 2, 3, 6];
console.log(missingNumber(numArray));   // [4, 5]

console.log(missingNumber([-3, -2, 2, 7]));     // [-1, 0, 1, 3, 4, 5, 6]