
import React from 'react'
import DeafultC from './DeafultC'

function DeafultP() {
    let product = {
        title: 'Mobile',
        price: 30000,
        inStock : true
    }
  return (
    <div>
        <h2>Parent-Default</h2>
        <DeafultC 
        
        title={product.title}
        price = {product.price}
        stock = {product.inStock}
        />

        <DeafultC/>
    </div>
    
  )
}

export default DeafultP