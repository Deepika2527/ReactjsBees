import React from 'react'

function CallBackChild(props) {
  return (
    <div>

        <h2>This is an example of Child Callback</h2>
        <button onClick={()=>props.sendMessage('Child: Yes')}>Click me</button>
        
    </div>
  )
}

export default CallBackChild