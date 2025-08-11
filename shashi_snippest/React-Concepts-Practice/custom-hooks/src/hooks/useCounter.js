import {useState} from 'react'

function useCounter(initialValue, value) {
    const [count, setCount] = useState(initialValue)

    const increment = () => {
        setCount(prevState => prevState + value)
    }

    const decrement = () => {
        setCount(prevState => prevState - value)
    }

    const reset = () => {
        setCount(value)
    }

    return [count, increment, decrement, reset]
}

export default useCounter