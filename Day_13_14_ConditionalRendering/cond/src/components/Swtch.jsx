import React from 'react'

function Swtch() {
    let loggedIn = false;
    const renderMessage = () =>{
        switch(loggedIn){
            case true :
                return <h2>Welcome Back</h2>;
            case false  :
                return <h2>Please Login</h2>
            default:
                return <h2>Unknow error</h2>
        }
    
    };






  return (
    <div>
        <h3>Switch case example</h3>
        { renderMessage() }
                
    </div>
  )
}

export default Swtch