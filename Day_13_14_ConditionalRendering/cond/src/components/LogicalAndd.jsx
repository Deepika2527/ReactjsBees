import React from 'react'
import products from '../utilites/ProductsList'

function LogicalAndd() {
  return (
    <div className='container mt-4'>
        <h3>Example of LOgical And</h3>
        {
            products.map((product)=>(
                <p key={product.id}>
                    {product.name} -{" "}
                    {product.inStock && (
                        <span style={{color:"green"}}>Available</span>
                    )}
                </p>
            ))
        }
        
    </div>
  )
}

export default LogicalAndd