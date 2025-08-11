// second larget in an array

function findSecondLargest(arr, len) {
    let i = 0;
    let largest = -12345678; let secondLargest = -12345678; // don't use zero

    if (len < 2) {
        return "Invalid Input";
    }

    for (i = 0; i < len; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -12345678) {
        return "No second largest element"
    } else {
        return secondLargest;
    }
}

let arr = [12, 14, 13, 10, 5, 1]; 

console.log(findSecondLargest(arr, arr.length));    // 13

// ============================================================================================

function secondLargest (input) {
    let arr = input.sort((a, b) => a - b);
    let res = arr[arr.length - 1];

    for (let i = arr.length - 2; i >= 0; i--) {
        if (res !== input[i]) {
            res = input[i];
            break;
        }
    }
    return res;
}

// Time Complexity = O(n log n) ---->>> becuase of sort function

console.log(secondLargest([1, 4, 7, 2, 4, 7])); // 4
console.log(secondLargest([12, 14, 13, 10, 5, 1])); // 13
