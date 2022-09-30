const express = require('express');
const router = express.Router();
const Crud = require('./crud');

// aqui determino el nombre de la api que se va a crear
const crud = new Crud('proyecto'); 
// ruta que muestra el contenido de la api
router.get('/', async(req, res) =>
{
   const mensaje = await crud.getItem()
    res.json(mensaje)
});
//ruta para agregar contenido a la api
router.post('/', async(req, res) =>
{
    const nuevoelemento = req.body
    await crud.postItem(nuevoelemento)
    .then((data)=>{console.log(data);})
    .catch((err)=>{console.log(err);});
    res.redirect('/')
});
//ruta para modificar un elemento de la api
router.put('/', async(req, res) =>
{
    res.send(req.body)
});
//ruta para eliminar algun elemento de la api
router.delete('/', async(req, res) =>
{
    res.send(req.params)
});
//ruta que selecciona el nombre y muestra su informacion.
router.get('/:name', async(req, res) =>
{
    const filtro = await crud.getItem()
    const {name} = req.params;
    const mensaje =filtro.filter(item => item.name === name)
    res.send(mensaje)
});
module.exports = router;