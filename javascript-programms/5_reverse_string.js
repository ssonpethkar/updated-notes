//  with inbuilt function
let str = "SwatiSonpethkar";
let reverseStr = str.split("").reverse().join("");
// console.log(reverseStr);

// ----------------------------------------------------------------------------------------

// without inbuilt function

function reverseStringWithoutInbuilt(str) {
  let reversed = "";
  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];
    console.log(element);
    reversed += str[index];
  }
  return reversed;
}

console.log(reverseStringWithoutInbuilt(str));
