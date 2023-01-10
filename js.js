function login(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let isTicked = document.getElementById("box").value

    if (username == "admin" && password == "admin1234" && isTicked){
        alert("üdv admin")
    }
}