function validation(){

  var fname=document.getElementById('firstname');
  var lname=document.getElementById('lastname');
  var uname=document.getElementById('username');
  var password=document.getElementById('password');
  var cpassword=document.getElementById('cpassword');

  if(fname.value.trim() == ""){
      fname.style.border="solid 2px red";
      alert("please fill the first name")
      return false;
  }
  else if(lname.value.trim() == ""){
      lname.style.border="solid 2px red";
      alert("please fill the last name")
      return false;
  }
  else if((uname.value.trim().length <= 2) || (uname.value.trim().length > 10)) {
      uname.style.border="solid 2px red";
      alert("Username lenght must be between 2 and 10")
      return false;	
  }
  else if(!isNaN(uname.value.trim())){
      uname.style.border="solid 2px red";
      alert("Username lenght must be between 2 and 10")
      return false;
  }
  else if(password.value.trim() == ""){
      password.style.border="solid 2px red";
      alert("Please fill the password field")
      return false;
  }
  else if(cpassword.value.trim() == ""){
      cpassword.style.border="solid 2px red";
      alert("Please fill the confirmpassword field")
      return false;
  }
  else if((password.value.trim().length < 5) || (password.value.trim().length > 10)) {
      password.style.border="solid 2px red";
      alert("Passwords lenght must be between  5 and 10")
      return false;	
  }
  else if(cpassword.value.trim()!= password.value.trim()){
      password.style.border="solid 3px red";
      alert("Please make sure that confirmpassword and password are the same.")
      return false;
  }
  else{
      return true;
  }
}
