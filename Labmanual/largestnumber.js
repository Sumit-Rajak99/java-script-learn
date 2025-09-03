
function num(num1,num2,num3){
    if(num1>num2 && num1>num3){
        alert("number1 is grether");
    }
    else if(num2>num1 && num2>num3){
        alert("number2 is grether");
    }
    else{
        alert("number3 is grether");
    }

}
let num1=parseInt(prompt("enter number1:"));
let num2=parseInt(prompt("enter number2:"));
let num3=parseInt(prompt("enter number3:"));

num(num1 ,num2,num3);