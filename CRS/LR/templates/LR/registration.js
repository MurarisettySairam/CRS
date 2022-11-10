const isRequired = (value) =>{
    if  (value ==="") {
        return false;
    }
    else {
        return true;
    }
};
const isBetween = (name, min, max) => {
    if(name?.length < min || name?.length > max){
        console.log("Length is too short or too long");
        return false;
    }
       console.log("Perfect Length ");
        return true; 
};
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isPasswordSecure = (password) =>{
    const re = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&])(?=.{8,})");
    if (password?.toString().includes(" ")){
        return false;
    }
    else{
        return re.test(password);
    }
};
const ShowError = (value, message) =>{
    // console.log(input)
    // input.classList.remove('success');
    // input.classList.add('error')
    value.innerHTML = message;
} 
const ShowSuccess = (value, message) =>{
    // input.classList.remove('error');
    // input.classList.add('success') 
    value.innerHTML = message;
}
const checkUsername = (name1) =>{
    let valid = false;
    // let name2 = name1.value;
    const min =  3;
    const max = 20;
    // console.log(len(name2));
    let change2 = document.querySelector(".Name-error");
    if(!isRequired(name1)){
        return false;
        // ShowError(change2,'Name cannot be Blank');
    }
    if(!isBetween(name1,min,max)){
        return false;
        // console.log("pheu! you entered me");
        // ShowError(change2,`Name should be between ${min} and ${max} characters`);
    }
    else{
        // ShowSuccess(name1,change2);
        valid = true;
    }
    return valid;

};
const checkEmail = (Email5) =>{
    console.log("Hi I entered into email block");
    let valid = false;
    let change = document.querySelector(".email-error");
    // let email1 = Email5.value() || "";
    if (!isRequired(Email5)) {
        return false;
        // ShowError(Email5, change,'Email cannot be blank.');
    } else if (!isEmailValid(Email5)) {
        return false;
        // ShowError(Email5, change,'Email is not valid.');
    } else {
        // ShowSuccess(Email5,change);
        valid = true;
    }
    return valid;
};
const checkPassword = (pass1) => {

    console.log("Hi I entered into password block")
    let valid = false;
    let change1 = document.querySelector(".password-error");
    // let password = pass1.value.trim();

    if (!isRequired(pass1)) {
        return false;
        // ShowError(pass1,change1, 'Password cannot be blank.');
    } else if (!isPasswordSecure(pass1)) {
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
    if (!isRequired(pass2)) {
        return false;
        // ShowError(pass2, change2, 'Enter the password again');
    }
    else if(pass2 != pass1) {
        return false;
        // ShowError(pass2,change2, 'Password should match');
    }
    else {
        // ShowSuccess(pass2,change2);
        valid = true;
    }
    return valid;


}
function validation4(){
    console.log("Hi I entered into validation Blog");
    const emailEl = document.querySelector('#Email');
    const passwordEl = document.querySelector('#pwd');
    let isEmailValid = checkEmail(emailEl);
    let isPasswordValid = checkPassword(passwordEl);
    console.log(isEmailValid);
    console.log(isPasswordValid);
    let isFormValid =  isEmailValid &&
        isPasswordValid;
    if(!isFormValid){
        return false;
    }
    return true;
};
function validation5(){
    console.log("Hi I entered into validation Blog");
    const nameEl = document.querySelector("#Name");
    const repassword = document.querySelector("#pwd1");
    const emailEl = document.querySelector('#Email');
    const passwordEl = document.querySelector('#pwd');
    let isNameValid = checkUsername(nameEl);
    let isEmailValid = checkEmail(emailEl);
    let isPasswordValid = checkPassword(passwordEl);
    let isrepasswordValid = reCheckPassword(passwordEl,repassword);
    let isFormValid =  isEmailValid &&
        isPasswordValid && isNameValid && isrepasswordValid;
    if(!isFormValid){
        return false;
    }
    return true;
};

exports.isRequired = isRequired;
exports.isBetween  = isBetween;
exports.isEmailValid = isEmailValid;
exports.isPasswordSecure = isPasswordSecure;
exports.checkUsername = checkUsername;
exports.checkEmail = checkEmail;
exports.checkPassword = checkPassword;
exports.reCheckPassword = reCheckPassword;
exports.validation5 = validation5;