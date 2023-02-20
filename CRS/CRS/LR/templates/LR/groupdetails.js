document.addEventListener('DOMContentLoaded',function(){
    let Groupname=localStorage.getItem('Groupname')?localStorage.getItem('Groupname'):"";
    let Groupdescription=localStorage.getItem('Groupdescription')?localStorage.getItem('Groupdescription'):"";

    document.querySelector('h3').innerHTML= Groupname;
    document.querySelector('h6').innerHTML= Groupdescription;
   
    document.querySelector('#leave').onclick=() =>{
    alert(`Click 'OK' to leave.`);
    location. href = "search.html";
    }   
    const li=document.createElement('li')
    li.innerHTML='jai';
    document.querySelector('#list').append(li)

    document.querySelector('#sc').disabled=true;
    document.querySelector('#Gname').onkeyup=function(){
    if(document.querySelector('#Gname').value.trim().length>0){
        document.querySelector('#sc').disabled=false;
    } 
    else{
        document.querySelector('#sc').disabled=true;
    }
    };
   
    document.querySelector('#sc').onclick=function(){
    Groupname = document.querySelector('#Gname').value;
    document.querySelector('#Gn').innerHTML=Groupname;
    localStorage.setItem('Groupname',Groupname);
    Groupdescription = document.querySelector("#Gdescription").value;
    document.querySelector('#Gd').innerHTML=Groupdescription;
    localStorage.setItem('Groupdescription',Groupdescription);
    document.querySelector('#sc').disabled=true;
    return false;
    } 
    
    document.querySelector('#finalout').onclick=() =>{
        alert(`Click 'OK' to leave Website!.`);
        location. href = "login.html";
    }
});
