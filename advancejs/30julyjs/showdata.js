document.getElementById("btn1").addEventListener("click",mydata);
let table = `<table border="1" bgcolor="pink">
<tr>
<th>Id</th>
<th>Roll No</th>
<th>Name</th>
<th>City</th>
<th>Fees</th>
</tr>`;  
 async function mydata(){
    let api="http://localhost:3000/student";
    let obj=await fetch(api);
    let Data=await obj.json();


        Data.map((key) => {
        table += `<tr>
        <td>${key.id}</td>
        <td>${key.rollno}</td>
        <td>${key.name}</td>
        <td>${key.city}</td>
        <td>${key.fees}</td>
        </tr>`;
    });

    table += "</table>";

    document.getElementById("demo").innerHTML = table;


 }