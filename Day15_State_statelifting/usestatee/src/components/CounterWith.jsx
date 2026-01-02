import React, {useState} from 'react'

function CounterWith() {
    let [count, setCount] = useState(0);
    // console.log(count);
    
  return (
    <div>
        <h1>Counter Example with useState</h1>
          
    


          <button className='btn btn-primary me-3' onClick={()=>setCount(count +1)} >Increment</button>
                 <h2>Count : {count}</h2>
          <button className='btn btn-primary me-3' onClick={()=>setCount(count-1)}>Decrement</button>

        
    </div>
  )
}

export default CounterWith