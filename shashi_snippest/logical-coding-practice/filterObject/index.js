const people = [
    {name: "Alice", age: 25, gender: "female"},
    {name: "Charlie", age: 30, gender: "male"},
    {name: "Eva", age: 45, gender: "female"},
]

const groupByGender = people.reduce((accmulator, currentValue) => {
    const gender = currentValue.gender;

    if (!accmulator[gender]) {
        accmulator[gender] = [];
    }

    accmulator[gender].push(currentValue);

    return accmulator;
}, {});

console.log(groupByGender);

/*   Output  */
// {
//     female: [
//         { name: 'Alice', age: 25, gender: 'female' },
//         { name: 'Eva', age: 45, gender: 'female' }
//     ],

//     male: [ { name: 'Charlie', age: 30, gender: 'male' } ]
// }