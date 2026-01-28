import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Inc, Dec } from './CounterOpt';

function Counter() {
    let countVal = useSelector(state=>state.count);
    let dispatch = useDispatch()
  return (
   
    <>
    <center>
        <div className="card w-50 p-5 m-5 bg-light text-center">
            <h1>Using Redux</h1>
            <h2>Count:{countVal}</h2>



        </div>
        <div>
            <button className="btn btn-primary m-4" onClick={()=>dispatch(Inc())}>+</button>
            <button className="btn btn-warning m-4" onClick={()=>dispatch(Dec())}>-</button>
        </div>



    </center>
        
    </>
  )
}

export default Counter