// count each occurence of an array elemets

function countEachElements(arr) {
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1;
    }

    console.log(count);     // { '1': 1, '2': 2, '3': 2, '4': 2, '6': 3, '7': 1 }
}

const arr = [2, 3, 4, 6, 6, 7, 2, 3, 4, 6, 1];

countEachElements(arr);