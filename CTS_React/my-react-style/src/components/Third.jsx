import React from 'react'
import './Third.css'

const elementId = "myId";
const message = "Hello World!"
const name = "Bhuvaneswari"

const Third = () => {
  return (
    <div>
    <h3>Third Component</h3>
    <div className='container'>
        {/* <h1 id={elementId}>{message}</h1> */}
        <h1 id='myId'>{"Hello "+name.toUpperCase()}</h1>
        <p>I am writing JSX</p>
    </div>
    </div>
  )
}

export default Third