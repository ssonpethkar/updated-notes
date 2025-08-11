# Q1.Can you explain how JavaScript handles scoping and what the difference is between function scope and block scope?
JavaScript uses lexical scoping, which means the scope of variables is determined at the time the code is written, not at runtime. There are three main scopes:

Global Scope – Variables declared outside any function or block are globally scoped and accessible anywhere.

Function Scope – Variables declared with var inside a function are scoped to that function and cannot be accessed outside of it.

Block Scope – Introduced with let and const in ES6. Variables declared inside a block ({}) are only accessible within that block.

For example:

function test() {
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log(x); // 10 – function-scoped
  console.log(y); // ReferenceError – block-scoped
}
This shows that var is function-scoped, while let and const are block-scoped.

# Q2. Can you explain the differences between them and when you’d use each one?
var, let, and const are all used to declare variables in JavaScript, but they differ in scope, hoisting, and mutability:

🔹 var

Function-scoped

Can be re-declared and reassigned

Hoisted to the top of its function scope with a value of undefined

Should generally be avoided in modern code

🔹 let

Block-scoped

Can be reassigned, but not re-declared in the same scope

Hoisted, but in a Temporal Dead Zone (TDZ), so accessing it before declaration throws a ReferenceError

🔹 const

Block-scoped

Cannot be reassigned or re-declared

Like let, it's hoisted with TDZ

The value it holds is immutable only for primitives — objects and arrays declared with const can still be mutated.

# Q3.Can you explain closures in JavaScript and give a real-world use case where a closure is useful?
A closure is when an inner function has access to the outer function's variables, even after the outer function has returned. It's often used to preserve state, such as in counters, and helps in data encapsulation.
 🛠️ Real-world Use Cases:
Data privacy (private variables)

Memoization / caching

Event handlers

Functional programming patterns

# Q4. Can you explain this keyword in JavaScript — and how its value changes in arrow functions, regular functions, and event handlers?
The this keyword refers to the context in which a function is called — it determines what object this points to.

Its value depends on how a function is invoked, not where it's defined.

You're close — you're on the right topic, but let’s level this up to a **clear, technical explanation**. The `this` keyword is one of the **most misunderstood parts of JavaScript**, and as a 4-year developer, you’ll want to show confidence and clarity.

---

### ✅ **Polished Answer: `this` in JavaScript**

> The `this` keyword refers to the **context** in which a function is called — it determines what object `this` points to.
>
> Its value depends on **how a function is invoked**, not where it's defined.

---

### 📌 `this` in Different Contexts:

#### 🔹 1. **Global context**

```js
console.log(this); // In browser: window
```

#### 🔹 2. **Regular functions**

```js
function show() {
  console.log(this);
}
show(); // In non-strict mode: window, in strict mode: undefined
```

#### 🔹 3. **Object methods**

```js
const obj = {
  name: "Swati",
  greet() {
    console.log(this.name);
  }
};
obj.greet(); // 'Swati' — `this` refers to obj
```

#### 🔹 4. **Arrow functions**

> Arrow functions do **not have their own `this`**. They inherit it from the **lexical (surrounding) scope**.

```js
const obj = {
  name: "Swati",
  greet: () => {
    console.log(this.name);
  }
};
obj.greet(); // undefined (or window.name)
```

#### 🔹 5. **In Event Handlers**

```js
element.addEventListener('click', function() {
  console.log(this); // refers to the element
});

element.addEventListener('click', () => {
  console.log(this); // refers to the lexical context (likely window)
});
```

---

### 🚫 Common Mistake:

Saying "`this` gives data from that function" isn’t technically clear. Instead, say:

> "`this` refers to the object that **invoked** the function, and its value depends on how the function is called."

---

### 💬 Ready for the next round?

Let’s move to **DOM & Browser APIs**.
**Q5.** Can you explain the phases of **event propagation** and how you would stop an event from bubbling?

(Your turn!)
