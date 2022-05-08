var data= {}
    //console.log(data);
    fetch('http://localhost:3000/obtenCategorias',{
        method: "GET",
        headers: {"Content-Type":"application/json"},
    }).then(response=>response.json()).then(json=>{
        data = json;
        console.log(data);
        let i;
        for(i=0; i<data.length; i++){
            console.log(data[i]);
        }
    });