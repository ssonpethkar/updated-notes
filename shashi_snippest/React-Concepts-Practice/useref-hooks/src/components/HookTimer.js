import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevState => prevState + 1)
        }, 1000);

        // example of closures
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <>
            <div>
                HookTimer: {timer}
            </div>
            <button onClick={() => clearInterval(intervalRef.current)}>Pause Timer</button>
        </>
    )
}

export default HookTimer