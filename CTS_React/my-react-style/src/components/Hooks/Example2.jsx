import React, { useEffect, useState } from 'react'

const Example2 = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUsers(data)
    })
    })
  return (
    <div style={{padding: '20px'}}>
        <h2>Users List</h2>
        {users.length === 0 ?(
            <p>Loading users...</p>
        ):(
            <ul>
                {users.map(user=>(
                    <li key = {user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Example2