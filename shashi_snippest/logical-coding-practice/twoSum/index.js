// input = [1, 5, 9]
// target = 10
// output = [0, 2]

// result = nums[0] + nums[2] = 10
// return [0, 1]


// Brute force
function twoSumNum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        const balance = target - arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === balance) {
                return [i, j];
            }
        }
    }
}

let arrs = [1, 3, 9];
let targetNum = 10;

console.log(twoSumNum(arrs, targetNum));   // [0, 2]

let nums = [3, 2, 4];
let tarNum = 6;

console.log(twoSumNum(nums, tarNum));   // [1, 2]


// Optimised
function twoSum(arr, target) {

    let map = {};

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        let pair = target - value;

        if (map[pair] !== undefined) {
            return [map[pair], i];
        } else {
            map[value] = i;
        }
    }
}

let arr = [1, 3, 9];
let target = 10;

console.log(twoSum(arr, target));   // [0, 2]

let num = [3, 2, 4];
let tar = 6;

console.log(twoSum(num, tar));   // [1, 2]
