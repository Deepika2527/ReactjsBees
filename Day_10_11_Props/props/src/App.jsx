import React from 'react'
import Parent from './props/standardprops/Parent'
import Pdestrcuring from './props/destructuring/Pdestrcuring'
import ParentD from './props/propsdrilling/ParentD'
import CallBackParent from './props/callbackprop/CallBackParent'


function App() {
  return (
    <>
       <h1 style={{color:'red',textAlign:'center'}}>React props</h1>
       <Parent/>
       <Pdestrcuring/>
       <br />
       <br />
       <hr />
       <ParentD/>
     


       <br />
       <br />
       <hr />
       <br />
       <CallBackParent/>
      
      
    </>
  )
}

export default App