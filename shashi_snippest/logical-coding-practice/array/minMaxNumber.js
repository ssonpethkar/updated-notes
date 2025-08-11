// find min and max number in an array

function findMinMax(array) {
    let min = max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {   // 16 < 23
            max = array[i];
        }

        if (min > array[i]) {   // 16 > 0
            min = array[i];
        }
    }
    return {min, max};
}

let numArr = [16, 23, 0, -5, -14];
console.log(findMinMax(numArr));    // { min: -14, max: 23 }