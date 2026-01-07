import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

function ProductList() {
    let [products, setProducts] = useState([]);

    useEffect(()=>{
        async function productApi(){
           let {data} = await axios.get('https://dummyjson.com/products');
           console.log(data);
            console.log(data.products);
            setProducts(data.products)

        //    console.log(data.data.products);
           
           
            
            // console.log(data);
            
        }
        productApi()
    },[])



  return (
    < >
    <div className="container">
        <div className="row">

            {
                products.map((item)=>{
                    return  <div className='col-4 card'>
                        <img src={item.thumbnail} alt="" />
                        <div className='card-body'>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>

                        </div>

                    </div>
                })
            }
            
        </div>
    </div>
        
    </ >
  )
}

export default ProductList