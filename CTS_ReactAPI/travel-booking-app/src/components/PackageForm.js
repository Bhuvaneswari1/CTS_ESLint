import React, { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

const PackageForm = () => {
    const [form, setForm] = useState({
        destination:'',
        price:'',
        days:''

    })

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await api.post('/packages',form)
        navigate('/')
    }

  return (
    <div className='container'>
        <h2>Add New Travel Packages</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label>Destination</label>
                <input className='form-control' name='destination' onChange={handleChange} required />
            </div>
            <div className='mb-3'>
                <label>Price</label>
                <input className='form-control' name='price' onChange={handleChange} required />
            </div>
            <div className='mb-3'>
                <label>Days</label>
                <input className='form-control' name='days' onChange={handleChange} required />
            </div>
            <button className='btn btn-success'>Add Package</button>
        </form>
    </div>
  )
}

export default PackageForm