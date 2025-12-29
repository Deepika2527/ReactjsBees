import React from 'react'

function Cdestrauctring({name,mgz,mode}) {
  return (
    <div className='container'>
        <h2>Child-Destructring</h2>
        <h3 className='bg-info p-2 border border-danger'>Name: {name} is {mgz}, who teaches us in {mode}.</h3>
        
        
    </div>
  )
}

export default Cdestrauctring