

        buttonsearch.onclick = function () {
            let url = "https://www.google.com/search?q=" + webpage.value;
            window.location.assign(url);
} 


document.addEventListener('DOMContentLoaded',function(){
let buttonsearch = document.querySelector(".button");

buttonsearch.onclick = function(){
        let searchbx = document.querySelector( ".searchbx");
        let url =searchbx.value;
//     window.frames.location= url;
        location.href= "contentloading.html"
        let myIframe = document.getElementById("myIframe").src; 
        // console.log(url);
        myIframe = url;
}  
document.querySelector('#finalout').onclick=() =>{
    alert(`Click 'OK' to leave Website!.`);
    location. href = "login.html";
}
    document.querySelector('#addgroup').disabled=true;
    document.querySelector('#Gname').onkeyup=function(){
    if(document.querySelector('#Gname').value.trim().length>0){
       document.querySelector('#addgroup').disabled=false;
    } 
    else{
        document.querySelector('#addgroup').disabled=true;
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
const checkUsername = (name1) =>{
    let valid = false;
    const min =  3;
    const max = 10;
    if(!isBetween(name1,min,max)){
        alert('username Should be between 3-10')
        return false;
    }
    else{
        valid = true;
    }
    return valid;
}
    document.querySelector('#addgroup').onclick=function(){
    // const li=document.createElement('button');
    const gname=document.querySelector('#Gname').value;
    li.innerHTML=gname;
    let li=checkUsername()
    document.querySelector('#list').append(li);
    document.querySelector('#Gname').value="";
    document.querySelector('#addgroup').disabled=true;
    }  
});

