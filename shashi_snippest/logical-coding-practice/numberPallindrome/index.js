function numberPallindrome(num) {
    let rem, temp,sum = 0;
    temp = num
    while (num > 0) {
        rem = Math.trunc(num % 10);
        sum = (sum * 10) + rem;
        num = Math.trunc(num / 10);
    }

    num = temp;
    if (num === sum) {
        console.log(`${num} is a pallindrome`)
    } else {
        console.log(`${num} is not a pallindrome`)
    }
}

numberPallindrome(121); // 121 is a pallindrome
numberPallindrome(123); // 123 is not a pallindrome