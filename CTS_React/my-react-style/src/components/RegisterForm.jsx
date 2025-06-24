import React, { useState } from 'react'

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        department:'',
        password:'',
        confirmpassword:'',
        year:''
    })
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(prev =>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(formData.password !== formData.confirmpassword){
            setError('❌ Password and Confirm Password do not match')
            setSubmitted(false);
            return;
        }
        //Clearing the error
        setError('')
        console.log('Form Submitted: ',formData)
        setSubmitted(true)
    }
  return (
    <div style={{maxWidth:'400px',margin:'auto'}}>
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type='text' name='name' value={formData.name} 
                onChange={handleChange} required />
            </div><br />
            <div>
                <label>Email: </label>
                <input type='email' name='email' value={formData.email}
                onChange={handleChange} required />
            </div><br />
            <div>
                <label>Department: </label>
                <input type='text' name='department' value={formData.department}
                onChange={handleChange} required />
            </div><br />
            <div>
                <label>Password: </label>
                <input type='password' name='password' value={formData.password}
                onChange={handleChange} required />
            </div><br />
            <div>
                <label>Confirm Password: </label>
                <input type='password' name='confirmpassword' value={formData.confirmpassword}
                onChange={handleChange} required />
            </div><br />
            <div>
                <label>Year: </label>
                <select name='year' value={formData.year} onChange={handleChange} required>
                    <option value=''>Select Year</option>
                    <option value='1'>First Year</option>
                    <option value='2'>Second Year</option>
                    <option value='3'>Third Year</option>
                    <option value='4'>Final Year</option>
                </select>
            </div><br />
            <button type="submit">Register</button>
        </form>
        {error && (
            <div style={{color:'red', fontWeight:'bold'}}>
                {error}
            </div>
        )}

        {submitted && !error && (
            <div style={{marginTop:'20px',color:'green'}}>
                <h4>Registration Successful!</h4>
                <p><strong>Name: </strong>{formData.name}</p>
                <p><strong>Email: </strong>{formData.email}</p>
                <p><strong>Department: </strong>{formData.department}</p>
                <p><strong>Password: </strong>{formData.password}</p>
                <p><strong>Confirm Password: </strong>{formData.confirmpassword}</p>
                <p><strong>Year: </strong>{formData.year}</p>
            </div>
        )}
    </div>
  )
}

export default RegisterForm