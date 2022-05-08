const form = document.getElementById("formCreaUser");
form.addEventListener("submit", function(event){
    event.preventDefault();

    let id = document.getElementById("idUser_number").value;
    let nombre = document.getElementById("nombre_text").value;
    let email = document.getElementById("correo").value;
    let nickname = document.getElementById("nickname").value;
    let pass = document.getElementById("pass").value;

    const data = {
        id : id,
        nombre : nombre,
        email : email,
        nickname : nickname,
        pass : pass
    };
    envioBack(data);
});
function envioBack(data){
    console.log(data);

    fetch('http://localhost:3000/pruebaPost',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    }).then(response=>response.json()).then(console.log("OK"), alert("DATOS RECIBIDOS"), window.location.href="./index.html");
    
}