function countString(str, letter) {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count++;
        }
    }
    return count;
}

console.log(countString('school', 'o')); // 2