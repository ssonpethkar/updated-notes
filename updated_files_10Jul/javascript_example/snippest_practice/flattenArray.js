
// <!-- flatten array : with inbuilt function -->

var arr1 = [1,2,3,[4,5,4],[5,0,[3,2,1]]]
var flattenArr = arr1.flat(Infinity)
console.log(flattenArr)

// <!-- o/p :
// [
//   1, 2, 3, 4, 5,
//   4, 5, 0, 3, 2,
//   1
// ] -->



// ----------------------------------------------------------------------------------------------------------------------------


// <!-- flatten array : without inbuilt function with recursion-->

var arr2 = [1,2,3,[4,5,4],[5,0,[3,2,1]]]

function deepFlatten(arr2){
    var result = []
    // <!-- using for loop -->
    // <!-- for(var i=0; i<arr2.length; i++){
    //     // console.log(arr2[i])
    //     // console.log(typeof(arr2[i]))
    //     if (Array.isArray(arr2[i])){
    //         console.log(arr2[i])
    //         result= result.concat(deepFlatten(arr2[i]))
    //     }else {
    //         // console.log(arr2[i])
    //        result.push(arr2[i])
    //     }
    // } -->

    // <!-- using for each loop -->

    arr2.forEach((item)=>{
        if(Array.isArray(item)){
            // console.log(item)
            result = result.concat(flattenWithForEach(item))
        }else{
            // console.log(item)
            result = result.push(item)
        }
    })

    console.log(result)
    return result;
}

deepFlatten(arr2)

// =======================================================================

// <!-- using reduce function + recursion -->

function flattenWithReduce(arr2){
    return arr2.reduce((acc,val)=>{
        return acc.concat(Array.isArray(val)? flattenWithReduce(val) : val)
    },[])
}

console.log(flattenWithReduce(arr2))

// =======================================================================

// var arr1 = [2,53,5,3,46,73,5,[3,5,3,5,64,2,1,[2,3,5,3]]]
var arr1 = [2,53,5,3,[46,73,5],[3,5,[3,5],64,2,1,[2,3,5,3]]]

function flattenArr(arr1,depth){
    var result = []
    for (var i=0; i<arr1.length; i++){
        // console.log(arr1[i])
        if(Array.isArray(arr1[i])&& depth>0){
            result = result.concat(flattenArr(arr1[i],depth-1))
        }else{
            result.push(arr1[i])
        }
    }
    return result;
}
var depth=2
console.log(flattenArr(arr1,depth))


