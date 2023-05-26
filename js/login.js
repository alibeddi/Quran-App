'use strict'


const small= document.querySelector("small")

const wrong= document.querySelector(".form__login-pass--error2")
const match= document.querySelector(".form__login-pass--error3")
const boxs = document.querySelector(".boxs");

//login elements 
const loginForm = document.querySelector(".form__login");
const loginPass = document.querySelector(".login__pass");
const loginEmail = document.querySelector(".login__email");
const loginBtn = document.querySelector(".form__login--link");
const loginSubmit = document.querySelector(".login-btn");
const login = document.querySelector(".login-a");
//signup elements 
const signupName = document.querySelector(".signup__name");
const signupphone = document.querySelector(".signup__phone");

const signupEmail = document.querySelector(".signup__email");
const signuppass = document.querySelector(".signup__pass");
const signupConfirm = document.querySelector(".signup__confirm");
const regBtn = document.querySelector(".reg-btn");
const logSignUp = document.querySelector(".log__email--input-signup");
const signupForm = document.querySelector(".form__signUp");
const signupBtn = document.querySelector(".form__sign--up");
const password = [loginPass, signuppass, signupConfirm];
// form rotation
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.transform = "rotateY(180deg)";
    signupForm.style.transform = "rotateY(0deg)";
  });
  // form reverse rotation
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.transform = "rotateY(0deg)";
    signupForm.style.transform = "rotateY(-180deg)";
  });
  //confirm password
  let passwords = document.getElementById("passwords")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(passwords.value != confirm_password.value) {
    match.style.opacity=1;
    return false
  } else {
    confirm_password.setCustomValidity('');
    match.style.opacity=0;
    return true
  }
 
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
//////
////
// check email and password on login 
////
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWMwYTNhNGIxODM5MDdhZjkyMThmNiIsImlhdCI6MTY3MjIzODI0MywiZXhwIjoxNjgwMDE0MjQzfQ.G9NjDG8qHIP5eut4TnK7BHp5Q42yBsK0Spp3rovhmfA");



  loginSubmit.addEventListener("click",function(e){
    e.preventDefault()
    
    let raw = JSON.stringify({
        "email": `${loginEmail.value}`,
        "password": `${loginPass.value}`
      });
      
     let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://apitest.khouaja.live/v1/user/login", requestOptions)
        .then(response => response.json())
        .then(result =>{ console.log(result)
          if (result.status == "success" && validatePassword()) {
            localStorage.setItem("token",result.token)
            window.location.href="/html/index.html"
          
          }
        }
        )
        .catch(error => console.log('error', error));
        
          
            
            
        
        
  })
  //confirm phone number 
const wrongphone= document.querySelector('form__signUp-name--error2')
let phone1 = document.getElementById("User phone")
function validatePhone(){
  if(phone1.value < 22000000) {
    wrongphone.style.opacity=1;
    
  } else {
    
    wrongphone.style.opacity=0;
  }
 
}
/////////
///////
/////
////
///
//
// check user information
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWM2MGY1NGIxODM5MDdhZjkyMWM2ZSIsImlhdCI6MTY3MjI0MTM5OCwiZXhwIjoxNjgwMDE3Mzk4fQ.kXx5VGV_FqQMCENAgsKb164K1vGSJaPXBXZDWukntVY");
regBtn.addEventListener("click", function (e) {
    e.preventDefault()

let raw = JSON.stringify({
  "email":`${signupEmail.value}`,
  "name": `${signupName.value}`,
  "phone": `${signupphone.value}`,
  "password": `${signuppass.value}`
});

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://apitest.khouaja.live/v1/user/signup", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)
    if (result.status=="success") {
      localStorage.setItem("token",result.token)
      window.location.href="/html/login.html"

    }
  })
  .catch(error => console.log('error', error));
})
