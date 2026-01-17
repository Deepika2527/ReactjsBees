 export const nameFun = (name) =>{
    let userNamePattern = /^[A-Z][a-z]{5,10}$/;
    return userNamePattern.test(name)

  }


  //for email
  export const emailFun = (email) =>{
    let userEmailPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+@[a-zA-Z]+\.com$/;
    console.log(userEmailPattern.test(email));
    return userEmailPattern.test(email)

  }
//  username + domain name @gmail.com
//   contains at least 1 char loer/uppercase and a digit
//   deepika1
//   deepika12vemuri 

// task for pswd and phone -Hint
// pswd should contains atleat 6 letters - /^[a-zA-Z0-9]{6,7}$/
// Phone No - /^[6-9]\d{}$/


