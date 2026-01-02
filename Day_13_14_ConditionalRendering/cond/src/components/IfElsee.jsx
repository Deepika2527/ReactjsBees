import React from 'react';
import products from '../utilites/ProductsList';

function IfElsee() {
  return (
    <div className='container mt-4' >
        <h1>Example of If-else</h1>
        {
         products.map((product)=>{
            if(product.inStock){
                return(
                    <p key={product.id}>{product.name} - <span style={{color:'green'}}>inStock</span>
                    
                    
                    </p> 
                );
            }
            else{
                return (
                    <p key={product.id}>{product.name} - <span style={{color:'red'}}>Out Of Stock</span></p>
                )
            }
         })
         




        }
    </div>
  )
}

export default IfElsee