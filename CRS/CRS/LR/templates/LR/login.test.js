const { valid } = require("semver");
const {isEmailValid,isPasswordSecure,validation4}=require("./login")

it("check emailId is valid ", ()=> {
    const result = isEmailValid("test123@gmail.com");
    expect(result).toBe(true);
});
it("check emailId is valid ", ()=> {
    const result = isEmailValid("test123gmail.com");
    expect(result).toBe(false);
});
it("check emailId is valid ", ()=> {
    const result = isEmailValid("test123gmailcom");
    expect(result).toBe(false);
});
it("checking ispassword secure", ()=> {
    const result = isPasswordSecure("Ts123456*");
    expect(result).toBe(true);
});
it("checking ispassword secure", ()=> {
    const result = isPasswordSecure("ts123456");
    expect(result).toBe(false);
});
it("checking ispassword secure", ()=> {
    const result = isPasswordSecure("ts");
    expect(result).toBe(false);
});
it("check is function valid", ()=>{ 
    expect(validation4()).toBeDefined();
})  