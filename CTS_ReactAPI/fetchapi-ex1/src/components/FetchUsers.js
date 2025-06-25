import React, { useEffect, useState } from 'react'
import UserList from './UserList'

const FetchUsers = () => {
    const [users,setUsers] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data =>{
            setUsers(data);
            console.log(data)
            setLoading(false)
        })
        .catch((err)=>{
            console.error(err)
            setLoading(false)
    })
    },[])

    if(loading) return <p>Loading users...</p>
  return <UserList users = {users} />
}

export default FetchUsers