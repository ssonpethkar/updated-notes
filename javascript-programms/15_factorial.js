function factorial(num) {
  let answer = 1;
  for (let index = 1; index <= num; index++) {
    // const element = num[index];
    // console.log(index);
    answer *= index;
  }
  console.log(answer);

  // return answer;
}

factorial(7);
