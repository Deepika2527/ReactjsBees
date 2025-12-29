import React from 'react'
import ChildD from './ChildD';

function ParentD() {
    let greeting = 'Hello all, Welcome to my Js class';
  return (
    <div>
        <h1 className='text-secondary'>This is Prop drilling example</h1>
        <ChildD greet={greeting} />
    </div>
  )
}

export default ParentD