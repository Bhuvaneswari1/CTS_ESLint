import React from 'react'
import './Third.css'

const Fourth = () => {
const items = ['Pen','Book','Table','Board','Bottle'];
  return (
    <div className='box'>
        <h1>List of array objects</h1>
        <h2>{items}</h2>
        <ul>
            {items.map((item,i)=>{
                return <li key='{i}'>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Fourth;