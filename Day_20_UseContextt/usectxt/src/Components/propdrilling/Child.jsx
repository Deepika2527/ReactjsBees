import React, { useContext } from 'react'
import { dataContext } from './Grandparent'

function Child() {
    let message = useContext(dataContext)
  return (
    <div>
        <h1>This is Child Component</h1>
        <h2 className='text-light bg-secondary p-3'>Hello, we are learning 
          {message}</h2>
    </div>
  )
}

export default Child