import React,{useState} from 'react'

const LoginForm = () => {
    const [form, setForm] = useState({
        email:'',
        password:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]:value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Email: ${form.email}, Password: ${form.password}`)
        setForm({email:'',password:''})
    }
  return (
    <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type='email' name='email' value={form.email} onChange={handleChange} required/>
            <br /><br />
            <label>Password: </label>
            <input type='password' name='password' value={form.password} onChange={handleChange} required/>
            <br /><br />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm