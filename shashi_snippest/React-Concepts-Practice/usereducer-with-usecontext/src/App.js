import React, { useReducer } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CountContext = React.createContext();

const iniialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return iniialState
    default: return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, iniialState);

  return (
    <div className="App">
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}>
        <h5>Count -- {count}</h5>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
