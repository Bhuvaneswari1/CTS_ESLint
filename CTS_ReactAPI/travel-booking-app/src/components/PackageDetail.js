import React, { useEffect } from 'react'
import api from '../api'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react';

const PackageDetail = () => {
    const {id} = useParams();
    const [pkg, setPkg] = useState({})

    useEffect(()=>{
        api.get(`/packages/${id}`)
        .then(res=>setPkg(res.data))
    })
  return (
    <div className='container'>
        <h2>Package Details</h2>
        <ul className='list-group'>
            <li className='list-group-item'>Destination: {pkg.destination}</li>
            <li className='list-group-item'>Price: ₹{pkg.price}</li>
            <li className='list-group-item'>Days: ₹{pkg.days}</li>
        </ul>
        <Link to='/' className='btn btn-secondary mt-3'>Back</Link>
    </div>
  )
}

export default PackageDetail