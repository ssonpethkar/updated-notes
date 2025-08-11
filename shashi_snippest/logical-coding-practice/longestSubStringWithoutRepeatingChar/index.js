// Longest substring without repeating characters
// Input: abcqbcbb 
// Output: 3

function longestSubString(str) {
    if (!str) return 0;

    let end = 0;
    let start = 0;
    let maxLength = 0;

    const uniqueChars = new Set();

    while (end < str.length) {
        if (!uniqueChars.has(str[end])) {
            uniqueChars.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueChars.size);
        } else {
            uniqueChars.delete(str[start]);
            start++;
        }
    }

    return maxLength;
}

console.log(longestSubString("abcabcbb"));      // 3
console.log(longestSubString("abcdabc"));       // 4