


let arr=[8,5,4,12,2,1,3,7,6]

let ans=arr.slice(1,9);
console.log(ans);

// for(let i=0;i<ans.length;i++){
//     if(ans[i]%2==0){
//         console.log(ans[i]);
//     }
// }


// using for of loop   
for(let v of ans){
    if(v%2==0){
        console.log(v);
    }
}