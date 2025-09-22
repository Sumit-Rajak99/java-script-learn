
function getuserdata() {
    let user = {
        name: document.querySelector('#name').value,
        username: document.querySelector('#username').value,
        password: document.querySelector('#password').value
    };


    localStorage.setItem("userdata", JSON.stringify(user));
    
    
}

function loginuser() {
   
    let localdata = JSON.parse(localStorage.getItem('userdata'));

    

    let login = {
        loginname: document.querySelector('#loginname').value,
        loginpassword: document.querySelector('#loginpassword').value
    };

    
    if (localdata.username !== login.loginname) {
        alert("User not found");
        return false;
    }



    
}
