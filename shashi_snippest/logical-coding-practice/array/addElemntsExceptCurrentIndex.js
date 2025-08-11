// Add all the elements except for the current index
// input: [2, 7, 11, 4, -2]
// output: [20, 15, 11, 18, 24]

const arr = [2, 7, 11, 4, -2]
const addElements = arr.reduce((a, b) => a + b);

const result = arr.map((item) => addElements - item);

console.log(result);    // [ 20, 15, 11, 18, 24 ]


