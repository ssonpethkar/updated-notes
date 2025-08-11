# 1. What is the difference between functional components and class components in React?
  - Functional components are JavaScript functions that return JSX. 
  - Initially, they were stateless, but with the React Hooks they can now manage state and side effects.

  - Class components are ES6 classes that extend React.Component and use lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
  - class components are stateful and can manage state and side effects using lifecycle methods.

  - Today, functional components are preferred due to their simplicity and ability to use hooks.

# How does React achieve performance optimization when rendering? What is the Virtual DOM, and how does it help?
  
  - React uses virtual DOM to efficiently update the UI. Virtual DOM is a lightweight copy of real DOM. React keeps copy of real DOM in a memory. When its state or props changes, then it creates new virtual DOM and compares with previous one using diffing algorithm. And after that, it applies only change part in a real DOM using reconciliation method.

# What is the difference between useEffect and useLayoutEffect in React? When would you choose one over the other?
  - useEffect and useLayoutEffect are both hooks used to perform side effects in functional components.

  - useEffect runs asynchronously after the DOM has been painted, making it non-blocking. It's ideal for tasks like data fetching, subscriptions, or logging.

  - useLayoutEffect runs synchronously after all DOM mutations but before the browser paints. It blocks the paint, which makes it suitable for measuring layout, updating DOM styles, or reading layout dimensions.

  - I use useEffect in most cases, and switch to useLayoutEffect only when I need to make layout changes that must happen before the browser renders the screen to avoid visual flicke

# What is prop drilling in React, and how can you avoid it?
  - Prop drilling is the process of passing props through multiple levels of nested components, even if the intermediate components don't need those props they need to forcefully accept it and forward to another child component. This can make the code harder to maintain and less reusable.

  - To avoid prop drilling, we can:
    - Use the React Context API for global state.
    - Use Redux or other state management libraries for more complex state sharing.
    - In simpler cases, we can just lift the state up to the nearest common ancestor.

# How do you optimize a React component to avoid unnecessary re-renders?


# How would you implement routing in a React application? Can you also explain how you'd handle dynamic routes like /user/:id?