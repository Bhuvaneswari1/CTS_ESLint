import React, { useState } from 'react'

const Example1 = () => {
    const [count,setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const [name,setName] = useState('')
  return (
    <>
    <h1>UseState Examples</h1>
    <div>
        <button onClick={()=>setCount(count+1)}>Count: {count}</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div><br />
    <div>
        <button onClick={()=>setIsVisible(!isVisible)}>Toggle</button>
        {isVisible && <p>I am visible</p>}
    </div><br />
    <div>
        UserName: <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
        Hello {name}
    </div>
    </>
  )
}

export default Example1