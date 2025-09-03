let marks=prompt("enter your marks");

if(marks<0){
    alert("invalid input");
}

else if(marks<=59){
    alert("F");
}
else if(marks>=60 && marks<=74){
    alert("C");
}
else if(marks>=75 && marks<=89){
    alert("B");
}
else if(marks>=90 && marks<=100){
    alert("A");
}
else if(marks>100){
    alert("invalid input");
}
