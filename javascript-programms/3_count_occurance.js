let str =
  "wertyuiufdsdfghkjhgfdxcvbnmnbcxcfvghjkkkkkkkjhgf23456765433234534543454";

function countOcc(str) {
  let splitStr = str.split("");
  let uniqueStr = [...new Set(splitStr)];
  let result = {};
  for (let i = 0; i < uniqueStr.length; i++) {
    const uniqueVal = uniqueStr[i];
    let count = 0;
    for (let j = 0; j < splitStr.length; j++) {
      const splitVal = splitStr[j];
      if (uniqueVal == splitVal) {
        count++;
      }
    }
    result[uniqueVal] = count;
  }
  return result;
}
// console.log(countOcc(str));

// ----------------------------------------------------------------------------------------
//  using forOf

function countOccUsingForOf(str) {
  let result = {};
  for (const element of str) {
    // console.log(element);
    result[element] = (result[element] || 0) + 1;
  }
  return result;
}

// console.log(countOccUsingForOf(str));

// --------------------------------------------------------------------------------------------

function countOccUsingReduce(str) {
  return str.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}
countOccUsingReduce(str);
// console.log(countOccUsingReduce(str));

// --------------------------------------------------------------------------------------------

function frequency(arr) {
  let freq = {};
  for (let index = 1; index < arr.length; index++) {
    let element = arr[index];
    // console.log(element);

    if (freq[element]) {
      freq[element] += 1;
    } else {
      freq[element] = 1;
    }
    // console.log(freq[element]);
  }
  // console.log(freq);
  return freq;
}

console.log(frequency([1, 2, 3, 2, 1, 3, 4, 5, 6, 7]));
