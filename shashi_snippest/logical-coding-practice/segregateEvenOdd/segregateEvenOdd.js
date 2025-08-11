// input = [1, 3, 2, 4, 7, 6, 9, 10]
// output = [2, 4, 6, 10, 1, 3, 7, 9]

// Brute force method

function arrayEvenOdd(arr, len) {
    let a = [];
    let index = 0;

    for (let i = 0; i < len; i++) {
        if (arr[i] % 2 === 0) {
            a[index++] = arr[i];
        }
    }

    for (let i = 0; i < len; i++) {
        if (arr[i] % 2 !== 0) {
            a[index++] = arr[i];
        }
    }

    console.log(a);
}

// Optimised

function seggregateEvenOdd(arr, len) {
    let i = -1, j = 0;
    let temp;

    while (j != len) {
        if (arr[j] % 2 === 0) {
            i++;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        j++;
    }
    console.log(arr);
}

let arr = [1, 3, 2, 4, 7, 6, 9, 10];

arrayEvenOdd(arr, arr.length);
seggregateEvenOdd(arr, arr.length);
