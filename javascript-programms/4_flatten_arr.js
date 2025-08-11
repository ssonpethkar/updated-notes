// with inbuilt function

let arr = [2, 3, 4, [4, 3, 1, 0, 6, 7], [5, 7, [2, 3]]];

let flattenArr = arr.flat(Infinity);
// console.log(flattenArr);

// unique array
let uniqueArr = [...new Set(flattenArr)];
// console.log(uniqueArr);

// -------------------------------------------------------------------------------

// without inbuilt function

function flattenArrWithoutInbuilt(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(typeof element);
    if (Array.isArray(element)) {
      // console.log("in array", typeof element);
      result = result.concat(flattenArrWithoutInbuilt(element));
    } else {
      // console.log("in number", element, ": ", typeof element);
      result.push(element);
    }
  }
  return result;
}

// console.log(flattenArrWithoutInbuilt(arr));

// ------------------------------------------------------------------------------------------

function flattenArrUsingForOf(arr) {
  let result = [];
  for (const char of arr) {
    result = result.concat(
      Array.isArray(char) ? flattenArrUsingForOf(char) : char
    );
  }
  return result;
}

console.log(flattenArrUsingForOf(arr));
