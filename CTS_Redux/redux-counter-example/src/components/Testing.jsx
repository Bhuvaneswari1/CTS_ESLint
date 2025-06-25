import React from 'react'
import { useSelector } from 'react-redux';

const Testing = () => {
    const count = useSelector((state)=> state.counter.count)
  return (
    <div>
        <h2>Testing Component</h2>
        Count: {count}
    </div>
  )
}

export default Testing