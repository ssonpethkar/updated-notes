// Find the longest Palindrome Subsequence
// Input: ABAcABA
// Output: 

const calculateLPS = function(str) {
    const n = str.length;

    let dp = Array(n).fill(0).map(() => Array(n).fill(0));  // creating 2-D Array
    for (let i =0; i < n; i++) {
        dp[i][i] = 1;
    }

    for (let gap = 2; gap <= n; gap++) {
        for (let i = 0; i < (n - gap + 1); i++) {
            j = i + gap - 1;

            if (str[i] == str[j]) {
                dp[i][j] = 2 + dp[i + 1][ j - 1];
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][n - 1];
};

console.log("Length of LPS is " + calculateLPS("abacaba")); //  7
console.log("Length of LPS is " + calculateLPS("abdbca"));  // 5

// Time COmplexity: O(n^2)