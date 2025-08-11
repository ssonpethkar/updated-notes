//  [1, 2, -1, 3, -2]  ==> 5

const maxSum = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let cur = 0;
        for (let j = i; j < arr.length; j++) {
            cur = cur + arr[j];
            sum = Math.max(sum, cur);
        }
    }
    return sum;
}

console.log("maxSum:", maxSum([1, 2, -1, 3, -2]));
