var express = require('express');
const res = require('express/lib/response');
var db = require("../BD/conexion");
var router = express.Router();

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
router.post('/pruebaPost', async(req, res)=>{
    try {
        result = await db.prueba(req.body);
        res.status(200).send("1");
    } catch (error) {
        res.send("0");
    }
})

module.exports = router;