import React from 'react'

 const Child = React.memo(({name, onClick})=>{
    console.log("Child Render");
    return(
        <>
        <p>Hello {name}</p>
        <button onClick={onClick}>Child Button</button>
        </>
    )
    
 })

// function Child({name, onClick}) {
//     console.log('Child Render');
    
//   return (
//     <div>
//         <h1>This is Child</h1>
        
//         <h3>Hello {name}</h3>
//         <button onClick={onClick}>ChildBuuton</button>
//     </div>
//   )
// }

export default Child