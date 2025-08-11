### ✅ **HTML/CSS & General Web Concepts**
# what is semantic tags 
    - Semantic tags clearly describes the meaning of the content in an HTML document. They improve readability, accessibility and SEO.
    - <header> : represents the header section
    - <nav> : defines a navigation menu 
    - <article> : contains independent content
    - <section> : groups related content
    - <footer> : represents the footer section 

# SEO stands for search engine optimization

# What are meta tags 
    - Meta tags provided metadata about the HTML document and are placed inside the <head> section. They don't display on the page but help browsers and search engines understand the content
    - Common meta tags:
        - <meta charset="UTF-8"> – Sets character encoding.
        - <meta name="viewport" content="width=device-width, initial-scale=1.0"> – Makes pages responsive.
        - <meta name="description" content="..."> – Helps with SEO.
        - <meta http-equiv="X-UA-Compatible" content="IE=edge"> – Ensures compatibility with IE.

# Why do we use meta tags in a project 
    - we use meta tags to to : 
        - Improve SEO by providing descriptions and keywords 
        - ensure responsive design using the viewport tag 
        - specify the character encoding 
        - improve browser compatibility 
        - control caching behavior and social media previews 

# what is flexbox and its property 
    - flexbox is CSS layout model that arranges elements in a single row or column helping with responsive design and alignments 
    - display: flex => enables flexbox 
    - flex-direction => set the direction (row, column)
    - justify-content => aligns items horizontally (flex-start, center, space-between)
    - align-items => aligns items vertically (stretch, center)
    - flex-wrap => allows wraping of flex items 
    - flex => defines how items grow or shrink 

# position and its types in CSS 
    - The position property defines how an element is placed on a web page
    - Types of position
        - static (default) => Normal document flow 
        - relative => Positioned relative to its normal position 
        - absolute => Positioned relative to nearest positioned ancestor    
        - fixed => positioned relative to the viewport, doesn't move on scroll
        - sticky => Switches between relative and fixed depeding on scroll position

# where to use absolute & relative positioning ?
    - use relative when you want to shift an element slightly without breaking the flow. 
    - use absolute when placing an element at an exact location inside a positioned parent (with relative, absolute or fixed )
    - Ex : 
        - A tooltip or dropdown inside a button may use absolute positioning with a realtive button container.

# what is box model in CSS
    - The CSS box model is the layout foundation of every HTML element. it includes
    [margin] => Space outside the element, separating it from others
    [Border] => The edge around padding
    [Padding] => space between content and border
    [Content] => the actual content 

=============================================================================================================================

### ✅ **React Questions**

# 1. Virtual DOM vs real DOM
    - virtual dom is a lightweight copy of real dom. React copies the real DOM in memory. When changes occurs 
        - updates the DOM
        - compares new virtual DOM with previous one using diffing algorithm 
        - Applies only necessary changes in real DOM using reconcialltion

# 2. Lifecycle in React JS
    There are 3 phases of lifecycle in class component 
        1. Mounting phase 
        2. Updating phase 
        3. Unmounting phase 
    1. In Mounting phase, component is created and added to the DOM 
        There are 4 methods : 
            1. constructor
            2. getDerivedStateFromProps
            3. render
            4. componentDidMount

    2. In updating phase, when state and props changes 
        There are 5 methods 
            1. getDerivedStateFromProps
            2. shouldComponentUpdate
            3. render 
            4. getSnapshotBeforeUpdate
            5. componentDidUpdate

    3. In Unmounting phase, when component is removed from the DOM. It is used for cleaup functionality 
        There are only one method
            1. componentWillUnmount



# 3. Pure components
    - Pure component is a component its only rerenders when its state and props has changed 

# 4. Are you worked on class components?
    No I haven't worked on class components. But I have idea about it 

# 5. Controlled component vs uncontrolled components
    - controlled component : 
        - Controlled component is a form input element like select, input, textarea whose value is handled by react state 
        - its used when you need full access of component for form validations
        - you can access controlled component using useState and update using onchange
    - Uncontrolled component : 
        - Uncontrolled component is a form input element whose value managed internally by using DOM 
        - it is rare used
        - you can only read values whenever its needed. using useRefs

# 6. `useState` in class components
    - useState cannot be used in class components 
    - It is a react hook and react hook are only available in functional component 
    - 
# 7. Can we use hooks in class components?
    - No, you can not use hooks in classcomponents 
    - class component is use this.state and this.setState
    - hooks do not work inside class components 

# 8. State & props
    - State is an object that handle dynamic data of the component when state changes then its rerendered
    - state is mutable
    - in state data is handled within component only

    - Props is a way to pass data from parent component to child component
    - props is immutable
    - In props data is handled from parent component and passed down to child 

# 9. React is declarative or imperative?
# 10. What are hooks in React JS?
    In react there are hooks presents 
        - useState
        - useEffect
        - useReducer
        - useLayoutEffect
        - useMemo 
        - useCallback 
        - useContext 
        - useRef

# 11. Can we pass data from child to parent & how it works?
    - yes we can pass data from child to parent component by using 
        - context API 
        - redux 
        - callback functions 

# 12. What is used for React state management?


<!-- ===========================================================================================================================-->

### ✅ **General JavaScript Questions**

# 1. Can we apply loop over the object?
    yes, you can loop over an object but not direcctly with for...of like arrays. 
    there are 3 ways to loop over an object 
        - for...in
        - Object.keys
        - Object.entries
# 2. Fetch vs Axios
# 3. Rest & spread operator
    spread operator : 
        - spread operator is used for expand elements of an array or object
    
    rest operator : 
        - rest operator is used to collects remaining elements of an array or object

# 4. JS is synchronous or asynchronous?
    - JS is by default synchronous but we can run as a asynchronous using callback, promise and async/await 

# 5. Types of functions
    - function declaration 
    - function expressions
    - arrow function
    - callback function 
    - anonymous function 
    - IIFE 
    - higher order function 
    - async functions
    - generator function 

# 6. Higher order functions
    - higher order function is a function that can passes as an argument to another function and return new functions with additional features

# 7. Callback function
    - callback function is a function that can passed as an argument to another function and executed later 

# 8. `this` keyword
# 9. `console.log(this)`
# 10. Promises vs callback hell vs async/await
# 11. Types of promises
    there are no official 
# 12. Without async can we use await?
    - No 
# 13. Object prototype
# 14. Deep copy & shallow copy
    - Shallow copy : 
        - it copies only outer object but not copies nested object
    - deep copy : 
        - its create same reference and copies outer object as well as nested objects. 

# 15. Event bubbling & event capturing
    Event bubbling :
    - Events starts from child component and bubbles upto parent component 
    - it is used in event loop 

    Event capturing 
    - Events starts from parent component and travels down to child component 
    - it is rarely used 

# 16. How JS works, how API call works & event loop works

# 17. `map`, `filter`, `reduce`
    - map : transform each element and returns a new array 
    - filter : transform element when the conditions satiesfied and returns a new array 
    - reduce : its returns a single value 

# 18. Currying
    - Currying breaks down a function argument in a chain and takes single single parameter takes each functions 

# 19. Object destructuring
# 20. `for...of`
# 21. `forEach` vs `for...in`
# 22. `let`, `var`, `const`

# 23. Temporal Dead Zone & which variable will get
    The time between when a variable is hoisted and when it is initialized. 
    This applies to variable declared with let and const

# 24. Uncaught reference error & in which scenarios we get this error
    - an uncaught REferenceerror occurs when you try to access a variable or function that hasn't been declared 
| Scenario                                                          | Example                           Reason                                     |
| ----------------------------------------------------------------- | ---------------------------------- | ------------------------------------------ |
| **Using undeclared variable**                                     | `console.log(x);`                  | `x` is not declared                        |
| **Accessing variable before declaration (with `let` or `const`)** | `console.log(a); let a = 5;`       | `a` is in Temporal Dead Zone (TDZ)         |
| **Misspelled variable name**                                      | `console.log(usre);`               | Typo: `user` vs `usre`                     |
| **Out of scope access**                                           | Inside function: `console.log(a);` | `a` is declared outside and not accessible |

# 25. Types of hoisting
    - variable hoisting 
    - class hoisting 
# 26. IIFE is hoisting or not
    IIFE is not hoisted 
    - IIFE is a immediately invoked function expressions 
    - its executed immediately after function invoking 
