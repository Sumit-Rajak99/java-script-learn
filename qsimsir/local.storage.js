
// // four functin in localStorage 

// // setitem 

// localStorage.setItem("name","sumit")
// localStorage.setItem("contact",122541);


// localStorage.clear()

// localStorage.setItem("name","sumit")
// localStorage.setItem("contact",122541);

// // getitem

// let name=localStorage.getItem('name')
// alert(name)


// // remoitem
//  localStorage.removeItem('contact')

// //  clear
// // localStorage.clear();



// object storage in localStorage

 let person={
    name:"sumit",
    age:18,
    contact:2398393980,
    location:"bhopal"
 }

 localStorage.setItem("userdata",JSON.stringify(person)) 

 let getdata=JSON.parse(localStorage.getItem('userdata'))
 console.log(getdata.location);   
  localStorage.clear();            