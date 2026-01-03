import React, { useState } from 'react'

function SignUp() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [pswd, setPswd] = useState('');
    let [mble , setMble ] = useState('');



    // basic validation
    let [usernm , nmErr] = useState("");
    let [useremail , emailErr] = useState("");
    let [userpswd , pswdErr] = useState("");
    let [usermble , mbleErr] = useState("");

    function formValidation(){
        // nameError message
        if(name.length<=0){
            nmErr("Name shoul not be empty")
        }
        else{
            nmErr("")
        }
     

        // email validation
    if(!email.includes('@')){
        emailErr('Email should include @')
    }
    else{
        emailErr("")
    }
  
    //passwrd
    if(pswd.length<6){
        pswdErr('Should be lesser than 6 charcter')
    }
    else{
        pswdErr('')
    }
    // phonenO
      if(mble.length!==10){
            mbleErr("Phone number should be 10 digits")
        }
        else{
            mbleErr("")
        }

    }
    
     


    


  return (
    <div>
        <section className="vh-100">
  <div className="container-fluid h-custom mt-3">
    <div className="row d-flex justify-content-center align-items-center h-100 mt-3">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
        <form>
         
         {/* Name input */}
           <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example1">User Name:</label>
            <input type="text" id="form3Example1" className="form-control form-control-lg"
              placeholder="Enter a valid email address" onChange={(e)=>setName(e.target.value)} />
            <p className='text-danger'>{usernm}</p>
          </div>

           

          {/* <!-- Email input --> */}
          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example2">Email address</label>
            <input type="email" id="form3Example2" className="form-control form-control-lg"
              placeholder="Enter a valid email address" onChange={(e)=>setEmail(e.target.value)} />
           <p className='text-warning'>{useremail}</p>
          </div>

          {/* <!-- Password input --> */}
          
          <div data-mdb-input-init className="form-outline mb-3">
            <label className="form-label" htmlFor="form3Example3">Password</label>
            <input type="password" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter password" onChange={(e)=>setPswd(e.target.value)}  />
            <p className='text-info'>{userpswd}</p>
          </div>

          {/* Phone Input */}
          <div data-mdb-input-init className="form-outline mb-4">
             <label className="form-label" htmlFor="form3Example4">Phone Number</label>
            <input type="text" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter a valid email address"  onChange={(e)=>setMble(e.target.value)}  />
                  <p className='text-success'>{usermble}</p>
          </div>

          

          <div className="text-center text-lg-start mt-4 pt-2">
            <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
              style={{paddingLeft: "2.5rem",paddingRight: "2.5rem"}} onClick={formValidation}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-danger">Register</a></p>
         
          </div>

        </form>

        Name : {name}  <br />
        Email - {email}   <br />
        Password - {pswd}   <br/>
        Phone No- {mble}
      </div>
    </div>
  </div>
 
</section>
    </div>
  )
}

export default SignUp