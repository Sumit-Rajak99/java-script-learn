// async function access(){
//         let data = await fetch('https://jsonplaceholder.typicode.com/comments')
//         let res =await data.json()
//         console.log(res) 




//     }
//     access()


// let shdata=document.querySelector('#showdata')
// let finalres=emp.map((obj)=>`
// <tr>
// <td> ${obj.name}</td>
// <td> ${obj.city}</td>
// <td> ${obj.contact}</td>
// </tr>
// `).join("")

// shdata.innerHTML=finalres
// fetch.js
async function fetchData() {
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();

        let tbody = document.getElementById('showdata');
        tbody.innerHTML = '';

        data.forEach(user => {
          let row = `
            <tr>
              <td>${user.name}</td>
              <td>${user.phone}</td>
              <td>${user.address.city}</td>
            </tr>`;
          tbody.innerHTML += row;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    
    

fetchData();

