import { useState } from "react";

function App(){
  const [name,setName] = useState('');
  const [time,setTime] = useState(new Date().toTimeString())

  return (
    <div>
      <h1>Example with VirtualDom</h1>
      <input placeholder="Enter the value" value={name} onChange={(e)=>setName(e.target.value)} style={{margin:'10px'}}/>
      <button style={{padding:'10px'}}   onClick={()=>setTime(new Date().toTimeString())}>Add me</button>
      <p>{time}</p>
      
    </div>
  )
  

}
export default App