import React from 'react'

function CounterWithout() {
    let count = 0;
    function counter(){
        count++;
        console.log(count);
        

    }
  return (
    <div className='container bg-light m-3'>
        <h1>Counter Example Without useState</h1>
        {/* in ui */}
        <h2>Count : {count} </h2>
        {/* btn to incerement the value */}

        <button className='btn btn-primary' onClick={counter}>Add</button>
        </div>
  )
}

export default CounterWithout