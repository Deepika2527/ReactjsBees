import React from 'react';
import products from '../utilites/ProductsList';

function Ternaryy() {
  return (
    <div className='container mt-4'>
        <h3>Ternary Example</h3>
        {
            products.map((product)=>(
               <p key={product.id}>
                 {product.name} - {" "}
                 {product.inStock? (
                    <span style={{background:"green"}}>InStock</span>
                 ):
                 <span style={{backgroundColor:'red'}}>Out of Stock</span>
                }
               </p>
            ))
        }
        
    </div>
  )
}

export default Ternaryy