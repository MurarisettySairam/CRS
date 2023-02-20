document.addEventListener('DOMContentLoaded',function(){

    document.querySelector("#ppost").onclick() =function(){
        let cmnt= document.querySelector("#ppost");
        for(let i = 0; i<cmnt.children.length;i++){
        console.log(cmnt.cildren[i])
    }
    }
        

});
