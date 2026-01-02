import React from 'react'

function TernaryOpt() {
    let isLoggedIn = true;
  return (
    <div>
        <h1>Ternary Operator</h1>
        {
            // isLoggedIn ? (
            //     <h2 style={{backgroundColor:'Green',textAlign:'center'}}>Welcome, Back</h2>
            // ) : (
            //     <h2 style={{backgroundColor:'Red', textAlign:'center'}}>Pleas Login in</h2>
            // )
            isLoggedIn ? <h2>Welcome, Bck</h2> : <h2>Please Login </h2>
        }
    </div>
  )
}

export default TernaryOpt