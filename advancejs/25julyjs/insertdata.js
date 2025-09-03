document.getElementById("btn1").addEventListener("click",myinsert);

 async function myinsert(){
    let id =document.getElementById("id").value;
    let rollno =document.getElementById("roll").value;
    let name =document.getElementById("name").value;
    let city =document.getElementById("city").value;
    let fees =document.getElementById("fees").value;
    
    
    console.log(id,rollno,name,city,fees);

      const request = await fetch("http://localhost:3000/student",{
        method: "post",
        
        body:JSON.stringify({
            "id":id,
            "rollno":rollno,
            "name":name,
            "city":city,
            "fees":fees,

        }),
    });

    alert("save data");
}