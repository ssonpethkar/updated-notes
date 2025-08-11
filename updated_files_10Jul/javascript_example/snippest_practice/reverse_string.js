// <!-- // reverse a string - with inbuilt function -->

var name = 'hello'

var splitString = name.split('');
console.log(splitString)

var reverseString= splitString.reverse()
console.log(reverseString)

var joinReverseString = reverseString.join('')
console.log(joinReverseString)

// o/p :
// [ 'h', 'e', 'l', 'l', 'o' ]
// [ 'o', 'l', 'l', 'e', 'h' ]
// olleh
 

var reverseName = name.spilt('').reverse().join('')
console.log(reverseName)
// <!-- o/p : olleh -->

// =============================================================================
// reverse a string without inbuilt function
var name = 'hello'
function reverseString(name){
    var result = []
    for(var i=name.length-1; i>=0; i--){
        result.push(name[i])
    }
    console.log(result)
    result= result.join("")
    return result
    
}

console.log(reverseString(name))