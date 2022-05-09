const form = document.getElementById("formCreaUser");
form.addEventListener("submit", function(event){
    event.preventDefault();
    
    let nombre_objeto = document.getElementById("nombre_objeto").value;
    let desc = document.getElementById("desc").value;
    let estado = document.getElementById("estado").value;
    let precio = document.getElementById("precio").value;
    let contacto = document.getElementById("contacto").value;
    //OBTENEMOS EL VALOR DEL ID COLOCADO
    var categoria = document.getElementById("categorias").value;
    //console.log(categoria);
    //manejo de sesiones
    let id  = sessionStorage.getItem("id_usuario");
    //console.log("valor del id del usuario: "+id);
    const data = {
        nombre_objeto : nombre_objeto,
        estado : estado,
        descripcion : desc,
        precio : precio,
        contacto : contacto, 
        id_usuario : id,
        id_categoria : categoria
    };
    //console.log(imagen);
    //console.log(data);
    //envioBack(data);
});
function envioBack(data){
    console.log(data);

    fetch('http://localhost:3000/pruebaPost',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    }).then(response=>response.json()).then(/*console.log("OK"), alert("DATOS RECIBIDOS"), window.location.href="./index.html"*/);
    
}