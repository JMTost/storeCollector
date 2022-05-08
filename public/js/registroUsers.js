const form = document.getElementById("registroUsuario");
form.addEventListener("submit", function(event){
    event.preventDefault();

    let nombre_usuario = document.getElementById("nombre_usuario").value;
    let correo = document.getElementById("correo").value;
    let nickname = document.getElementById("nickname").value;
    let password = document.getElementById("pass").value;
    
    const data = {
        nombre_usuario : nombre_usuario,
        correo : correo,
        nickname : nickname,
        password : password
    };
    envioBack(data);
});
function envioBack(data){
    console.log(data);
    let i;
    fetch('http://localhost:3000/creaUser',{
        method: "POST",
        headers: {"Content-Type":"application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    }).then(response=>response.json())
    .then(json=>{
        i = JSON.parse(json);
        if(i==1){
            alert("Bienvenido");
            window.location.href = "../index.html";
        }else{
            alert(JSON.stringify(json));
        }
    });
    
}