// Brute-Force Approach
function findNumberOfPairs(arr, sum) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                count++;
            }
        }
    }
    return count;
}


const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findNumberOfPairs(numArray, 8)); // 3
// Time Complexity = O(n^2)
//Space Complexity = O(1)


// Optimised Approach
// https://www.geeksforgeeks.org/count-pairs-with-given-sum/
function getNumberOfPairs(arr, sum) {
    const map = new Map();
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (map.has(sum - arr[i])) {
            count = count + map.get(sum - arr[i]);
        } else if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1)
        }
    }
    return count;
}

const arrayNumbers = [1, 5, 7, -1, 5];
console.log(getNumberOfPairs(arrayNumbers, 6));  // 3

// Time Complexity = O(n)
// Space Complexity = O(n)