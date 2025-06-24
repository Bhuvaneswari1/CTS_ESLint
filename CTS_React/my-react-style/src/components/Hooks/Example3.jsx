import React, { useEffect, useState } from 'react'

const Example3 = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title = `Clicked ${count} times`
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
        {document.title}
    </div>
  )
}

export default Example3