import React from 'react'

function LogcalAnd() {
    const isLoggedIn = false;

  return (
    <div>
        {isLoggedIn && <h2>Welcome, back😎</h2>}
        {!isLoggedIn && <h2>Please login</h2>}
    </div>
  )
}

export default LogcalAnd