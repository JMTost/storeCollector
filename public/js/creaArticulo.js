const form = document.getElementById("formArticulo");
form.addEventListener("submit", function(event){
    console.log("prueba");
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
    //subida.upload('foto');
    const data = {
        nombre_objeto : nombre_objeto,
        estado : estado,
        descripcion : desc,
        precio : precio,
        contacto : contacto, 
        id_usuario : id,
        id_categoria : categoria
    };
    envioBack(data);
});
function envioBack(data){
    console.log(data);
    fetch('http://localhost:3000/files', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    }).then(response=>response.json())                                               //index de la pagina del usuario
    .then(console.log("OK"), alert("Articulo creado"), window.location.href="../index.html");
}