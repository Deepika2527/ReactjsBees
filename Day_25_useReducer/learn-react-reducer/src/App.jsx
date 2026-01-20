
import React from 'react'
import LearnReducer from './compnents/LearnReducer'
import CartUI from './compnents/CartUI'

function App() {
  return (
    <div className='text-center'>
      <h1>Use Reducer example</h1>
      <LearnReducer/>
      <hr />
      <CartUI/>
      
    </div>
  )
}

export default App