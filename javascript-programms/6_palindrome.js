function checkPalindrome(params) {
  let reverseString = params.split("").reverse().join("");
  // console.log(reverseString);
  return params === reverseString;
}
// console.log(checkPalindrome("GFG"));

function checkPalindromeWithoutInbuilt(str) {
  let reverseStr = "";
  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];
    // console.log(element);
    reverseStr += element;
  }
  return reverseStr === str;
}

console.log(checkPalindromeWithoutInbuilt("Hello"));
console.log(checkPalindromeWithoutInbuilt("GFG"));
console.log(checkPalindromeWithoutInbuilt("1221"));
