

// destrucre of array= accessc Element of array with the help of variable 

// let [name,hight,place]=["sumit",5.6,"Bhopal",23,4,5,6,7,7,8]

// console.log(name);


// destrucre of Object= accessc Element of array with the help of variable 

// let {name,age,place}={
//     name:"sumit",
//     age:18,
//     place:"bhopal"

// }

// console.log(name);



// let ob={
//     name:"sumit",
//     age:18,
//     place:"bhopal",
//     account:{
//         ac_no:2293938383939,
//         ac_balance: 1200000000
//     },
//     sum:function(){
//         console.log("hello sid");
//     },
//     arr:[123383,9394440]

// }

// console.log(ob.account.ac_balance);
// ob.sum()
// console.log(ob.arr[1]);
// ob.email="sumit793@gamil"
// ob.place="indore"

// console.log(ob)

// let ob={
//     name:"sumit",
//     age:18,
//     place:"bhopal"
// }

// // // for in loop  
// // for(let k in ob){
// //     console.log(k + ":"+ob[k]);
// // }

// // object method 

// let key=Object.keys(ob) //return key array

// console.log(key[1]);

// let value=Object.values(ob); //return value array
// console.log(value[1]);


// sprread oprater =use for merge two  object in new oprater 

let ob={
     name:"sumit",
     age:18,
     place:"bhopal"
}
let  ac={
    ac: 18144997787,
    bl:28392823
}

let newob={
  ...ob,...ac
}
console.log(newob);