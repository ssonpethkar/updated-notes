// Q. [1, 2] ==> [{1: 1, 2: 2}]

const arr = [1, 2];

const modArray = (arr) => {
    return arr.map(el => {
        return {[el]: el};
    });
};

console.log("res>>>", modArray(arr))