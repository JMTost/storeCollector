var data= {}
    //console.log(data);
    document.getElementById("categoria");
    fetch('http://localhost:3000/obtenCategorias',{
        method: "GET",
        headers: {"Content-Type":"application/json"},
    }).then(response=>response.json()).then(json=>{
        data = json;
        let i;
        //console.log(data[i]);
        var select = document.createElement("select");
        select.name = "categorias";
        select.id = "categorias";
        for(const values of data){
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
        document.getElementById("prueba").appendChild(label).appendChild(select);
        //document.createElement(`<p>${json[0].nombre_categoria}</p>`)
    });
/**
 * var data= {}
    //console.log(data);
    document.getElementById("categoria");
    fetch('http://localhost:3000/obtenCategorias',{
        method: "GET",
        headers: {"Content-Type":"application/json"},
    }).then(response=>response.json()).then(data = json);
    let i;
    for(i=0; i<data.length; i++){
        console.log("Ah:"+data[i]);
        var select = document.createElement("select");
        select.name = data[i].nombre_categoria;
        select.id = dara[i].id;
    }
 */