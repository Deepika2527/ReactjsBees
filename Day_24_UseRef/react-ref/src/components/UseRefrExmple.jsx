import React, { useEffect, useRef, useState } from 'react'

function UseRefrExmple() {
    let[count,setCount] = useState(0);
    // let val =0;
    // console.log(val);
    
    let val = useRef(0);
    // console.log(val);
    // console.log(val.current);
    
    



    function handleIncrement(){
        val.current = val.current+1;
        console.log(val.current);
        
        setCount(count+1)
    }
    useEffect(()=>{
        console.log('Im inside the useEffect');
        
    })
    let btnRef = useRef();
    console.log(btnRef);
    

    function ChangeColor(){
        btnRef.current.style.backgroundColor = "Red";
        btnRef.current.style.color = "Yellow";
        btnRef.current.style.padding = "20px";


    }


  return (
    <div>
        <h1>Count: {count}</h1>
        <button className="btn btn-primary" onClick={handleIncrement} ref={btnRef}>Increment Button</button> <br /><br />
          <button className="btn btn-secondary" onClick={ChangeColor}>ChangeColor</button>
    </div>
  )
}

export default UseRefrExmple