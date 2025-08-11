closure , currying , 
promise, callback, async/await
map filter reduce
call apply bind 
setTimeout, setInterval 

useState , useEffect, useMemo, useCallback, useContext
lazy loading , code splitting, redux , debounce, throttling

usecases of hooks 

css html 


[
  { id: 1, text: 'Root', replies: [
      { id: 2, text: 'Child 1', replies: [] },
      { id: 3, text: 'Child 2', replies: [
          { id: 4, text: 'Child 2.1', replies: [] }
      ] }
  ]}
]


o/p:
[
  { id: 1, level: 0 },
  { id: 2, level: 1 },
  { id: 3, level: 1 },
  { id: 4, level: 2 }
]


useEffect(()={
	return
},[props]) 



const indiaTax = { taxRate: 0.18 };
const usTax = { taxRate: 0.07 };
const germanyTax = { taxRate: 0.2 };

console.log("India:", totalInIndia);
console.log("US:", totalInUS);


const totalInGermany = germanCalculator(100, 2);
console.log("Germany:", totalInGermany);


error boundry , 
lifecycle hooks
virtual dom 
reconcillation
how to handle errors in react
SAAS
how to handle theme changing using css
controlled component and uncontrolled component
react hooks
SSR - which is used ?(next.js)
optimization technique
react.memo, useMemo, useCallback 
webpack 
