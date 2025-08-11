/*
    5431 => 5 + 4 + 3 + 1 = 13
    13 => 1 + 3 = 4
*/

function addData(data) {
    let convertToString = ""+ data;

    let convertToArray = convertToString.split('').map(data => {
        return parseInt(data);
    });

    let finalOutput = convertToArray.reduce((a, b) => a + b)

    if (finalOutput > 10) {
        addData(finalOutput)
    } else {
        console.log(finalOutput)
    }
}

addData(5431);