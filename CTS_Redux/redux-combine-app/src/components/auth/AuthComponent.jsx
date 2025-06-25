import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {login, logout} from './authSlice'

const AuthComponent = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const dispatch = useDispatch();
  return (
    <div style={{padding: '10px', border: '1px solid blue', margin:'10px'}}>
        <h2>Authentication</h2>
        <p>Status: {isLoggedIn? 'Logged In': 'Logged Out'}</p>
        <button onClick = {()=> dispatch(login())}>Login</button>{" "}
        <button onClick = {()=> dispatch(logout())}>Logout</button>
    </div>
  )
}

export default AuthComponent