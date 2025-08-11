// Find longest common sbstring

function LCSLen(str1, str2) {
    const n1 = str1.length;
    const n2 = str2.length;
    const dp = Array(n1 + 1).fill(0).map(() => Array(n2 + 1).fill(0));
    let maxLen = 0;

    for (let i = 0; i < n1; i++) {
        for (j = 1; j < n2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                maxLen = Math.max(maxLen, dp[i][j]);
            }
        }
    }
    return maxLen;
}

console.log("Length of Longest Common Substring is", LCSLen("javascript", "java")); // 3
console.log("Length of Longest Common Substring is", LCSLen("headphone", "head"));  // 3

// Time COmplexity: O(n1 * n2)
// Space Complexity: O(n1 * n2)