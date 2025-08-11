<!-- https://50jobs.in/interviewguide -->

𝟭-𝟭𝟬: 𝗕𝗮𝘀𝗶𝗰𝘀 𝗼𝗳 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁

1. What is JavaScript?
    - javascrip is a scripting language to used dynamically update and manipulate the content of a web page
    - javascript is single threaded and synchronous programming language but we can run javascript asynchronously using callback, promise , async/await

2. Explain the difference between let, const, and var.
    var 
        var is function scoped
        var can be redeclared and reassigned
        var is hoisted and intialized with undefined
        if we are trying befole initializarion it gives undefined
    let 
        let is blocked scoped
        let can be reassigned but can't be redeclared
        let is hoisted but not initialized. it is leading temporal dead zone
        if we are tryingbefore initializarion it gives reference error 
    const 
        cost is blocked scoped
        const can't be redeclared and reassigned 
        const is hoisted but not initialized. it is leading temporal dead zone
        if we are tryingbefore initializarion it gives reference error 

3. How does hoisting work in JavaScript?
    hoisting is a default javascript behaviour that variable and functions are moved to the top of code before execution 
    variable decalred with var is hoisted but initialized with undefined 
    - variable declared with let and const are hoisted but not initialized it is leading to temporal dead zone 
    - functions are fully hoisted

4. Describe the concept of closures.
    - closure is a function that can outer function variable is accessed in inner function variable if the outer function has finished its execution it still gets accessd in inner function 
    - for example ; 


5. Explain the event loop in JavaScript.
    event loop is a mechanism that javascript runs asynchronously like setTimeout , promises
    - it runs in a single threaded enviornment and works with call stack, web APIS, microtask quesue , callback queue
    - event loop follows the flow of if call stack is empty then check microtask queue and then check callback queue then moved queue to call stack and reapeat it until the execution is not completed.

6. What is the difference between == and ===?
    == 
        - it is loosely equality 
        - it checks only value and type coerison happen 
    ===
        - it is strictly equality 
        - it checks value and its type. type coerison is not happen 

7. How do you check the type of a variable in JavaScript?
    - using typeof

8. What is the use of the this keyword in JavaScript?
    - this refers an object that takes it from current function execution 
    - this refers an object that executing it from current function 
    - its depends on how the function is called 
        in method
        in arrow function 
        in event handler

9. Explain the difference between function declaration and function expression.
    function declaration 
        - it is hoisted and you can use it before declaration 
        - it must be named function 
        - it can't be assigned to variable . you can assign it in a variable but function reference

    Function expression 
        - must be assigned in a variable 
        - can't be used before declaration it thows error 
        - it can be named or anonymous 

10. How does the setTimeout function work?


𝟭𝟭-𝟮𝟬: 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀 𝗮𝗻𝗱 𝗦𝗰𝗼𝗽𝗲

11. What is a callback function?
    - callback function is a function that can passed function as an argument in another function and its executed later

12. Explain the concept of a pure function.
    - pure function is a function that can gives same output for same input it is used for side effects. don't have any impact

13. Describe the differences between function.call, function.apply, and function.bind.
    call : invokes immediately , and passed arguments individually with specific this  
    apply ; it is same as call but passed arguments in an array with specific this 
    bind : it does not executed immediately and it returns new function with this bound 

14. What is the purpose of the arguments object in a function?

15. How do you create a closure in JavaScript?

16. What is the use of the bind method?

17. What is the difference between a shallow copy and a deep copy?
    shallow copy : 
        it copies only outer object and doesn;t copy inner object
        it copies primitive datatype and for non primitive it copies only reference 
    deep copy : 
        it copies outer object as well as inner object
        - in deep copy it copies primitive as well as non primitive datatype 

18. How does the call stack work in JavaScript?
    - call stack is a data structure is used in javascript to keep track of function execution. It operates in a last in, first out(LIFO) manner. - the last function called is the first one to finish.

19. Explain the concept of function currying.
    currying breaks down a function with multiple argument and executed in a chain and each takes one parameter 

# What is Callback Hell?
    Callback Hell happens when multiple nested callbacks make code:
        Hard to read
        Difficult to maintain
        Prone to bugs

20. How can you avoid callback hell in JavaScript? 
    - using promises, async/await we can avoid callback hell in javascript

𝟮𝟭-𝟯𝟬: 𝗢𝗯𝗷𝗲𝗰𝘁𝘀 𝗮𝗻𝗱 𝗣𝗿𝗼𝘁𝗼𝘁𝘆𝗽𝗲𝘀

21. What is prototypal inheritance?


22. How do you create an object in JavaScript?

23. What is the purpose of the prototype property in JavaScript?

24. Explain the difference between Object.create and the constructor pattern.

25. How do you add a property to an object in JavaScript?

26. What is the hasOwnProperty method used for?

27. How can you prevent modification of object properties in JavaScript?

28. Describe the use of the new keyword.

29. Explain the concept of Object Destructuring in JavaScript.

30. What is the difference between null and undefined?
    - null means no value or empty value. prommer assigned explicitly 
    - undefined means variable is declared but value is not assigned yet. its a default behavior of javascript

𝟯𝟭-𝟰𝟬: 𝗗𝗢𝗠 𝗠𝗮𝗻𝗶𝗽𝘂𝗹𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗘𝘃𝗲𝗻𝘁𝘀

31. What is the DOM?
    - DOM stands for document object model 
    - DOM reprenset a tree like structre of a web page that can access and manipulate the content of the structure

32. How do you select elements with Vanilla JavaScript?

33. Explain event delegation in JavaScript. 
    - event delegation is a technique that can attach a single event listenter on parent element instyead of attaching event listener on every chile element. its works due to event bubbling. 

34. What is the purpose of the addEventListener method? 
    - The addEventListener method is used to attach an event handler to a DOM element, so your code can respond to user interactions like clicks, keypresses , scrolling, form submission etc   

35. How do you create and remove elements in the DOM?
    `Create`
    - document.createElement()

    - Append it to the DOM
        document.body.appendChild(div); // Adds <div>Hello World!</div> to the body

    - Set attributes or styles
        div.setAttribute("id", "greeting");
        div.className = "message";
        div.style.color = "blue";

    `remove`
    1. element.remove()
    2. Or use parent.removeChild(child) (older approach)
        const parent = document.getElementById("container");
        const child = document.getElementById("greeting");
        parent.removeChild(child);


36. Explain the concept of event propagation.
    - event propagation is the process by which event travels through the DOM in phases when an event is triggered, 
    there are 3 phases 
        capturing phase( events starts from parent element and teavels down child element)
        targeting phase 
        bubbling phase ( event starts from child element and bubbles up to parent element)

37. How can you prevent the default behaviour of an event?
    event.preventDefault();

38. What is the purpose of the data- attribute in HTML?
    - embed custom data in HTML 

39. Describe the difference between innerHTML and textContent.

40. How do you handle asynchronous code in JavaScript?
    using promise, callback and async/await 

##  Real-time Scenario Git Interview Questions

1. How would you approach a critical bug fix when using GitFlow? Explain your process for managing the hotfix and ensuring it doesn’t disrupt ongoing development.

2. Describe a scenario where you would use a feature branch vs. a hotfix branch. Why is the distinction important?

3. how would you manage larger feature work that takes multiple days or weeks in a Trunk-Based Development approach?

4. Can you walk me through your strategy for merging long-lived branches like develop and master? How do you prevent conflicts and maintain stability?

5. When several developers work on related features, how do you minimise merge conflicts? Do you have any best practices?

6. How do you coordinate with team members on shared branches, especially in a DevOps setup where rapid deployments are key?

7. Explain how you’d handle a scenario where multiple feature branches must be integrated but have overlapping changes.

8. How do you use Git with CI/CD pipelines? Explain how you ensure commits on feature branches are production-ready.

9. In your experience, how has Git helped streamline DevOps processes? Give an example of how Git’s features support CI/CD workflows.

10. Describe a complex conflict you encountered in a past project and the steps you took to resolve it. What did you learn from that experience?

#### ######################################################################################################

---

### **1. Your JavaScript bundle is over 1 MB. What are the first steps you’d take to reduce its size?**

✅ **Answer:**

* Run a bundle analyzer (like `webpack-bundle-analyzer`) to identify large modules.
* Tree shake unused code.
* Replace heavy libraries with lighter alternatives.
* Use code splitting to split the app into smaller chunks.
* Minify and compress JavaScript (Terser + Gzip/Brotli).
* Lazy load components/pages when needed.

---

### **2. Explain the concept of code splitting. How would you implement it in a React application?**

✅ **Answer:**
Code splitting breaks your bundle into smaller chunks that are loaded on demand.
In React (with React Router):

```jsx
import React, { lazy, Suspense } from 'react';
const Profile = lazy(() => import('./Profile'));

<Route path="/profile" element={
  <Suspense fallback={<div>Loading...</div>}>
    <Profile />
  </Suspense>
} />
```

This loads `Profile` only when the route is accessed.

---

### **3. What is tree shaking in JavaScript bundlers, and how does it help reduce file size?**

✅ **Answer:**
Tree shaking removes unused exports from the final bundle.
It relies on ES6 `import/export` syntax and is supported by bundlers like Webpack and Rollup.

Example:

```js
// math.js
export function add() {}
export function subtract() {}

// main.js
import { add } from './math'; // Only 'add' is included in final build
```

---

### **4. How would you lazy load a module or component in vanilla JS? What about in React or Vue?**

✅ **Answer (Vanilla):**

```js
button.addEventListener('click', async () => {
  const module = await import('./dialog.js');
  module.showDialog();
});
```

✅ **React:**

```jsx
const Modal = React.lazy(() => import('./Modal'));
```

✅ **Vue (with Vue Router):**

```js
const About = () => import('./About.vue');
```

---

### **5. What tools would you use to analyze a large JavaScript bundle?**

✅ **Answer:**

* `webpack-bundle-analyzer`
* `source-map-explorer`
* `esbuild-analyze`
* Chrome DevTools (Coverage tab for unused JS)

These tools visualize bundle size, show which libraries are largest, and help with optimization decisions.

---

### **6. You’re importing a utility library like Lodash, but only need one function. How do you avoid including the entire library?**

✅ **Answer:**
Import only the specific function:

```js
import debounce from 'lodash/debounce';
// or better
import debounce from 'lodash-es/debounce';
```

Avoid `import _ from 'lodash'`, which pulls the whole library.

Also, use tree-shakable versions like `lodash-es`.

---

### **7. When would you choose to serve a JavaScript file via a CDN, and what are the benefits?**

✅ **Answer:**
Use CDN when:

* It’s a large, third-party library (e.g., jQuery, Chart.js).
* You want users to load from a cached version.
* You want to reduce server bandwidth.

**Benefits:**

* Faster load times (via edge caching).
* Shared cache across websites.
* Offloads your server.

---

### **8. What are `defer` and `async` in `<script>` tags, and how do they affect loading large scripts?**

✅ **Answer:**

| Attribute | Execution Timing                                   |
| --------- | -------------------------------------------------- |
| `async`   | Loads in parallel, executes immediately after load |
| `defer`   | Loads in parallel, executes after DOM is parsed    |

For large scripts, **`defer`** is preferred as it doesn’t block DOM parsing.

---

### **9. How does minification work, and what tools would you use to minify JavaScript in a production build?**

✅ **Answer:**
Minification removes unnecessary characters like whitespace, comments, and renames variables to reduce file size.

**Tools:**

* Terser (used by Webpack)
* UglifyJS
* esbuild

In Webpack:

```js
mode: 'production' // Enables Terser by default
```

---

### **10. What’s the impact of server-side rendering (SSR) on JavaScript load performance?**

✅ **Answer:**
SSR sends pre-rendered HTML from the server, improving **initial load time** and SEO.
JavaScript is then hydrated on the client side for interactivity.

**Benefits:**

* Faster time-to-content
* Better SEO
* Smaller initial JS payload

**Used in:** Next.js, Nuxt.js, Angular Universal

### ################################################################################################

To **integrate CI/CD with Jenkins**, you’ll follow a step-by-step process that connects your **source code repository (e.g., GitHub)** with **Jenkins**, sets up your **pipeline**, and automates **builds, tests, and deployments**.

---

## ✅ Step-by-Step Guide to Integrate CI/CD with Jenkins

---

### 🧱 Prerequisites

* ✅ Jenkins is installed and running (locally or on server).
* ✅ GitHub/GitLab/Bitbucket repo with your project (e.g., React, Node.js, Java).
* ✅ Jenkins has access to:

  * Internet (to clone repos, install packages)
  * Build tools (Node.js, npm, Java, Maven, Docker, etc.)

---

### 🚦 Step 1: Install Required Jenkins Plugins

Go to: **Jenkins Dashboard → Manage Jenkins → Plugins → Available**

Install:

* ✅ Git plugin
* ✅ Pipeline
* ✅ NodeJS (for JS apps)
* ✅ Blue Ocean (optional, for visual pipelines)
* ✅ SSH plugin (for remote deploys)
* ✅ GitHub plugin (for webhooks)

---

### 🧑‍💻 Step 2: Create a Jenkins Pipeline Project

1. **Jenkins Dashboard → New Item**
2. Choose: **"Pipeline"**
3. Name it (e.g., `react-app-pipeline`)
4. Select:

   * "Pipeline script from SCM" if using `Jenkinsfile` from repo
   * Or manually enter the pipeline script

---

### 🪄 Step 3: Add Your Git Repository

* In **Pipeline configuration**:

  * Choose **SCM: Git**
  * Enter your repo URL
  * Add credentials if it's private

---

### 📝 Step 4: Create a Jenkinsfile in Your Repo

Put this file at the root of your repo: `Jenkinsfile`

```groovy
pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/your/repo.git'
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        sh './deploy.sh'  // Or rsync/SCP/docker deploy
      }
    }
  }

  post {
    success {
      echo 'CI/CD completed successfully!'
    }
    failure {
      echo 'CI/CD failed. Check console logs.'
    }
  }
}
```

---

### 🔔 Step 5: Trigger Jenkins from Git Automatically (CI)

**Option A: Webhook (recommended)**

* Go to **GitHub → Repo Settings → Webhooks**
* Add:
  `http://your-jenkins-server/github-webhook/`

**Option B: Poll SCM (less efficient)**

* In Jenkins → Project Config:

  * Tick “Poll SCM”
  * Add: `* * * * *` (every minute)

---

### 🚀 Step 6: Deployment (CD)

Deploy options:

* 🟢 **SCP to server**:

  ```sh
  scp -r build/* user@server:/var/www/html/
  ```
* 🟢 **Docker**:
  Build & push Docker image.
* 🟢 **AWS S3**:

  ```sh
  aws s3 sync build/ s3://your-bucket-name
  ```
* 🟢 **Netlify/Firebase CLI**.

---

### 📊 Step 7: Monitor the Pipeline

* Go to **Build History** in Jenkins.
* View logs, test results, deploy status.
* Set up **Slack/Email notifications** (optional).

---

## 📌 Summary Flow

```
Git Push → Jenkins Webhook → CI/CD Pipeline:
[Checkout → Install → Test → Build → Deploy]
```


