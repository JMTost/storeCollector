const mysql = require('mysql');
var driver = {};

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "max140700_",//cambio de contraseña
    database: "storecollector",
});

driver.usuarios = ({})=>{
    return new Promise( (resolve, reject)=>{
        return resolve({mensaje : "bienvenido"});
    });
};
//METODOS PARA LOS USUARIOS, INSERCION Y BUSQUEDA
driver.insertUser = ({nombre_usuario, correo, nickname, password})=>{
    return new Promise( (resolve, reject)=>{
        connection.query(`SELECT COUNT(*) as dato FROM usuario Where correo= ?`,[correo], (error, resultado)=>{
            if(error){
                console.log("error: "+error);
                return reject(error);
            }else{
                if(resultado[0].dato <= 0){
                    connection.query("SELECT COUNT(*) as filas FROM usuario", (err, rows)=>{
                        if(err){
                            console.log("Error: "+err);
                        }else{
                            let id_usuario = Number(rows[0].filas);
                            id_usuario = id_usuario+1;
                            connection.query(`INSERT INTO usuario SET ?`, {id_usuario, nombre_usuario, correo, nickname, password}, (err, result)=>{
                                if(err){
                                    console.log(err);
                                    return reject({status:500});
                                }else{
                                    return resolve({status:"success", mensaje:"Usuario creado" })
                                }
                            });
                        }
                    })
                }else{
                    console.log("Correo electrónico en uso. ");
                    return reject("Correo electrónico en uso. ");
                }
            }
        });
    });
}
driver.loginUser = async({user, password})=>{
    return new Promise((resolve, reject)=>{
        connection.query("SELECT COUNT(*) as registro, id_usuario FROM usuario WHERE nickname=? AND password =?", [user, password], (err, result)=>{
            if(err){
                console.log("error: "+err);
                return reject(err); 
            }else{
                if(result[0].registro>0){
                    //encontramos el usuario
                    console.log(result)
                    return resolve(result);
                }else{
                    return reject({status:404});
                }
            }
        });
    });
}

//METODOS PARA LOS ARTICULOS
driver.creaArticulo = async({nombre_objeto, estado, descripcion, precio, contacto, nombre_imagen, id_usuario, id_categoria})=>{
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT COUNT(*) as dato FROM objeto`, (error, resultado)=>{
            if(error){
                console.log(error);
                return reject(error);
            }else{
                //obtenemos el total de registros y apartir de este le sumamos uno
                id_objeto = resultado[0].dato + 1;
                console.log("INFO FORMATEADA: "+id_objeto, nombre_objeto, estado, descripcion, precio, contacto, nombre_imagen, id_usuario, id_categoria);
                const data = {id_objeto, nombre_objeto, estado, descripcion, precio, contacto, nombre_imagen, id_usuario, id_categoria};
                connection.query("INSERT INTO objeto SET ?", {id_objeto, nombre_objeto, descripcion, estado, precio, contacto, nombre_imagen, id_usuario, id_categoria}, (err, result)=>{
                    if(err){
                        console.log(err);
                        return reject({status:500});
                    }else return resolve({status:"success", data:data});
                });
            }
        })
    });
}
driver.eliminarArticulo = async({id_objeto})=>{
    return new Promise((resolve, reject)=>{
        const data = {id_objeto};
        connection.query(`DELETE FROM objeto WHERE id_objeto = ${id_objeto}`, (err, result)=>{
            if(err){
                console.log(err);
                return reject({status:500});
            }else return resolve({status:500, data:data});
        });
    });
}
driver.obtenArticulos = async({})=>{
    return new Promise((resolve, reject)=>{
        connection.query("Select id_objeto, nombre_objeto, estado, precio from objeto", (err, result)=>{
            for(let i = 0; i<result.length; i++){
                console.log("id: "+result[i].id_objeto+" nombre: "+result[i].nombre_objeto);
                resolve(result[i].id_objeto+":"+result[i].nombre_objeto+","+"estado: "+result[i].estado+","+"precio: "+result[i].precio);
            }
        });
    });
}

//METODOS PARA LAS CATEGORIAS
driver.creaCategoria = async({id_categoria, nombreCategoria, desc})=>{
    return new Promise((resolve, reject)=>{
        const data = {id_categoria, nombreCategoria, desc};
        connection.query("INSERT INTO categoria SET ?", {id_categoria, nombreCategoria, desc}, (err, result)=>{
            if(err){
                console.log(err);
                return reject({status:500});
            }else return resolve({status:"success", data:data});
        });
    });
}
driver.eliminarCategoria = async({id_categoria})=>{
    return new Promise((resolve, reject)=>{
        const data = {id_categoria};
        connection.query(`DELETE FROM categoria WHERE id_categoria = ${id_categoria}`, (err, result)=>{
            if(err){
                console.log(err);
                return reject({status:500});
            }else return resolve({status:"success", data:data});
        });
    });
}
driver.obtenCategoria = async()=>{
    return new Promise((resolve, reject)=>{
        connection.query("Select id_categoria, nombre_categoria, descripcion from categoria", (err, result)=>{
            //for(let i = 0; i<result.length; i++){
                //console.log("id: "+result[i].id_categoria+" nombre: "+result[i].nombre_categoria);
                //resolve(result[i].id_categoria+":"+result[i].nombre_categoria+","+"descripcion: "+result[i].descipcion);
                resolve(result);
            //}
        });
    });
}

//METODOS PARA LOS OBJETOS DE LOS CARRITOS 
driver.agregaItemCarrito = async({idCarrito, id_usuario, id_objeto})=>{
    return new Promise((resolve, reject)=>{
        console.log("INFO FORMATEADA: "+idCarrito, id_usuario, id_objeto);
        const data = {idCarrito, id_usuario, id_objeto};
        connection.query("INSERT INTO carrito SET ?", {idCarrito, id_usuario, id_objeto}, (err, ressult)=>{
            if(err){
                console.log(err);
                return reject({status:500});
            }else return resolve({status:"success", data:data});
        });
    });
}
driver.eliminaItemCarrito = async({idCarrito, id_objeto})=>{
    return new Promise((resolve, reject)=>{
        const data = {idCarrido, id_objeto};
        connection.query(`DELETE FROM carrito WHERE id_carrito = ${idCarrito} AND id_objeto = ${id_objeto}`, (err, result)=>{
            if(err){
                console.log(err);
                return reject({status:500});
            }else return resolve({status:"success", data: data});
        });
    });
}

//METODOS PARA LA VENTA
module.exports = driver;