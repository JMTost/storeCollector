const form = document.getElementById("formLogin");
form.addEventListener("submit", function(event){
    console.log("HOAL")
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
    console.log(data);
    let i;
    fetch('http://localhost:3000/loginUser',{
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
            alert("Error, datos no encontrados");
        }
    });
    
}