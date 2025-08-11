// input: "Fortune favours the brave"
// output: "Fortune..."

function truncateSentence(str) {
    let word = "";

    for (let i = 0; i < str.length; i++) {
        let strChar = str.charAt(i);

        if (strChar === " ") {
            break;
        } else {
            word += strChar;
        }
    }

    return word + "...";
}

console.log(truncateSentence("Fortune favours the brave")); // Fortune...


// truncate by length
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + "...";
    } else {
        return str;
    }
}

console.log(truncate("Fortune favours the brave", 9));  // Fortune f...