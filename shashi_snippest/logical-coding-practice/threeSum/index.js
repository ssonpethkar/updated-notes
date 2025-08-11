
// Brute Force
function threeSum(arr, target) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (target === arr[i] + arr[j] + arr[k]) {
                    res.push(arr[i], arr[j], arr[k]);
                }
            }
        }
    }

    return res;
}

let arr = [12, 3, 4, 1, 6, 9];

let target = 24;

console.log(threeSum(arr, target)); //[ 12, 3, 9 ]