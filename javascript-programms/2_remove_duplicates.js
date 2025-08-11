let str = "wertyuiufdsdfghkjhgfdxcvbnmnbcxcfvghjkkkkkkkjhgf";

let splitStr = str.split("");
let removeDuplicates = [...new Set(splitStr)];
console.log(removeDuplicates.join(""));
