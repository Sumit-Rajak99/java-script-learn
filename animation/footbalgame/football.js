// document.getElementById("play1").addEventListener("click",playstar1);
// let left=195;
// let play1int;
// let play2int;

// function kickplay1(){
//    left =left+5;
//    let ballobj=document.getElementById("ball");
//    ballobj.style.left=left+"px";

//    if(left>=1110){
//     clearInterval(play1int);
//    }
// }
// function playstar1(){
//     play1int=setInterval(kickplay1,10);
// }

// function kickplay2(){
//    left =left-5;
//    let ballobj=document.getElementById("ball");
//    ballobj.style.left=left+"px";

//    if(left<=195){
//     clearInterval(play2int);
//    }
// }
// function playstar2(){
//     play2int=setInterval(kickplay2,10);
// }






























document.getElementById("play1").addEventListener("click", playstar1);
document.getElementById("play2").addEventListener("click", playstar2);

let left = 195;
let play1int;
let play2int;

function kickplay1() {
  left = left + 5;
  let ballobj = document.getElementById("ball");
  ballobj.style.left = left + "px";

  if (left >= 1110) {
    clearInterval(play1int);
  }
}

function playstar1() {
  clearInterval(play2int); 
  play1int = setInterval(kickplay1, 10);
}

function kickplay2() {
  left = left - 5;
  let ballobj = document.getElementById("ball");
  ballobj.style.left = left + "px";

  if (left <= 195) {
    clearInterval(play2int);
  }
}

function playstar2() {
  clearInterval(play1int); 
  play2int = setInterval(kickplay2, 10);
}
