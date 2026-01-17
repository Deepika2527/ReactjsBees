import React from 'react'

function Child({data}) {
  return (
    <div>
        <h1>This is child</h1>
        <p>Name: {data}</p>
    </div>
  )
}

export default Child