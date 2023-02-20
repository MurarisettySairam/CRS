// const validation5 = require("./registration");
const {isRequired, isBetween, isEmailValid, isPasswordSecure, checkUsername, checkEmail, checkPassword, reCheckPassword, validation5} = require("./registration");
// import isEmailValid from registration

// const isEmailValid = require("./registration");

// const checkUsername = require("./registration");

test("check ramjay returns true", ()=>{
    // const result = checkUsername("ramjay") 
    expect(isRequired("ramjay")).toBe(true);
});

test("check empty str returns false", ()=>{
    expect(isRequired("")).toBe(false);
});

test("check length is greater than min and less than max", ()=>{
    const result = isBetween("ramjay", 3, 10);
    expect(result).toBe(true);
});

test("check length is greater than min and less than max", ()=>{
    const result = isBetween("ram", 5, 10);
    expect(result).toBe(false);
});

test("check emailId is valid ", ()=> {
    const result = isEmailValid("test123@gmail.com");
    expect(result).toBe(true);
});

test("check emailId is valid ", ()=> {
    const result = isEmailValid("test123gmail.com");
    expect(result).toBe(false);
});

test("check emailId is valid ", ()=> {
    const result = isEmailValid("123ram@gmail.com");
    expect(result).toBe(true);
});

test("check emailId is valid ", ()=> {
    const result = isEmailValid("test/$123@gmail.com");
    expect(result).toBe(true);
});

test("check password is valid ", ()=> {
    const result = isPasswordSecure("Test/$123");
    expect(result).toBe(true);
});

test("check password is valid ", ()=> {
    const result = isPasswordSecure("Test123@");
    expect(result).toBe(true);
});

test("check password is valid ", ()=> {
    const result = isPasswordSecure("/$123Test");
    expect(result).toBe(true);
});

test("check password is valid ", ()=> {
    const result = isPasswordSecure("TesT1234!");
    expect(result).toBe(true);
});

test("check password is valid ", ()=> {
    const result = isPasswordSecure("1234567890");
    expect(result).toBe(false);
});

test("check password is valid ", ()=> {
    const result = isPasswordSecure("TesT 1234!");
    expect(result).toBe(false);
});

test("check username is valid ", ()=> {
    const result = checkUsername("ramJay1702");
    expect(result).toBe(true);
});

test("check username is valid ", ()=> {
    const result = checkUsername("Rj");
    expect(result).toBe(false);
});

test("check username is valid ", ()=> {
    const result = checkUsername("");
    expect(result).toBe(false);
});

test("check username is valid ", ()=> {
    const result = checkUsername("aaaaaaaaaaabbbbbbbbbbbbbccccccccccccccccccddddddddddddddddddd");
    expect(result).toBe(false); 
});

test("check email is valid ", ()=> {
    const result = checkEmail("test/$123@gmail.com");
    expect(result).toBe(true);
});

test("check emailId is valid ", ()=> {
    const result = checkEmail("testgamil.com");
    expect(result).toBe(false);
});

test("check emailId is valid ", ()=> {
    const result = checkEmail("Test123@gmail.com");
    expect(result).toBe(true);
});

test("check emailId is valid ", ()=> {
    const result = checkEmail("Test 123 @gmail.com");
    expect(result).toBe(false);
});

test("check password is valid ", ()=> {
    const result = checkPassword("");
    expect(result).toBe(false);
});

test("check password is valid ", ()=> {
    const result = checkPassword("TesT1234!");
    expect(result).toBe(true);
});

test("check password is valid ", ()=> {
    const result = checkPassword("TesT 1234!");
    expect(result).toBe(false);
});


test("check does password matches ", ()=> {
    const result = reCheckPassword("Passrd1", "Passrd1");
    expect(result).toBe(true);
});

test("check does password matches ", ()=> {
    const result = reCheckPassword("Passrd1", "Passwrd1");
    expect(result).toBe(false);
});

test("check does password matches ", ()=> {
    const result = reCheckPassword("Passrd1", "Passrd1 ");
    expect(result).toBe(false);
});

test("check is function valid", ()=>{ 
    expect(validation5()).toBeDefined();
})