

// Brute Force
const moveZerosToEnd = (arr) => {
    const temp = [];
    let c = 0;

    for( let el of arr) {
        if (el === 0) c++;
    }

    for (let el of arr) {
        if (el !== 0) {
            temp.push(el);
        }
    }

    for (let i = 0; i < c; i++) {
        temp.push(0);
    }

    console.log(">>>>", temp);
}

// time complexity and space complexity --> O(n)

console.log(moveZerosToEnd([8, 5, 0, 10, 0, 20]));

// Optimized 
const moveZeros = (arr) => {
    let c = 0;
    const n = arr.length;

    for (let i = 0; i < n; i ++) {
        if (arr[i] !== 0) {
            [arr[i], arr[c]] = [arr[c], arr[i]]     // swap logic
            c++;
        }
    }
    return arr;
}

// time complexity --> O(n)
// space complexity --> O(1)

console.log(moveZeros([9, 0, 0, 12, 39, 10, 0 ,3]));