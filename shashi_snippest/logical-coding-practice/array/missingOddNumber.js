// input: [5, 7, 9, 11, 15, 17]
// output: 13

function findMissingOddNumber (arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        // let next = current + num;
        let next = current + 2;
        
        if (arr[i + 1] !== next) {
            result = next;
            break;
        }
    }
    return result;
}

console.log(findMissingOddNumber([5, 7, 9, 11, 15, 17]));       // 3