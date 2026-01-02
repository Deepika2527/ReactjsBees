import React from 'react'
import ChildB from './ChildB'

function ChildA({coins,setCoins}) {
  return (
    <div className='card p-4 mt-4'> 

     <h2>Money Deposited</h2>
     <button className='btn btn-primary btn-sm' onClick={()=>setCoins(coins+1)}>Add Coins</button>


     <ChildB coins={coins} />
        
    </div>
  )
}

export default ChildA