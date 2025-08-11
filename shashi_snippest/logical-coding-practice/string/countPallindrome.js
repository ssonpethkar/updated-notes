// Count Pallindrome in a string

function countPallindromes (sentence, left, right) {
    let count = 0;

    while (left >= 0 && sentence.length && sentence[left] == sentence[right]) { // if left and right pointer are in boundaries
        count++;
        left--;
        right++;
    }
    return count;
}

function findPallindromes(sentence) {
    let count = 0;

    for (let i = 0; i < sentence.length; i++) {
        count += countPallindromes(sentence, i, i);
        count += countPallindromes(sentence, i, i + 1);
    }
    return count;
}

let pallindrom = "aabbba";
console.log("Count of Pallindromes ", findPallindromes(pallindrom));        // 11

// Time Complexity: O(n^2)
// Space: O(1)