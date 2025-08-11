// 1 2 3
// 4 5 6
// 7 8 9

// adj(1) = 2+4+5 = 11


function sumOfAdjacentElements(arr) {

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == (j + 1)) {
                sum += arr[i][j];
                console.log(sum)
            }
        }
    }

    return sum;
}

let arr =
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        sumOfAdjacentElements(arr)

// console.log("Sum of Adjacent elements: ", sumOfAdjacentElements(arr)); //

// Wrong ======================== Not completed