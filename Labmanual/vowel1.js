

let str=prompt("enter any string");
let count=0;

console.log(str);

for(let i=1;i<str.length;i++){
    if(str[i]=='a'||str[i]=='e'|| str[i]=='i'|| str[i]=='o'|| str[i]=='u'){
        count++;
    }
}
console.log(count);