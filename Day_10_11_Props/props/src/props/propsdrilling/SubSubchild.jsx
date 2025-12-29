import React from 'react'

function SubSubchild(prop) {
  return (
    <div>
        <h3>Im the SubSub Child</h3>
        <h2>{prop.greet}</h2>
    </div>
  )
}

export default SubSubchild