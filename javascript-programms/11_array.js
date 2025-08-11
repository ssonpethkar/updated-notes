// // ## **1. Creating Arrays**

const arr1 = [1, 2, 3]; // Literal
const arr2 = new Array(1, 2, 3); // Constructor
const arr3 = Array.of(1, 2, 3); // Ensures correct creation
const arr4 = Array.from("hello"); // ['h','e','l','l','o']

// ===================================================================================================

// // ## **2. Access & Modify**

let fruits = ["apple", "banana"];
fruits[1] = "orange";
console.log(fruits[0]); // apple

// ===================================================================================================

// // ## **3. Adding & Removing Elements**

// | Method      | Adds/Removes | Position |
// | `push()`    | Add          | End      |
// | `pop()`     | Remove       | End      |
// | `unshift()` | Add          | Start    |
// | `shift()`   | Remove       | Start    |
// | `splice()`  | Add/Remove   | Anywhere |

let arr5 = [1, 2, 3];
arr5.push(4); // [1, 2, 3, 4]
arr5.pop(); // [1, 2, 3]
arr5.unshift(0); // [0, 1, 2, 3]
arr5.shift(); // [1, 2, 3]
arr5.splice(1, 1); // removes index 1 → [1, 3]

// ===================================================================================================

// // ## **4. Iterating**

arr5.forEach((num) => console.log(num));
for (let num of arr5) console.log(num);
for (let i in arr5) console.log(i, arr5[i]); // keys + values

// ===================================================================================================

// // ## **5. Searching & Checking**

let nums1 = [10, 20, 30];
nums1.includes(20); // true
nums1.indexOf(30); // 2
nums1.find((n) => n > 15); // 20
nums1.findIndex((n) => n > 15); // 1

// ===================================================================================================

// // ## **6. Transforming**

let nums2 = [1, 2, 3];
nums2.map((n) => n * 2); // [2, 4, 6]
nums2.filter((n) => n > 1); // [2, 3]
nums2.reduce((a, b) => a + b, 0); // 6
nums2.flatMap((n) => [n, n * 2]); // [1, 2, 2, 4, 3, 6]

// ===================================================================================================

// // ## **7. Sorting & Reversing**

let nums3 = [40, 100, 1, 5];
nums3.sort((a, b) => a - b); // [1, 5, 40, 100]
nums3.reverse(); // [100, 40, 5, 1]

// ⚠ Default sort converts to strings unless you provide a compare function.

// ===================================================================================================

// // ## **8. Joining & Splitting**

let fruits = ["apple", "banana"];
fruits.join(" - "); // "apple - banana"
"hello world".split(" "); // ["hello", "world"]

// ===================================================================================================

// // ## **9. Copying & Slicing**

let nums = [1, 2, 3];
let copy = nums.slice(); // [1, 2, 3]
let part = nums.slice(1); // [2, 3]
let shallow = [...nums]; // spread copy

// ===================================================================================================

// // ## **10. Flattening**

let nested = [1, [2, [3]]];
nested.flat(1); // [1, 2, [3]]
nested.flat(2); // [1, 2, 3]

// ===================================================================================================

// // ## **11. Filling & Creating**

Array(5).fill(0); // [0, 0, 0, 0, 0]
Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]

// ===================================================================================================

// // ## **12. Removing Duplicates**

let arr = [1, 2, 2, 3];
[...new Set(arr)]; // [1, 2, 3]

// ===================================================================================================

// // ## **13. Destructuring**

let [a, b, ...rest] = [1, 2, 3, 4];
console.log(a, b, rest); // 1 2 [3,4]

// ===================================================================================================

// // ## **14. Checking if Array**

Array.isArray([1, 2, 3]); // true

// ===================================================================================================

// // ## **15. Advanced Tricks**

// * **Rotate array**: `arr.push(arr.shift());

// * **Random shuffle**:
arr.sort(() => Math.random() - 0.5);

// * **Intersection**:
arr1.filter((x) => arr2.includes(x));

// * **Difference**:
arr1.filter((x) => !arr2.includes(x));

// ===================================================================================================

// *********** Empty array ****************************

// ## **1. Set `length = 0`** ✅ *(Fastest & affects references)*

let arr6 = [1, 2, 3];
arr6.length = 0;
console.log(arr6); // []

// =====================================================================

// ## **2. Reassign to a new empty array** 🚫 *(Does NOT affect references)*

let arr7 = [1, 2, 3];
arr7 = [];
console.log(arr7); // []

let a7 = [1, 2, 3];
let b7 = a7;
a7 = [];
console.log(b7); // [1, 2, 3] — unaffected

// =====================================================================

// ## **3. Use `splice()`** ✅ *(Affects references)*

let arr8 = [1, 2, 3];
arr8.splice(0, arr8.length);
console.log(arr8); // []

// =====================================================================

// 💡 **Interview Tip:**

// * **`length = 0`** and **`splice()`** modify the **original array** (affects references).
// * **`arr = []`** creates a new array (does not affect old references).

// =====================================================================
