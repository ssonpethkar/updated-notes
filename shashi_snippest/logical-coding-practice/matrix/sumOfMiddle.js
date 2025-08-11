function middleSum(mat) {
    let rowSum = 0;
    let colSum = 0;

    for (let i = 0; i < mat.length; i++) {
        rowSum += mat[parseInt(mat.length / 2)][i];
    }
    
    for (let i = 0; i < mat.length; i++) {
        colSum += mat[i][parseInt(mat.length / 2)]
    }
    console.log("Sum of the middle row: ", rowSum);
    console.log("Sum of the middle column: ", colSum);
}

let matrix = [ [ 2, 5, 7 ], 
               [ 3, 7, 2 ], 
               [ 5, 6, 9 ] ];

middleSum(matrix);