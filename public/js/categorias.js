var data = {}
//console.log(data);
let i;
i = sessionStorage.getItem("id_usuario");
console.log(i)
var inputNumber = document.createElement("input");
inputNumber.id = "id_usuario";
inputNumber.name = "id_usuario";
inputNumber.type = "text";
inputNumber.value = Number(i);
inputNumber.readOnly = true ;
var label_user = document.createElement("label");
label_user.innerHTML = "ID usuario: ";
label_user.htmlFor = "id_usuario";
//inputNumber.setAttribute("type", "number");
fetch('http://localhost:3000/obtenCategorias', {
    method: "GET",
    headers: { "Content-Type": "application/json" },
}).then(response => response.json()).then(json => {
    data = json;
    //console.log(data[i]);
    var select = document.createElement("select");
    select.name = "categorias";
    select.id = "categorias";
    for (const values of data) {
        var option = document.createElement("option");
        option.value = values.id_categoria;
        option.text = values.nombre_categoria;
        select.append(option);
        console.log("datos en el for:")
        console.log(values)
    }
    var label = document.createElement("label");
    label.innerHTML = "Selecciona una categoria: ";
    label.htmlFor = "categoria";
    document.getElementById("prueba").appendChild(label_user);
    document.getElementById("prueba").appendChild(inputNumber);
    document.getElementById("prueba").appendChild(label);
    document.getElementById("prueba").appendChild(select);
    
    //document.createElement(`<p>${json[0].nombre_categoria}</p>`)
});
