import React, { useEffect, useState, useRef } from 'react'

const Timer = () => {
    const timerRef = useRef(null)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(()=>{
        if(isRunning){
            timerRef.current = setInterval(()=>console.log('tick'),1000)
        }

        return()=>{
            clearInterval(timerRef.current)
        }
    },[isRunning])

    const stopTimer = () => setIsRunning(false)
    const startTimer = () => setIsRunning(true)
    
  return (
    <div>
        <h3>Timer {isRunning?'Running':'Stopped'}</h3>
        <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
        <button onClick={startTimer} disabled={isRunning}>Start</button>
    </div>
  )
}

export default Timer