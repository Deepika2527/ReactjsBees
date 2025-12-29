import React from 'react'
import SubchildD from './SubchildD'

function ChildD(prop) {
  return (
    <div>
        <h1>Im the child-prop Driiling</h1>
       <SubchildD greet={prop.greet}/>
    </div>
  )
}

export default ChildD