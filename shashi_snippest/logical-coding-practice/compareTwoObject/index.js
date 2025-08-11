// Input1 = {a: 1, b: 2, c: 3, d: 10, e: 12}
// Input2 = {a: 2, e: 12, f: 6, d: 10}

// output: {d: 10, e: 12}

function compareObj(obj1, obj2) {
    let obj = {};

    for (let i in obj1) {
        if (obj1[i] === obj2[i]) {
            obj[i] = obj1[i];
        }
    }

    return obj;
}


input1 = {a: 1, b: 2, c: 3, d: 10, e: 12}
input2 = {a: 2, e: 12, f: 6, d: 10}

console.log(compareObj(input1, input2));    // { d: 10, e: 12 }