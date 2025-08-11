// Input: x = "hello", y = "hwllr";
// Output: 2


function hammingDistance (x, y) {
    if (x.length !== y.length) {
        throw new Error("Strings must be of same length");
    }

    let distance = 0;

    for(let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            distance++;
        }
    }

    return distance;
}

console.log(hammingDistance("hello", "hwllr"));     // 2

// Problem 2

// check binary value

function binaryHammingDistance (x, y) {
    x = x.toString(2);
    y = y.toString(2);

    if (x.length < y.length) {
        while(x.length !== y.length) {
            x = "0"+x;
        }
    } else {
        while(x.length !== y.length) {
            y = "0"+y;
        }
    }

    let distance = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            distance++;
        }
    }

    return distance;
}

console.log(binaryHammingDistance(1, 4));   // 2
console.log(binaryHammingDistance(2, 9));   // 3