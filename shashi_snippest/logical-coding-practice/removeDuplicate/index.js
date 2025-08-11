const removeDuplicate = (arr) => {
    arr.sort();

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let exit = false;

        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                exit = true;
            }
        }

        if (!exit) {
            result.push(arr[i])
        }
    }
    return result;
}

function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log("Unique Array: ",uniqueArr);    // 1, 3, 4, 5, 7, 8, 9
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);

const numbers = [7, 3, 5, 1, 4, 3, 8, 9, 5];

let result = removeDuplicate(numbers)

console.log(result) // 1, 3, 4, 5, 7, 8, 9


let uniqueArray = [... new Set(numbers)];
console.log(uniqueArray);   // 1, 3, 4, 5, 7, 8, 9

let filterefArray = numbers.sort().filter((ele, index) => numbers.indexOf(ele) === index);
console.log(filterefArray); // 1, 3, 4, 5, 7, 8, 9