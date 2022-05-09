var express = require('express');
const res = require('express/lib/response');
var db = require("../BD/conexion");
const multer = require("multer");
const mimeTypes = require("mime-types")
var router = express.Router();
const path = require("path");


//pagina principal
router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/creaUser', async (req, res) => {
    try {
        result = await db.insertUser(req.body);
        res.status(200).send("1");
    } catch (err) {
        res.send("0");
    }
});

router.post('/loginUser', async (req, res) => {
    try {
        result = await db.loginUser(req.body);
        res.status(200).send(result[0]);
    } catch (error) {
        res.send("0");
    }
});

//metodo de articulos/objetos

router.post('/creaArt', async (req, res) => {
    try {
        result = await db.creaArticulo(req.body);
        res.status(200).send("1");
    } catch (error) {
        res.send("0");
    }
});

router.post('/eliminaArt', async (req, res) => {
    try {
        result = await db.eliminarArticulo(req.body);
        res.status(200).send("1");
    } catch (error) {
        res.send("0");
    }
});

router.get('/obtenArt', async(req, res)=>{
    res.status(200).send(await db.obtenArticulos());
});


//metodo del carrito

router.post('/agregaCarr', async (req, res) => {
    try {
        result = await db.agregaItemCarrito(req.body);
        res.status(200).send("1");
    } catch (error) {
        res.send("0");
    }
});

router.post('/eliminaCarr', async (req, res) => {
    try {
        result = await db.eliminaItemCarrito(req.body);
        res.status(200).send("1");
    } catch (error) {
        res.send("0");
    }
});

//metodo de categoria

router.get('/obtenCategorias', async (req, res)=>{
    //console.log(req);
    result = await db.obtenCategoria();
    console.log("Datos: ");
    console.log(JSON.stringify(result));
    res.status(200).send(result);
})

//PRUEBA
var archivo;
const storage = multer.diskStorage({
    destination:'uploads/',
    filename: function(req, file, cb){
        archivo = Date.now()+"."+mimeTypes.extension(file.mimetype);
        cb("", archivo);
    },
    nombre: archivo
});
const upload = multer({
    storage: storage
})
router.post('/files',upload.single('foto'), async(req, res)=>{
    console.log(req.body)
    console.log(archivo);
    /*let id = sessionStorage.getItem("id_usuario");
    console.log("ID: "+id)*/
    data = {
        nombre_objeto : req.body.nombre_objeto,
        estado: req.body.estado,
        descripcion : req.body.desc,
        precio : req.body.precio,
        contacto : req.body.contacto,
        id_usuario : req.body.id_usuario,
        id_categoria : req.body.categorias,
        nombre_imagen : archivo
    }
    
    try {
        result = await db.creaArticulo(data);
        //res.status(200).send("1");
                                    //aqui va la ubicación del archivo de inicio usuario
        res.sendFile(path.resolve('./public/index.html'));  
    } catch (error) {
        res.send("0");
    }
    
    //res.send(alert("Todo en orden."));
    //console.log(__dirname)
//    res.sendFile(__dirname+"/public/index.html")
    //console.log("./:", path.resolve('./storeCollector/public/index.html'));
    //res.sendFile(path.resolve('./public/index.html'));
})

module.exports = router;