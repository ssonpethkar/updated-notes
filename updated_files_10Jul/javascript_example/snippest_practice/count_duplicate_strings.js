
var name = "swatifghjkrtyughsdfghjkkjhgfdfghjkgfsdfghnbvcx234567dfkjhgdfghsdfghjkkjhgfdfghjcvnmoertyuigfnbvcx"

var splitName = name.split('')
// console.log(splitName)

var unique = [...new Set(splitName)]
// console.log(unique)

function countUnique(arr,arr1){
    const result = {}
    
    for(var i=0; i<arr1.length; i++){
        // console.log(arr[i])
      result[arr1[i]] = 0;
    }
    
    for(var j=0; j<arr.length; j++){
        result[arr[j]] += 1;
    }
    // console.log(result)
    
    return result;
}
console.log(countUnique(splitName,unique))


// o/p: 
// {
//   '2': 1,
//   '3': 1,
//   '4': 1,
//   '5': 1,
//   '6': 1,
//   '7': 1,
//   s: 4,
//   w: 1,
//   a: 1,
//   t: 3,
//   i: 2,
//   f: 12,
//   g: 13,
//   h: 11,
//   j: 8,
//   k: 7,
//   r: 2,
//   y: 2,
//   u: 2,
//   d: 7,
//   n: 3,
//   b: 2,
//   v: 3,
//   c: 3,
//   x: 2,
//   m: 1,
//   o: 1,
//   e: 1
// }


var arr1 = [2,53,5,3,46,73,5,[3,5,3,5,64,2,1,[2,3,5,3]]]
var flattenArr= arr1.flat(Infinity)
console.log(flattenArr)

var uniqueNum = [...new Set(flattenArr)]
console.log(uniqueNum)

function countChar(arr1, arr2){
    var resultCount = {}
    
    for(var i=0; i<arr1.length; i++){
        resultCount[arr1[i]] = 0;
    }
    for(var j=0; j<arr2.length; j++){
        resultCount[arr2[j]] +=1
    }
    // console.log(resultCount)
    return resultCount;
}
console.log(countChar(uniqueNum, flattenArr))