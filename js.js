function login(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let isTicked = document.getElementById("box").checked

    console.log(isTicked)

    if (username == "admin" && password == "admin1234" && isTicked){
        document.getElementById("bszs").hidden = true
        document.write("Üdv. Admin!")
    }
}