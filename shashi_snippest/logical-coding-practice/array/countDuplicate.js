// count duplicate element from an array of strings

function countDuplicate(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}

let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Saturday", "Sunday", "Friday"];

console.log(countDuplicate(arr));