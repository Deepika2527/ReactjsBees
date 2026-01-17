import React, { createContext, useState} from 'react'
import Parent from './Parent'
import Child from './Child'
import Compd from './Compd'
import CompB from './CompB'
import CompC from './CompC'

export let dataContext = createContext()

function Grandparent() {
    let [count,setCount] = useState(0)
    let course = "React Js"
    // let name = "Deepika"
  return (
    <>
       <dataContext.Provider value={{count,setCount}}>
        <h1 className='text-light bg-danger text-center'>This is  Component A</h1>
        {/* <Child message={course}/> */}
        <CompB/>
        <CompC/>
        <Compd/>
        
        </dataContext.Provider> 
    </>
  )
}

export default Grandparent