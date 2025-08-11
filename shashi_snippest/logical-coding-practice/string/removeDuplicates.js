// removes duplicates from a string

function replace(sentence, character, index) {
    return sentence.substr(0, index) + character + sentence.substr(index + 1);
}

function removeDuplicatesFromString(sentence) {
    let arraySet = new Set([]);
    let writePointer = 0;
    let readPointer = 0;

    while (readPointer < sentence.length) {
        if (!arraySet.has(sentence[readPointer])) {
            arraySet.add(sentence[readPointer])
            sentence = replace(sentence, sentence[readPointer], writePointer);
            writePointer++;
        }
        readPointer++;
    }
    return sentence.substr(0, writePointer);
}

const str = "hello world";

console.log("Original String ", str);   // hello world
console.log("After removing duplicates: ", removeDuplicatesFromString(str));    // helo wrd


// Time Complexity: O(n)
// Space Complexity: O(n)