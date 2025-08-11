const add = (a, b) => {
  console.log("in arrow function");
  return a + b;
};
console.log(add(10, 20));

//  shorter way
const add1 = (a, b) => a + b;
console.log(add1(10, 20)); // 30
