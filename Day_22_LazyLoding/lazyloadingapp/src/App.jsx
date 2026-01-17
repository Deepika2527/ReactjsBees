import React, { useState } from 'react'
import { lazy,Suspense } from 'react';
import Loader from './component/Loader';


let ContactForm = lazy(()=>import('./component/ContactForm'))


function App() {
  let [show,showState] = useState(false)
  return (
    <div>
      <h1 className='text-center text-primary'>Welcome to my website.....</h1>
      <h3 className='text-center'>Do, sign In..</h3>
      <div className='text-center'>
        <button className="btn btn-primary" onClick={()=>showState(true)}>Click here for Login</button>

        {
          show && <Suspense fallback={<Loader/>}>
           <ContactForm/>
          </Suspense>
        }
      </div>

      
    </div>
  )
}

export default App




// import React from 'react'
// import ContactForm from './component/ContactForm'
// import Loader from './component/Loader'

// function App() {
//   let isLogged = false

//   // if(isLogged)
//   // {
//   //   return <h1 className='text-success'>Logged in sucessfully</h1>
//   // }
//   //   else{
//   //     return <h2 className='text-danger'>Failed</h2>
//   //   }
//   return (
//     <div>
//       {/* <h1>This is for Ternary</h1>
//       <h2 className={isLogged? 'text-info' : 'text-danger'}>{isLogged? 'Welcome to our page' : 'Sorry, Invalid'}</h2> */}
      
// {/* 
//       <h2>Logical &&</h2>
//       {
//         isLogged && <h1>Logged in....</h1>
//       } */}



//       <h1 className='text-center text-primary'>Welcome to my website.....</h1>
//       <h3 className='text-center'>Do, sign In..</h3>
//       <ContactForm/>
//       <Loader/>
//     </div>
//   )
// }

// export default App