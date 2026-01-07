import React, { useState } from 'react'
import { nameFun,emailFun } from '../RegexValues';

function Sigining() {
    let [input, setInput] = useState(
        {
            name : '',
            email : '',
            // password : '',
            // phone : ''
        }
        
    )
    console.log(input);


    //for setting error messages
    let [errMessage, setErrMessage] = useState("");


    function handleData(e){
        let {name, value} = e.target;
        // let name = e.taget//  name  email   pswd phone
        // let value = e.target//   nikath nikath@gmail.com nikkki 90909090909
        setInput(prev=>({...prev,[name]:value}));
        console.log(`${name} : ${value}`);
        

    }

    //function for setting the errors

    function formValidation(e){
        e.preventDefault();


        let {name,email} = input;


        if(!name || !email){
            return setErrMessage("Please Fill the inputs")

        }
        if(!nameFun(name)){
            return setErrMessage('Name should start with Captila')
        }
        if(!emailFun(email)){
            return setErrMessage('Email shoul conatins atleast one letter/digit')
        }

        setErrMessage("Form has submitted successfully")
    }
    
  return (
    <div>
         <div>
        <section className="vh-100">
  <div className="container-fluid h-custom mt-3">
    <div className="row d-flex justify-content-center align-items-center h-100 mt-3">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
        <form onSubmit={formValidation}>
         
         {/* Name input */}
           <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example1">User Name:</label>
            <input type="text" id="form3Example1" className="form-control form-control-lg"
              placeholder="Enter a valid email address" name= "name" onChange={handleData} value={input.name}
                />
        
          </div>

           

          {/* <!-- Email input --> */}
          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example2">Email address</label>
            <input type="email" id="form3Example2" className="form-control form-control-lg"
              placeholder="Enter a valid email address" name = "email" onChange={handleData} value={input.email}
               />
          
          </div>

        

          <div className="text-center text-lg-start mt-4 pt-2">
            <button  type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
              style={{paddingLeft: "2.5rem",paddingRight: "2.5rem"}} >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-danger">Register</a></p>
         
          </div>

        </form>
        <h1 className='text-danger'>{errMessage}</h1>

       
      </div>
    </div>
  </div>
 
</section>
    </div>
    </div>
  )
}

export default Sigining