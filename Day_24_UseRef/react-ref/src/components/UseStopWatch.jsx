import React, { useState, useRef } from 'react'

function UseStopWatch() {
    let [timer,setTimer] =  useState(0);
    const timerRef = useRef(0);
    console.log(timerRef);
    
    // let timerId;
    console.log("Copmonent Rendering", timerRef.current);
    



    const startTimer = () =>{
      timerRef.current=  setInterval(()=>{
            setTimer(timer=>timer+1)

        },1000)
        console.log('Start Clicked', timerRef.current);
        


    }

    const stopTimer = () =>{
        clearInterval(timerRef.current);
        console.log('Stopped Clicked', timerRef.current);
        

    }



  return (
    <div className='text-center'>
        <h1 className='text-center bg-dark text-light'>Stop watch...</h1>

        <button className="btn btn-primary" onClick={startTimer}>StartClock</button>
        <h2>Time:{timer}</h2>
        <button className="btn btn-warning" onClick={stopTimer}>Stop</button>

        
    </div>
  )
}

export default UseStopWatch