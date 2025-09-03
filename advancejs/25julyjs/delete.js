async function deleteshow() {
    let api = "http://localhost:3000/student";
    const obj = await fetch(api);
    const data = await obj.json();

    let table = `
        <table border="2" width="500" bgcolor="green">
            <tr>
                <th>id</th>
                <th>rollno</th>
                <th>name</th>
                <th>city</th>
                <th>fees</th>
            </tr>
    `

    data.map((key) => {
        table += `
            <tr>
                <td>${key.id}</td>
                <td>${key.rollno}</td>
                <td>${key.name}</td>
                <td>${key.city}</td>
                <td>${key.fees}</td>
            </tr>
        `
    });

    table += "</table>";
    document.getElementById("demo").innerHTML = table;
}

deleteshow();
