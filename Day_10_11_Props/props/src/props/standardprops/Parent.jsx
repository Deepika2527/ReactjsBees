import React from 'react'
import Child from './Child'

function Parent() {
    let name = 'ReactJs';
    let a = 10;
    let list = ['hello', 23,"null",true];
    const obj =  {name:'tarannum',class:'react'}
  return (
    <div>
        <h2>Im the Parent-StandardProp</h2>
        <Child name={name} a={a} list={list} obj={obj}     style={{color:'orangered',backgroundColor:'lightgrey',textAlign:'center'}} />

        

    </div>
  )
}

export default Parent