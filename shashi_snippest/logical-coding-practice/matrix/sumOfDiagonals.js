// Sum of primary diagonal = 11 + 5 + (-12) = 4.
// Sum of secondary diagonal = 4 + 5 + 10 = 19.
// Sum = |19 + 4| = 23

// Brute force
function sumOfDiagonals(arr) {
    let dir1 = 0, dir2 = 0;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (i == j) {
                dir1 += arr[i][j];
            }

            if (i == (arr.length - j - 1)) {
                dir2 += arr[i][j]
            }
        }
    }

    return Math.abs(dir1 + dir2);
}


let arr =
        [
            [11, 2, 4],
            [4 , 5, 6],
            [10, 8, -12]
        ];

console.log("Sum of Diagonals :", sumOfDiagonals(arr)); // 23
// Time complexity: O(n^2)
// Auxiliary Space: O(1)

// optimised code
function sumOfDiagonal(arr) {
    let dir1 = 0, dir2 = 0;

    for (let i = 0; i < arr.length; i++) {
        dir1 += arr[i][i];
        dir2 += arr[i][arr.length - i - 1];
    }

    return Math.abs(dir1 + dir2)
}

console.log("Sum of diagonals (optimised): ", sumOfDiagonal(arr)); //23
// Time complexity : O(n)
// Auxiliary Space: O(1