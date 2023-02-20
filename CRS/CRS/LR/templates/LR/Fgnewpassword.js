function myFunction() {
    var x = document.getElementById("newpassword");
    var y = document.getElementById("confirmpassword");
    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password"; 
      y.type = "Password";
    }
  }
    const isPasswordSecure = (newp) =>{
    const re = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&])(?=.{8,})");
    if (newp?.toString().includes(" ")){
        return false;
    }
    else{
        return re.test(newp);
    }
};
const checkPassword = (pass1) => {

  console.log("Hi I entered into password block")
  let valid = false;
  let change1 = document.querySelector(".password-error");
  if (!isPasswordSecure(pass1)) {
      return false;
      // ShowError(pass1,change1,'Password must has at least 8 characters & include at least 1 lowercase character, 1 uppercase characters, and 1 special character in (!@#$%^&*)');
  } else {
      // ShowSuccess(pass1,change1);
      valid = true;
  }

  return valid;
};
const reCheckPassword = (pass1, pass2)=>{
  console.log("Hi you entered into repassword mansion")
  let valid = false;
  // let change2 = document.querySelector( ".repassword-error");
  // let confirmpassword = pass2.value;
  // let password1 = pass1.value;
  if(pass2 != pass1) {
      return false;
      // ShowError(pass2,change2, 'Password should match');
  }
  else {
      // ShowSuccess(pass2,change2);
      valid = true;
  }
  return valid;
};
  document.addEventListener('DOMContentLoaded',function(){
    const n=document.querySelector('#accclose')
    n.onclick=function password(){
    let newp=document.querySelector('#newpassword').value;
    console.log(newp)
    let confirmp=document.querySelector('#confirmpassword').value;
    console.log(confirmp)
    if(newp===confirmp){
        alert(`Sucessfully changed password`)
        return true;
    }
    else{
        alert(`password does not match`)
        return false;
    }
}
return true;
});
exports.isPasswordSecure=isPasswordSecure;
exports.checkPassword=checkPassword;
exports.reCheckPassword=reCheckPassword;