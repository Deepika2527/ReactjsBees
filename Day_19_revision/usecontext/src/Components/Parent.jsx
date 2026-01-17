import React from 'react'
import Child from './Child'

function Parent() {
    let name = "Fathima";
    let arr =  [1,2,3,4];
    
  return (
    <div>
        <h1>This is Parent</h1>
        <p>{name}</p>
        <Child data={name}/>
    </div>
  )
}

export default Parent