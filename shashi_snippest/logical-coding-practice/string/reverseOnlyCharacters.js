// Reverse only characters

// Input: str = "a,b$c"
// Output: str = "c,b$a"

function reverseOnlyCharacter(str) {
    let results = [];   // given only keep the character
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let sArr = str.split('');   // converts the string into array
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i].match(/[A-Z]/gi)) {
            results.push(sArr[i]);
        }
    }

    // results characters no special abc
    results = results.reverse();    //cba

    for (let j = 0; j < sArr.length; j++) {
        if (!letters.includes(sArr[j])) {   // trying to find the special characer
            results.splice(j, 0, sArr[j]);
        }
    }

    return results.join('');    // array convers into string
}

console.log(reverseOnlyCharacter("a,b$c"));     // c,b$a
