import React, { useState } from 'react'
import Child from './Child';

function Parent() {
    // let [count, setCount] = useState(0);

    // const handledClick = () =>{
    //     console.log("Child btn is clicked");
        
    // }
    // console.log("Parent Render");
    
  return (
    <div>
        {/* <h2>Without useMmeo</h2>
        <button className="btn btn-info"
        onClick={setCount(count+1)}
        >IncreaseCount</button>

        <Child onClick={handledClick} name={'React'}/> */}
    </div>
  )
}

export default Parent