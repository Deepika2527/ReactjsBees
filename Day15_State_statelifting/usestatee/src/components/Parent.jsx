import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
    let [coins,setCoins] = useState(0)
  return (
    <div className='container p-5 m-4 bg-light'>

        <h1>This is Parent Component</h1>
        <h2>Coins :  {coins}</h2>

        <ChildA coins = {coins} setCoins= {setCoins} />
        <ChildB coins = {coins} />


        
    </div>
  )
}

export default Parent