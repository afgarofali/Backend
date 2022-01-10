const express = require('express');
const app = express();
const PORT = 3000

const Contenedor = require('./contenedor');

cont = new Contenedor('productos.json');


const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
 


app.get('/',(request,response)=>{
    response.send("API Backend CH")
});

app.get('/productos',async(request,response)=>{
    const productos = await cont.getAll()

        try {
            console.log("ok");
            response.send(await cont.getAll())
        }
        catch(err){
            console.log("Error en guardado", err)
        }
        response.send(await cont.getAll())
});


app.get('/productoRandom',async(request,response)=>{
  
            try {
                console.log("ok2");
                let rnd = Math.floor(Math.random() * (3 - 0)) + 0
                response.send(await cont.getById(rnd))
            }
            catch(err){
                console.log("Error en guardado", err)
            }
});



const listener = app.listen(process.env.PORT, () => {
console.log("puerto escuchando" + listener.address().port);
});








