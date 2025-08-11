// Rotate a 2D matrix 90 degree clockwise
/*
Input:
1 2 3 
4 5 6
7 8 9

Output:
7 4 1 
8 5 2
9 6 3

*/

const A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const F = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(matrix) {
  const n = matrix.length;
  const x = Math.floor(n / 2);
  const y = n - 1;
  for (let i = 0; i < x; i++) {
    for (let j = i; j < y - i; j++) {
      k = matrix[i][j];
      matrix[i][j] = matrix[y - j][i];
      matrix[y - j][i] = matrix[y - i][y - j];
      matrix[y - i][y - j] = matrix[j][y - i];
      matrix[j][y - i] = k;
    }
  }
}

rotate(A);
console.log(A);
/*
[
    [ 13, 9, 5, 1 ],
    [ 14, 10, 6, 2 ],
    [ 15, 11, 7, 3 ],
    [ 16, 12, 8, 4 ]
]

  */

rotate(F);
console.log(F); // [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

console.log("=======================================================================================================")
// rotate matrix 90 degree anti-clockwise

const X = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const Y = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateAntiClockwise(matrix) {
  const n = matrix.length;
  const x = Math.floor(n / 2);
  const y = n - 1;
  for (let i = 0; i < x; i++) {
    for (let j = i; j < y - i; j++) {
      k = matrix[i][j];
      matrix[i][j] = matrix[j][y - i];
      matrix[j][y - i] = matrix[y - i][y - j];
      matrix[y - i][y - j] = matrix[y - j][i];
      matrix[y - j][i] = k;
    }
  }
}

rotateAntiClockwise(X);
console.log(X);
/*
    [
        [ 4, 8, 12, 16 ],
        [ 3, 7, 11, 15 ],
        [ 2, 6, 10, 14 ],
        [ 1, 5, 9, 13 ]
    ]
*/

rotateAntiClockwise(Y);
console.log(Y); // [ [ 3, 6, 9 ], [ 2, 5, 8 ], [ 1, 4, 7 ] ]
