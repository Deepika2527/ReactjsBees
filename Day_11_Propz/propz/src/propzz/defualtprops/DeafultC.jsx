
import React from 'react'

function DeafultC({title='unknown',price='notsure',stock=false}) {
  return (
    <div className='card bg-light p-3 w-25'>
        <h2>Im from child-DefaultProps</h2>
        <h3>Name: {title}</h3>
        <h3>Price: {price}</h3>
        <h3 className={stock? 'bg-success' : 'bg-danger'}>Stock: {stock? 'Yes' :'No'}</h3>
    </div>
  )
}

export default DeafultC