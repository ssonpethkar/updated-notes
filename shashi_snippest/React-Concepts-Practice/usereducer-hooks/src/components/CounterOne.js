import React, { useReducer } from 'react'

const iniialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return iniialState
        default: return state;
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, iniialState);
    return (
        <>
            <div>Count -- {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </>
    )
}

export default CounterOne