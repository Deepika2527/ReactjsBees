import React from 'react'
import SubSubchild from './SubSubchild'

function SubchildD(prop) {
  return (
    <div>
        <h2>Im the subchild-Prop Drilling</h2>
        <h3 className='text-warning border border-primary text-center'>
           
        </h3>
        <SubSubchild greet={prop.greet}/>
    </div>
  )
}

export default SubchildD