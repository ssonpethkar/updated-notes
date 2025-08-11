function sumOfAdjacentNumbers(arr) {
    let sum = 0;
    let result = []

    for (let i = 0; i + 1 < arr.length; i++) {
        sum = arr[i] + arr[i + 1];
        result.push(sum)
    }

    return result;
}

let arr = [ 4, 10, 15, 5, 6 ];

console.log(sumOfAdjacentNumbers(arr))