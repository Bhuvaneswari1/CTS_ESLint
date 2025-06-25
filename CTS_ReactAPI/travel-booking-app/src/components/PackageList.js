import React, { useEffect, useState } from 'react'
import api from '../api'
import {Link} from 'react-router-dom'

const PackageList = () => {
    const [packages, setPackages] = useState([])

    const fetchPackages = async() =>{
        const res = await api.get('/packages')
        setPackages(res.data)
    }

    const handleDelete = async(id) =>{
        await api.delete(`/packages/${id}`)
        fetchPackages();
    }

    useEffect(()=>{
        fetchPackages();
    },[])

  return (
    <div className = 'container'  style={{ marginLeft: '30px' }}>
        <h2>Available Packages</h2>
        <table className='table table-striped mt-3'>
            <thead>
                <tr>
                    <th>Destination</th>
                    <th>Price</th>
                    <th>Days</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {packages.map(pkg =>(
                    <tr key={pkg.id}>
                        <td>{pkg.destination}</td>
                        <td>{pkg.price}</td>
                        <td>{pkg.days}</td>
                        <td>
                            <Link to={`/view/${pkg.id}`} className='btn btn-sm btn-info me-2'>View</Link>
                            <Link to={`/edit/${pkg.id}`} className='btn btn-sm btn-warning me-2'>Edit</Link>
                            <button className='btn btn-sm btn-danger' onClick={()=>handleDelete(pkg.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default PackageList