var arr1 = [6,8,9,3,2,1,4,6,3,2]
var uniqueArr= [...new Set(arr1)];
console.log(uniqueArr)

// o/p : 
// [
//   6, 8, 9, 3,
//   2, 1, 4
// ]

// -----------------------------------------------------------------

var string = 'hello'
var splitString = string.split('')
console.log(splitString)

var uniqueString = [...new Set(splitString)]
console.log(uniqueString)

var joinUniqueString = uniqueString.join('')
console.log(joinUniqueString)

// o/p : 

// [ 'h', 'e', 'l', 'l', 'o' ]
// [ 'h', 'e', 'l', 'o' ]
// helo

// ----------------------------------------------------------------------------------------

// find unique without inbuilt function 


function uniqueFun(arr1){
    var result = []
    var isDuplicate =  false
    // for(var i=0; i<arr1.length; i++){
    //     // console.log(arr1[i])
    //     for(var j=0; j<result.length; j++){

    //         // console.log(arr1[i], " ",arr1[j])
    //         if (arr1[i]== result[j]){
    //             isDuplicate = true;
    //             break
    //         }  
    //     }   

    //     if (!isDuplicate){
    //         result.push(arr1[i])
    //     }
        
    // }
    
    arr1.forEach(item => {
        
        result.forEach(existingItem => {
            if(item === existingItem){
                isDuplicate = true;
            }
        });
        if (!isDuplicate){
            result.push(item)
        }

    });
    return result;
}

console.log(uniqueFun(arr1));



