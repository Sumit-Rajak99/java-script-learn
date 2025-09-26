let person =[
  { name: "sam",
     age: 18 
    },

  { name: "ram",
     age: 16 
    },
  { name: "sonu",
     age: 20 
    }
];

let ans=person.filter((obj)=>{
 return  obj.age>=18

})
console.log(ans);

