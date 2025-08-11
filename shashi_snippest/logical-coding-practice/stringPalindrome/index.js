const str = "madam";

function checkPalindrome(str) {
    const len = str.length;

    for(let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome(str)); //true

// Using built in
let isPalindrome = function (string) {
    if (string == string.split('').reverse().join('')) {
        console.log(string + ' is palindrome.');
    }
    else {
        console.log(string + ' is not palindrome.');
    }
}

isPalindrome("Dad");    // Not Palindrome


// Array Palindrome
function elementPalindrome(arr) {
    let pallindromicValue = [];
    
    for (let i = 0; i < arr.length; i++) {
        let j = arr[i].split("").reverse().join("");
        
        if (arr[i] === j) {
            pallindromicValue.push(arr[i]);
        }
    }
    
    return pallindromicValue;
}

const strArray = ['dad', 'mad', 'nan', 'madam', 'hello'];
console.log(elementPalindrome(strArray));       // [ 'dad', 'nan', 'madam' ]