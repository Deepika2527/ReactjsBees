import React, { useState, useMemo} from 'react'

function UseMem() {
    let [count,setCount] = useState(0);
    let [num,setNumber]   = useState(1)

    // console.log('Calculating.....');
    // const doubled = num * num
    
    const doudled = useMemo(()=>{
        console.log("Caluclating......");
        return num*num
        
    },[num])
 

  return (
    <div>
        <h1>Use Memo</h1>
        <h2>Doubled Num: {doudled}</h2>
        <h2>Count : {count}</h2>


        <button className="btn btn-primary m-5" onClick={()=>setNumber(num+1)}>Increment Num</button>

        <button className="btn btn-warning m-4" 
        onClick={()=>setCount(count +1)}
        >Increment Count</button>
    </div>
  )
}

export default UseMem