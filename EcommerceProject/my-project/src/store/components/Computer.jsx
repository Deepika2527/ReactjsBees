import React from 'react'
import { computerData } from '../data/computers'

function Computer() {
    const firstFiveImages = computerData.slice(0,5)
  return (
    
    <>
        <div className="proTitle">
        <h2>Computer</h2>
    </div>
    <div className="proSection">
        {
           firstFiveImages.map((item)=>(
            <div className='imgBox' key={item.id}>
               <img src={item.image} alt={item.model} className='proImg' />

            </div>
           )) 
        }
    </div>
    </>
  )
}

export default Computer