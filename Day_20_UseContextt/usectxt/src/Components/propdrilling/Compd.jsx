import React from 'react'
import { useContext } from 'react'
import { dataContext } from './Grandparent'

function Compd() {
    let {count,setCount} = useContext(dataContext)
  return (
    <div>
        <h1 className='text-light bg-warning text-center'>Component-D</h1>
        <h2 className='text-center'>This is counter Example: <b className='text-secondary'>{count}</b> </h2>
        <div className='text-center'> 
            <button className='btn btn-outline-primary mx-4 ' onClick={()=>setCount(count+10)}>Click Me</button>
        </div>
    </div>
  )
}

export default Compd