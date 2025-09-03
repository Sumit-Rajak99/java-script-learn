// let name=["sumit","sid","pawan","vijay"];

// // for(let i=0;i<name.length;i++){
// //     console.log(name[i]);
// // 

// // }

// for(let n of name){
//     console.log(n);
// }


// let citys=["bhopal","mumbai","delhi"];

// for(let city of citys){
//     console.log(city);
// }


// let marks=[85,97,44,37,76,60];
// let ans=0;
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
//     ans=sum/marks.length;
// }
// console.log(ans);


let price=[340,560,567,890,234];

for(var i=0;i<price.length;i++){
    let offer = price[i] / 10;    
    price[i] = price[i] - offer;  
}

console.log(price[i]);
