// remove a secific item from an array

function deleteSpecificItem(arr, item) {
    let count = 0;
    let newArray = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item && count === 0) {
            count++;
        } else {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}


const arrNum = [1, 2, 3, 4, 5];

console.log(deleteSpecificItem(arrNum, 3));