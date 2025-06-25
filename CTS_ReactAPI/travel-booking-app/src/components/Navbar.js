import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-4'>
        <div className='container'>
            <Link className='navbar-brand' to='/'>Travel Booking App</Link>
            <div>
                <Link className='btn btn-light me-2' to='/'>Packages</Link>
                <Link className='btn btn-light me-2' to='/add'>Add Packages</Link>
                <Link className='btn btn-light' to='/logout'>Logout</Link>
            </div>
        </div>

    </nav>
  )
}

export default Navbar