// Question: Panagram String Checker
// e.g: The quick brown fox jumps over a lazy dog

function checkPangrams (str) {
    const arr = new Array(26).fill(false);

    let index;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "A" && str[i] <= "Z") {
            index = str.charCodeAt(i) - "A".charCodeAt(0);
        } else if (str[i] >= "a" && str[i] <= "z") {
            index = str.charCodeAt(i) - "a".charCodeAt(0);
        } else continue;

        arr[index] = true;
    }

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === false) {
            return false;
        }
    }

    return true;
}

const result = checkPangrams("The quick brown fox jumps over a lazy dog");
console.log(result); // true