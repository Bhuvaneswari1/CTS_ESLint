import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
//import {increment, decrement } from '../app/counterSlice'
import {increment,decrement} from './counterSlice'

const CounterComponent = () => {
    const count = useSelector((state)=> state.counter.value)
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

export default CounterComponent;

