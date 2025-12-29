import React from 'react'

function Child(props) {
  return (
    <div style={props.style}>
        <h2>Child-StandardProp</h2>
        <h3>{props.name}</h3>
        <h3>{props.a}</h3>
        <h4>{props.list.join(', ')}</h4>
        <h4>{props.obj.name}</h4>


    </div>
    
  )
}

export default Child