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

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, iniialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, iniialState);
    return (
        <>
            <div>
                <div>Count -- {count}</div>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </div>
            <div>
                <div>countTwo -- {countTwo}</div>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>
        </>
    )
}

export default CounterThree