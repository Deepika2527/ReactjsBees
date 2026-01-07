import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

function Useeff() {
    //useState
    let [timer, setTimer] = useState(0);
    console.log(timer);
    


    //useEffect
    useEffect(()=>{
        console.log("Im the useEffect");
        
    },[timer])

  return (
    <div>
        {console.log("Inside the function")} 
        <h1>This is an example of UseEffect</h1>

        <h2>Timer: {timer}</h2>

        <button className='btn btn-outline-primary m-4' onClick={()=>setTimer(timer+1)}>Add me</button>


        
    </div>
  )
}

export default Useeff