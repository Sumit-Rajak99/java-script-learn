let arr = [1, 2, 4, 5, 3];
let count = 0;
let count2 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        count++;
        
    } else {
        count2++;
        
    }
}

console.log("Total Even Numbers:", count);
console.log("Total Odd Numbers:", count2);
