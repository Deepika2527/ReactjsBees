import React from 'react'
import Child from './Child'
// import { useContext } from 'react'
// import { dataContext } from './Grandparent'

function Parent() {
    // let message = useContext(dataContext)
  return (
    <div>
        <h1 className='text-light bg-secondary'>This is Parent Component</h1>
        {/* <h2>Hello all Im learning {message}</h2> */}
        {/* <Child course={course}/> */}
        
    </div>
  )
}

export default Parent