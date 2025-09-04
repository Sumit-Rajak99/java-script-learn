let num = 5;   
let first = 0;
let sec = 1;
let next;

console.log(first);  
console.log(sec);    

for (let i = 2; i < num; i++) {
    next = first + sec; 
    console.log(next);  
    first = sec;       
    sec = next;        
}
