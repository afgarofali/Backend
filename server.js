const express = require('express');
const app = express();
const PORT = 8080

const Contenedor = require('./contenedor');

cont = new Contenedor('productos.json');


const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))



app.get('/',(request,response)=>{
    response.send("hola mundo")
});

app.get('/productos',(request,response)=>{

    cont.getAll();
    response.send("respues de productos")
});


app.get('/productoRandom',(request,response)=>{
    response.send("hola mundo")
});



const listener = app.listen(process.env.PORT, () => {
console.log("puerto escuchando" + listener.address().port);
});
