
// input [2, 0, 2]
// output: 2

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// brute force Solution
function trappingRainWater(arr) {
    let res = 0;    // to store max water

    for (let i = 1; i < arr.length - 1; i++) {

        let left = arr[i];      // check left container
        for (let j = 0; j < i; j++) {
            left = Math.max(left, arr[j]);
        }

        let right = arr[i]; // check right container
        for (let j = i + 1; j < arr.length; j++) {
            right = Math.max(right, arr[j]);
        }

        res += Math.min(left, right) - arr[i];  // update max water value
    }

    return res;
}

const result = trappingRainWater([ 2, 0, 2 ]);
console.log(result);    // 2

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Optimised Solution
function trapRainWater(arr) {
    let res = 0;
    let left = 0;
    let right = arr.length - 1;
    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        if (arr[left] < arr[right]) {
            if (arr[left] >= leftMax) {
                leftMax = arr[left];
            } else {
                res += leftMax - arr[left];
            }
            left++;
        } else {
            if (arr[right] >= rightMax) {
                rightMax = arr[right];
            } else {
                res += rightMax - arr[right];
            }   
            right--;
        }
    }

    return res;
}

// Time complexity : O(n)
// Space complexity : O(1)

const res = trapRainWater([ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]);
console.log(res);   // 6
