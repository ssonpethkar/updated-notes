let str = "This is Swati";
let vowels = "aeiou";
let splitVowels = vowels.split("");
console.log(splitVowels);

let removeVowels = str
  .split("")
  .filter((char) => !splitVowels.includes(char.toLowerCase()))
  .join("");
console.log(removeVowels);
