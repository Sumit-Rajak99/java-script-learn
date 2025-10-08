async function apifetch() {
    try {
        let res = await fetch('http://localhost:3000/student'); // JSON server API
        let data = await res.json();

        let trdata = data.map((e) =>
            `
            <tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.email}</td>
                <td>${e.contact}</td>
                <td>${e.city}</td>
            </tr>
            `
        ).join(""); 

        document.querySelector('#tbody').innerHTML = trdata;

    } catch (err) {
        console.error("API fetch error:", err);
    }
}

apifetch();
