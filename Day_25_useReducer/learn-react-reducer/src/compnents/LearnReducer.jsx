import React from 'react'
import { useReducer } from 'react'

function LearnReducer() {

    function reduceFun(currentstate,action){
        console.log("The currentsate and action are:", currentstate,action);
        // return "Hello React"
        switch(action.type){
            case "increment" : return currentstate+action.payload;
            case "decrement" : return currentstate-action.payload;
            case "reset"     : return 0;
            case "default": return currentstate;
        }
        

    }


    const[count,dispatch] = useReducer(reduceFun, 0);

  return (
    <div>
        <h2>Learn Use Redcue</h2>
        <h1>Count:{count}</h1>
        {/* <button className="btn btn-primary m-4" onClick={()=>{dispatch("increment")}}>+</button>
        <button className="btn btn-warning m-4" onClick={()=>{dispatch('decrement')}}>-</button>
        <button className="btn btn-info m-4" onClick={()=>{dispatch('reset')}}>Reset</button>  */}

        <button className="btn btn-primary m-4" onClick={()=>{dispatch({type:"increment",payload:1})}}>+</button>
        <button className="btn btn-warning m-4" onClick={()=>{dispatch({type:"decrement",payload:1})}}>-</button>
        <button className="btn btn-info m-4" onClick={()=>{dispatch({type:'reset',})}}>Reset</button> 


        <button className="btn btn-primary m-4" onClick={()=>{dispatch({type:"increment",payload:5})}}>+</button>
        <button className="btn btn-warning m-4" onClick={()=>{dispatch({type:"decrement",payload:5})}}>-</button>
        <button className="btn btn-info m-4" onClick={()=>{dispatch({type:'reset',})}}>Reset</button> 
        
    </div>
  )
}

export default LearnReducer