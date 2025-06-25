import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement } from '../app/counterSlice'
import Testing from './Testing'

const Counter = () => {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Redux Counter</h1>
        <h2>{count}</h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>

      </div>
  )
}

export default Counter