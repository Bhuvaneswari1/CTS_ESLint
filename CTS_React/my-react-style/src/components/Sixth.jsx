import React from 'react'
const items = [
    {
        name:'Pen',
        price: '10$'
    },
    {
        name:'Book',
        price:'12$'
    },
    {
        name:'Table',
        price:'15$'
    }
]
const Sixth = () => {
  return (
    <div>
        <ul>
            {
                items.map((item)=>{
                    <li key={item.name}>
                        Name: <span id={item.name}>{item.name}</span>&nbsp;
                        Price: <span id={item.price}>{item.price}</span>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Sixth