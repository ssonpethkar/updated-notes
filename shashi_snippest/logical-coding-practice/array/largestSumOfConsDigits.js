// input = [1, 2, 3,4 ,5, 6, 7, 8], num = 4
// output = 25

function findLargest (arr, num) {
    if (num > arr) {
        throw new Error("Number is not greater than Array");
    } else {
        let max = 0;

        for (let i = 0; i < arr.length - num + 1; i++) {
            let temp = 0;

            for (let j = 0; j < num; j++) {
                temp += arr[i + j];
            }

            if (temp > max) {
                max = temp;
            }
        }
        return max;
    }
}

const result = findLargest([1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log(result);    // 26

const res = findLargest([100, 200, 300, 400], 2);
console.log(res);   // 700