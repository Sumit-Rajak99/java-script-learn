let a=parseInt(prompt("enter any number1"));
let b=parseInt(prompt("enter any number2"));
for(let i=1;i<b;i++){
    let temp=b;
    b=a%b;
    a=temp;
}
console.log(a);