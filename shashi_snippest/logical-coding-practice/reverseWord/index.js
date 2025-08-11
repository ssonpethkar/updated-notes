

function reverseString(str) {
    const myStr = str.split(" ");
    let res = "";

    for ( let i = myStr.length - 1; i >= 0; i--) {
        res += myStr[i] + " ";
    }

    return res;
}

let sentence = "I like javascript";
console.log(reverseString(sentence));   // javascript like I 

// reverse only word not order
function revWord(words) {
    const reversed = [], len = words.length;
    var result = "", i = len;
    while (i-- > 0) {
        if (words[i] == " ") {
            reversed.push(result);
            result = "";
        } else { 
            result += words[i];
        }
    }
    while (reversed.length) { 
        result += " " + reversed.pop();
    }
    return result;
}

console.log(revWord(sentence)) // I ekil tpircsavaj