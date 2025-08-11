import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

function CounterTwo() {
    const [count, increment, decrement, reset] = useCounter(5, 10)

  return (
    <>
    <h2>Count = {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default CounterTwo