import React from 'react'
import CallBackChild from './CallBackChild';

function CallBackParent() {
    function sendMessage(message){
        console.log("Parent: Have you Completed the task?", message);
        
    }
  return (
    <div>
        <h1>This is an example of Callback Parent</h1>
        <CallBackChild sendMessage={sendMessage}/>
        
    </div>
  )
}

export default CallBackParent