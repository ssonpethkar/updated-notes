let str = "[({})]";

function checkStr(str) {
for (let i = 0; i < str.length; i++) {
    let j = str.charAt(i);

    if (str.indexOf(i) === str.lastIndexOf(j++)) {
        return true;
    }
}

return false;
}

console.log(checkStr(str));