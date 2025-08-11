//  add object
const obj = {
  name: "swati",
};

obj.lastName = "Sonpethkar"; // works same for add
obj["city"] = "New York"; // works same for add
console.log(obj);

// delete from object
delete obj.name;
console.log(obj);

// ==============================================================================================================

// // ##  **1. Creating Objects**

// Object literal
const obj1 = { name: "John" };

// Constructor function
function Person(name) {
  this.name = name;
}
const obj2 = new Person("Alice");

// Object.create
const obj3 = Object.create(null); // No prototype

// ==============================================================================================================

// ##  **2. Property Access**

const user2 = { name: "Bob", "user-age": 25 };

console.log(user2.name); // Dot notation
console.log(user2["user-age"]); // Bracket notation

// ==============================================================================================================

// ##  **3. Property Shorthand & Computed Properties**

let age1 = 30;
let prop = "country";

const person1 = {
  name: "Eve",
  age1, // shorthand
  [prop]: "USA", // computed property
};

console.log(person1); // { name: 'Eve', age: 30, country: 'USA' }

// ==============================================================================================================

// ##  **4. Property Descriptors**

const objNew = {};
Object.defineProperty(objNew, "id", {
  value: 101,
  writable: false, // read-only
  enumerable: true,
  configurable: false,
});

console.log(objNew.id); // 101
objNew.id = 200; // ignored due to writable: false

// ==============================================================================================================

// ##  **5. Object Methods**

// * **`Object.keys(obj)`** → array of property names
// * **`Object.values(obj)`** → array of values
// * **`Object.entries(obj)`** → array of `[key, value]` pairs
// * **`Object.assign(target, source)`** → copies properties
// * **`Object.freeze(obj)`** → makes object immutable
// * **`Object.seal(obj)`** → prevents adding/removing props but allows modifying values

const person = { name: "Sam", age: 25 };
console.log(Object.keys(person)); // ['name', 'age']
console.log(Object.values(person)); // ['Sam', 25]
console.log(Object.entries(person)); // [['name', 'Sam'], ['age', 25]]

// ==============================================================================================================

// ##  **6. Cloning Objects**

const original = { a: 1, b: 2 };

// Shallow clone
const clone1 = { ...original };
const clone2 = Object.assign({}, original);

// Deep clone
const deepClone = JSON.parse(JSON.stringify(original));

// ==============================================================================================================

// ##  **7. Checking Properties**

const user = { name: "Leo" };

console.log("name" in user); // true
console.log(user.hasOwnProperty("name")); // true

// ==============================================================================================================

// ##  **8. Merging Objects**

const obj11 = { a: 1 };
const obj21 = { b: 2 };
const merged = { ...obj11, ...obj21 };
console.log(merged); // { a: 1, b: 2 }

// ==============================================================================================================

// ##  **9. `this` in Objects**

const user1 = {
  name: "Mike",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};
user1.greet(); // Hello, I'm Mike

// ==============================================================================================================

// ##  **10. Object Destructuring**

const user3 = { name: "John", age: 30 };
const { name, age } = user3;
console.log(name, age); // John 30

// ==============================================================================================================

// ##  **11. Optional Chaining & Nullish Coalescing**

const user4 = { profile: { city: "NY" } };
console.log(user4?.profile?.city); // NY
console.log(user4?.address?.street ?? "Not Available"); // Not Available

// ==============================================================================================================

// ##  **12. Object References**
// Objects are **reference types** — assigning them copies the reference, not the value:

let a = { x: 1 };
let b = a;
b.x = 5;
console.log(a.x); // 5

// ==============================================================================================================
