import React from 'react'
import {mobileData} from '../data/mobiles'

function Mobile() {
    const firstFiveImages = mobileData.slice(0,5)
  return (
    <>
    <div className="proTitle">
        <h2>Mobiles</h2>
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

export default Mobile