// checking sqaure in another Array
// arr[1, 2, 3, 4], arr2=[1, 9, 4, 16]

function isSquareCheck (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let isSqaure = false;

        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] === arr2[j]) {
                isSqaure = true;
            }

            if (j === arr2.length - 1) {
                if (!isSqaure) {
                    return false;
                }
            }
        }
    }

    return true;
}

const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
console.log(result);    // true

const res = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 25]);
console.log(res);    // false