import React, { useState } from 'react'

const LoginForm = () => {
    //state management
    const [username,setUsername] = useState('') //array destructuring
    //username - empty string , setUsername - holds the updated values
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    //Event Handlers
    const handleUsernameChange = (e) => setUsername(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleSubmit = (e) =>{
        e.preventDefault();

        //check that both fields have values
        if(username.trim()!=='' && password.trim()!==''){
            setMessage('Login Successful.')
        }
        else{
            setMessage('Please enter both username and password.')
        }
    }
  return (
    <div style={{maxwidth:'400px', margin:'auto',padding:'20px'}}>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
            
            <div>
                <label>UserName: </label>
                <input type='text' value={username} onChange={handleUsernameChange} />
            </div><br />
            <div>
                <label>Password: </label>
                <input type='password' value={password} onChange={handlePasswordChange} />
            </div><br />
            <button type="submit">Login</button><br /><br />
            {message && (
                <div style={{marginTop:'20px', fontWeight:'bold',color:'cadetblue'}}>
                    {message}
                </div>
            )}
        </form>
    </div>
  )
}

export default LoginForm