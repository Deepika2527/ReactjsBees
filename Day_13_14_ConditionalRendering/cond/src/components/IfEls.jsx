import React from 'react'

function IfEls() {
    const isloggedIn = true;

    if(isloggedIn){
        return <h2 style={{color:'Red',textAlign:'center'}}>Welcome, back😎</h2>
    }
    else{
        return <h2>Please Login</h2>
    }
  
}
export default IfEls