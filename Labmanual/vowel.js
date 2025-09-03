let name = ["s","u","m","i","t"];
let count=" ";
let count2=" ";

for (let i =0; i <= name.length - 1; i++) {
    if(name[i]== "a" ||name[i]=="e" || name[i]=="i" ||name[i]=="o" ||name[i]=="u"){
        count++;
        
    }
    else{
        count2++;
    }
    
}

console.log("vowel",count);
    console.log("constant",count2);


