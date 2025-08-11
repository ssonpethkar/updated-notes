// check if pair with given sum is present
// [2, 1, 3, 6] s = 3

const arr = [2, 1, 3, 6];


// Brute force
const pair = (arr, sum) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
             if (arr[i] + arr[j] === sum) return true;
        }
    }
    return false;
}

console.log(pair(arr, 3))



// Optimized version
const pairSet = (arr, sum) => {
    let set = new Set();

    for ( let el of arr) {
        if (set.has(sum - el)) {
             return true;
        } else {
            set.add(el);
        }
    }
    return false;
}

console.log(pairSet(arr, 3));   // true
console.log(pairSet(arr, 6));   // false