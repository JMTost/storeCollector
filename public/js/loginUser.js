const form = document.getElementById("formLogin");
form.addEventListener("submit", function(event){
    //console.log("HOLA")
    event.preventDefault();

    let nickame = document.getElementById("nickname").value;
    let password = document.getElementById("pass").value;
    
    const data = {
        user : nickame,
        password : password
    };
    envioBack(data);
});
function envioBack(data){
    //console.log(data);
    let i;
    fetch('http://localhost:3000/loginUser',{
        method: "POST",
        headers: {"Content-Type":"application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    }).then(response=>response.json())
    .then(json=>{
        console.log(json);
        i = JSON.parse(json.registro);
        //console.log(json);
        if(i==1){
            alert("Bienvenido");
            //console.log(json);
            sessionStorage.setItem('id_usuario', json.id_usuario)
            let id = sessionStorage.getItem('id_usuario');
            console.log("valor de: "+id);
                                    //aqui ira la ruta del index usuario
            window.location.href = "../index.html";
            sessionStorage.setItem('loggeado',1);
        }else{
            alert("Error, datos no encontrados");
        }
    });
    
}