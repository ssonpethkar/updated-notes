// Check whether the given string or expression is balanced or not
// Input: 
// Output:

function isBalanced(str) {
    let stack = [];

    let openingBrackets = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    let closingBrackets = {
        ')': true,
        '}': true,
        ']': true,
    }

    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if (openingBrackets[element]) {
            stack.push(element);
        } else if (closingBrackets[element]) {
            if (openingBrackets[stack.pop()] !== element) {
                return false;
            }
        }
    }
    return stack.length == 0;
}

// let string = "(())";     // true
let string = "((]]"     // false
console.log(isBalanced(string));