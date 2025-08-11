// reverse words by word in a sentences
// Input = "i love india"
// output = "india love i"

function reverse(str, start, end) {
    let temp;       
         
    while (start <= end)
    {
        // Swapping the first and
        // last character
        temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
}
     
// Function to reverse words
function reverseWords(str) {
    str = str.split("");
    let start = 0;
    for (let end = 0;
             end < str.length; end++)
    {
        // If we see a space, we reverse
        // the previous word (word between
        // the indexes start and end-1
        // i.e., s[start..end-1]
        if (str[end] == ' ')
        {
            reverse(str, start, end);
            start = end + 1;
        }
    }
    // Reverse the last word
    reverse(str, start, str.length - 1);
         
    // Reverse the entire String
    reverse(str, 0, str.length - 1);
    return str.join("");
}
     
let sentence = "I Love JavaScript ";        // issue is here " space"

console.log(reverseWords(sentence));

// Time Complexity = O(n)
// Space Complexity = O(n)
// ===========================================================================================================

function reverseString(sentence, left, right) {
    if (!sentence || sentence.length < 2) return
    while (left < right) {
        let temp = sentence[left]
        sentence = sentence.substr(0, left) + sentence[right] + sentence.substr(left+1)
        sentence = sentence.substr(0, right) + temp + sentence.substr(right+1)
        left++
        right--
    }
    return sentence
}

function reverseWords(sentence) {
    let left = 0
    let right = 0
    sentence = sentence.split('').reverse().join('')
    while (true) {
        while(sentence[left] === ' ') {
            left++  
        } 
        if (left >= sentence.length) {
            break
        }
        right = left + 1
        while (right < sentence.length && sentence[right] != ' ') {
            right++
        }
        sentence = reverseString(sentence, left, right-1)
        left = right
    }
    return sentence
}

let phrase = "I Love JavaScript";
console.log(sentence);
console.log(reverseWords(phrase));  // JavaScript Love I    

/**
 * Time Complexity O(N)
 * Space Complexity O(1)
 */


//===========================================================================================

// Input: This is Javacript Code
// Output: sihT si tpircavaJ edoC


const str = "This is Javacript Code";

const arrOfStr = str.split(" ");

const reverseStr = arrOfStr.map((item) => {
    return item.split("").reverse().join("")
}).join(" ");

console.log(reverseStr);    // sihT si tpircavaJ edoC


//=========================================================================================

function reverseOnlyWord(str) {
    let revArray = [];
    let strength = str.split(" ");

    for (let i = 0; i < strength.length; i++) {
        let a = strength[i].split("").reverse().join("");
        revArray.push(a);
    }

    return revArray.join(" ");
}

const str1 = "This is Javacript Code";
console.log(reverseOnlyWord(str1));     // sihT si tpircavaJ edoC