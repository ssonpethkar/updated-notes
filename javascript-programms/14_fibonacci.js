function checkFibonacci(params) {
  let num1 = 0,
    num2 = 1,
    nextNum;
  for (let index = 1; index <= params; index++) {
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
}

checkFibonacci(7);
