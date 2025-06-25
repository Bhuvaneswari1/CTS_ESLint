import React from 'react'
import UserItem from './UserItem'

const UserList = ({users}) => {
  return (
    <div style={{padding:'10px'}}>
        <h2>User List</h2>
        <ul>
            {
                users.map(user =>(
                    <UserItem key={user.id} user={user} />
                ))
            }
        </ul>
    </div>
  )
}

export default UserList