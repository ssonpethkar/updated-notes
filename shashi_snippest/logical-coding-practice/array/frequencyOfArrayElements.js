// input: [10, 20, 20]
// output: {10: 1, 20: 2}

function countFrequency (arr) {
    let count = {};

    for (const ele of arr) {
        if (count[ele]) {
            count[ele] += 1;
        } else {
            count[ele] = 1;
        }
    }

    return count;
}

const result = countFrequency([10, 20, 20]);
console.log(result);    // { '10': 1, '20': 2 }


const res =countFrequency(['a', 'b', 'a', 'a', 'c', 'c']);
console.log(res);   // { a: 3, b: 1, c: 2 }


// using Array.reduce() methods
const fruits = ["apple", "banana", "orange", "apple", "orange"];

const fruitCount = fruits.reduce((accumulator, fruit) => {
    if (accumulator[fruit]) {
        accumulator[fruit] = accumulator[fruit] + 1;
    } else {
        accumulator[fruit] = 1;
    }

    return accumulator;
}, {});

console.log(fruitCount);       // { apple: 2, banana: 1, orange: 2 }