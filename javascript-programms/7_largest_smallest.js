// Find the largest number in an array in JavaScript.

function checkLargest(arr) {
  let largest = arr[0];
  let smallest = arr[0];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);

    // largest
    if (element > largest) {
      largest = element;
    }

    // smallest
    if (element < smallest) {
      smallest = element;
    }
  }
  return { largest, smallest };
}
console.log(checkLargest([10, 2, 3, 5, 90]));

//  using in built function

function findLargestSmallest(params) {
  let findLargest = Math.max(...params);
  let findSmallest = Math.min(...params);
  console.log(findLargest, findSmallest);
  return { findLargest, findSmallest };
}

console.log(findLargestSmallest([10, 2, 3, 5, 90]));
