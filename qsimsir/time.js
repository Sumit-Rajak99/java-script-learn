
let value=0;
function fun(){
    
    if(value%2!=0){

        let color=document.querySelector('#demo')
        color.innerHTML=++value;
        color.style.color="red"; 
    }
    else{
        let color=document.querySelector('#demo')
        color.innerHTML=++value;
        color.style.color="black"; 
    }
}
function sub(){
    
     if(value%2!=0){

        let color=document.querySelector('#demo')
        color.innerHTML=--value;
        color.style.color="green"; 
    }
    else{
        let color=document.querySelector('#demo')
        color.innerHTML=--value;
        color.style.color="blue"; 
    }
    
}
function reset(){
    document.querySelector('#demo').innerHTML=0;
}