// Find an element in an array such that sum of left array is equal to sum of right array
let arr = [1, 4, 2, 5, 0];

function findPivot(arr, n) {
    for(let i = 1; i < n; i++) {
        let leftSum = 0;
        for (let j = i-1; j >= 0; j--) {
            leftSum += arr[j];
        }

        let rightSum = 0;
        for (let k = i+1; k < n; k++) {
            rightSum += arr[k];
        }

        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;
}

console.log(findPivot(arr, 5)); // 2