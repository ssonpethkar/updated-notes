// closure 
function outerFunc(){
    let count = 0; 
    return function innerFunc(){
        count++;
        return count;
    }
    // return count
}

let counter = outerFunc()
console.log(counter())
console.log(counter())
console.log(counter())

// -------------------------------------------------------------------------------
// curried function 
function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
let curriedFunc= sum(1)(2)(3)
console.log(curriedFunc)

// -------------------------------------------------------------------------------
//reverse a string 
let str ="WERTYoikjhgf"
let reverseString = str.split("").reverse().join("")
console.log(reverseString)

// -------------------------------------------------------------------------------
//  palindrome 
let str1 = "madam"
function checkPalindrome(str1){
    // console.log(str1.split("").reverse().join(""))
    return str1 === str1.split("").reverse().join("")
}
console.log(checkPalindrome(str1))

// -------------------------------------------------------------------------------
// 1st letter should capital 
let str2 = "this is swati"
function capitalFirstLetter(str2){
    let splitStr = str2.split(" ");
    let newStr = splitStr.map((word)=> word.charAt(0).toUpperCase()+word.slice(1)) .join(" ")
    console.log(newStr)
    return newStr
}
console.log(capitalFirstLetter(str2))

OR
function capitalize(str2) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalize(str2))
// -------------------------------------------------------------------------------

// remove duplicated 
let arr = [5,5,1,6,4,3]
let removeDuplicates = [...new Set(arr)]
console.log(removeDuplicates)

// -------------------------------------------------------------------------------

// flatten nested array 
let arr1 = [5,2,3,[4,[4,4],2,4,[8,3]]]
let flattenArr = arr1.flat(Infinity)
console.log(flattenArr)

// without inbuilt function flattenarry 

// let arr1 = [5,2,3,[4,[4,4],2,4,[8,3]]]

function flattenArrWithoutInbuilt(arr1){
    var result = []
    for(var i=0; i<arr1.length; i++){
        // console.log(typeof(arr1[i]));
        if(Array.isArray(arr1[i])){
            console.log(result)
            result = result.concat(flattenArrWithoutInbuilt(arr1[i]))
        }else{
            result.push(arr1[i])
        }
    }
    return result;
}
console.log(flattenArrWithoutInbuilt(arr1))
// -------------------------------------------------------------------------------
// count the alphabates and its occurance

let str4 ="eeeeeeeeertyuiokjhgfdxcvbnm345678765432mhgfdfgtyuio"

function countCharOccurance(str){
    let result = {}
    let splitStr = str.split("")
    let uniqueStr = [...new Set(splitStr)]
    console.log(uniqueStr)
    console.log(splitStr)
    for(let i=0; i<uniqueStr.length; i++){
        let count =0
        // console.log(uniqueStr[i])
        for(let j=0; j<splitStr.length; j++){
            // console.log(splitStr[j])
            if(uniqueStr[i] == splitStr[j]){
              count++
              
            // }else {
            //     result[uniqueStr[i]]=1
            }
        }
        result[uniqueStr[i]] = count
    }
    return result;
}
console.log(countCharOccurance(str4))

















