async function access(){
        let data = await fetch('https://jsonplaceholder.typicode.com/comments')
        let res =await data.json()
        let apidata=res.map((e)=>`
        <tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.email}</td>
        <td>${e.body}</td>
        </tr>
        `).join("")
        document.querySelector('#showdata').innerHTML=apidata


    }
    access()


