function sum(array) {
  let addition = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    addition += element;
  }
  return addition;
}

console.log(sum([10, 20, 30, 10]));

//  using short syntax
let arr1 = [10, 20, 30, 10];

// using reduce
let additionOfNumber = arr1.reduce((acc, num) => acc + num, 0);
console.log(additionOfNumber);

// using map
let result = 0;
arr1.map((num) => {
  result += num;
});
console.log(result);
