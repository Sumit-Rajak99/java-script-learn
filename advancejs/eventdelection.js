document.getElementById("box1").addEventListener("click", display1);

function display1(event) {
      
     if(event.target.id=="box1"){
        console.log("grand");
     }
     else
        if(event.target.id=="box2"){
        console.log("father");
     }
     else{
                console.log("child");
     }
}