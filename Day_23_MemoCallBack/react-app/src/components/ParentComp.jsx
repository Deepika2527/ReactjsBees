import React, {useState} from 'react'
import Child from './Child';
import { useCallback } from 'react';

function ParentComp() {
    let [count,setCount]  = useState(0);

    // const handleClick = () =>{
    //     console.log('Button is clicked');
        
    // }
    const handleClick = useCallback(()=>{
        console.log("Child Btn is Clicked");

        
    },[])
    console.log('Parent Rendering');
    
    
  return (
    <div>
        <h1>This is parent Comp</h1>
        <h3>Count : {count}</h3>
        <button onClick={()=>setCount(count+1)}>Counter</button>
        <Child name={'Js'} onClick ={handleClick}/>
        

    </div>
  )
}

export default ParentComp