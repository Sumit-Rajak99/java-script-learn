// map=map function useing access Element of array 

let emp=[
    {
        name : "sumit",
        city : "Bhopal",
        contact : 2298383
    },
    {
       name : "Ram",
        city : "Indore",
        contact : 2283120730 
    },
    {
        name : "raj",
        city : "delhi",
        contact : 2299992
    }

]

// let res=emp.map((obj)=>{
//     return obj.contact
// })
// console.log(res);

// // use of filter 

// let city=emp.filter((obj)=>{
//     return obj.city=="Bhopal"
// })
// console.log(city);

let shdata=document.querySelector('#showdata')
let finalres=emp.map((obj)=>`
<tr>
<td> ${obj.name}</td>
<td> ${obj.city}</td>
<td> ${obj.contact}</td>
</tr>
`).join("")

shdata.innerHTML=finalres


// roll no 
// student name
// studenr class ,contact ,email,address
     