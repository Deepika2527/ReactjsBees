import { useState } from "react";

function Counter(){
  const [count,setCount] = useState(0)
  return(
    <div>
      <h1>Hello all</h1>
      <p>{count} </p>
      <button onClick={()=>setCount(count+1)}>Add me</button>
    </div>
  )
}

export default Counter