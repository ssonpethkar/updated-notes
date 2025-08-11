let myStr = "This is javascript code and you to find max char";

function findMaxChar(str) {
    let calculate = {};
    for (let item of str) {
        calculate[item] = (calculate[item] || 0) + 1;
    }

    let max = 0;
    let finalResults;

    for (let data in calculate) {
        if (calculate[data] > max) {
            max = calculate[data];

            finalResults = { [data]: max,}
        }
    }

    return finalResults;
}

console.log(findMaxChar(myStr));    // { ' ': 9 }


// ==================================================================

const maxChar = (str) => {
    let arr = str.split("");
    let count = 0;
    let res = "";

    arr.forEach((ch) => {
        let innerCount = 0;
        arr.forEach((el) => {
            if (el === ch) {
                innerCount += 1;
            }
        });

        if (innerCount > count) {
            count = innerCount;
            res = ch;
        }
    });

    return res;
}

console.log(maxChar(myStr));    // { ' ': 9 }