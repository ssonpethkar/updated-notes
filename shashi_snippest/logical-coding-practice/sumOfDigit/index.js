// Sum of all digits

// 654321 => 6+5+4+3+2+1 = 21


// Simpl function
function sumOfDigits(num) {
    let rem, sum = 0;

    while(num !== 0) {
        rem = Math.trunc(num % 10);
        sum = sum + rem;
        num = Math.trunc(num / 10);
    }

    return sum;
}

console.log(sumOfDigits(654321));       // 21

// with recursion
function sumOfDigitsWithRecursion(num) {
    if (num !== 0) {
        return Math.trunc(num % 10) + sumOfDigitsWithRecursion(Math.floor(num / 10));
    }
}

console.log(sumOfDigitsWithRecursion(654321));  // NAN