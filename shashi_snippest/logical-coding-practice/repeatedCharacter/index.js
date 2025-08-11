// non repeating character
// "abcabcd" => "d"

function nonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        let j = str.charAt(i);

        if (str.indexOf(j) === str.lastIndexOf(j)) {
            return j;
        }
    }
}

console.log(nonRepeatingCharacter("abcabcd"));  // d

// All non repeating characters
function allNonRepeatingCharacter(str) {
    let chars = []
    for (let i = 0; i < str.length; i++) {
        let j = str.charAt(i);

        if (str.indexOf(j) === str.lastIndexOf(j)) {
            chars.push(j);
        }
    }
    return chars;
}

console.log(allNonRepeatingCharacter("azbcaebcxd"));  // [ 'z', 'e', 'x', 'd' ]


// second repeateating character in a string
function secondRepeatingCharacter(str) {
    let chars = [];

    for (let i = 0; i < str.length; i++) {
        let j = str.charAt(i);

        if (str.indexOf(j) !== str.lastIndexOf(j)) {
            chars.push(j);
        }
    }
    return chars[1];
}

console.log(secondRepeatingCharacter("sasikant")); // a