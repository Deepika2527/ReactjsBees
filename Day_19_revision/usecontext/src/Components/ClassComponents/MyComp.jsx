import { Component } from "react";


class MyComp extends Component{
   constructor(){
    super()
    this.state = {
        count : 10,
        name: 'Deepika'
    }
   }

    render(){
        console.log("HI im fro render");

        return(
            <>
            <h1>Hello h1</h1>
            <h2>{this.state.count}</h2>

            {/* <button className="btn btn-outline-primary m-4" 
            onClick={()=>{this.count = this.state.count+10; 
            console.log(this.count)}}>
                Click me</button> */}
            

            <button className="btn btn-outline-primary"
            onClick={()=>this.setState({count:this.state.count+20})}
            
            
            
            >click me</button>
            </>
        )
        
    }
}

export default MyComp