import React from 'react'
import mockProducts from '../data/mockProducts'


const Product = () => {
  return (
    <div className='mt-4'>
        <h4>Available Products</h4>
        <div className='row'>
            {mockProducts.map(p=>(
                <div key={p.id} className='col-12 col-md-6 col-lg-4'>
                    <div className='card mb-3 shadow-sm'>
                        <div className='card-body'>
                            <h5>{p.name}</h5>
                            <p>{p.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Product