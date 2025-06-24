import React, { useState } from 'react'

const NestedComp = () => {
    const [data] = useState([
        {name:'Dhoni'},
        {name:'Kohli'},
        {name:'Pandya'}
    ])
  return (
    <div>
        <PlayerName />
        <ul>
            {data.map((item,i)=>(
                <List key={i} data={item} />
            ))}
        </ul>
    </div>
  )
}

function PlayerName(){
    return(
        <div>
            <h1>Player Names</h1>
        </div>
    )
}

function List({data}){
    return <li>{data.name}</li>
}
export default NestedComp