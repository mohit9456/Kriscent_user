import React from 'react'
import NavTop from '../Navigation/NavTop'

const Products = () => {
  return (
    <div>
        <NavTop />
        <p className='text-center mt-5 fw-bold fs-3 text-secondary'>Sorry ! Out Of Stock </p>
        <div style={{height: '20vh'}} className='fs-1 fw-bold d-flex justify-content-center align-items-center'>
        <p className='text-center'>New Products Collections are Coming Soon</p>
        </div>
    </div>
  )
}

export default Products
