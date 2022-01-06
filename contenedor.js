const express = require('express');
const app = express();

const fs = require('fs');

class Contenedor {


    constructor( filename ) {
        this.filename = filename;
    }


    save(objeto){
        let id = 0;
        

        fs.promises.readFile("./productos.txt", "utf-8")
            .then(contenido => {
                let contenidostr = JSON.parse(contenido);
                //extrae el ultimo id
                let length = contenidostr.length - 1;
                id = contenidostr[length].id + 1;
                objeto.id = id;
                console.log("id:",id)
                contenidostr.push(objeto);
                let data = JSON.stringify(contenidostr);
                //guarda el objeto nuevo en el archivo
                async function escribir(){
                    try {
                        await fs.promises.writeFile('./productos.txt',data);
                        console.log("Guardado");
                    }
                    catch(err){
                        console.log("Error en guardado", err)
                    }
                }
                escribir();
                
            })
        .catch(err =>{
            console.log("Error de lectura",err)
        }) 
        
    }



    getAll(){
        fs.promises.readFile("./productos.txt", "utf-8")
            .then(contenido => {
                let contenidostr = JSON.parse(contenido);
                console.log(contenidostr);
                return contenidostr;
            })
            .catch(err =>{
                console.log("Error de lectura",err)
            })
    }


    getById(idBuscado){
        fs.promises.readFile("./productos.txt", "utf-8")
        .then(contenido => {
            let contenidostr = JSON.parse(contenido);
            
            for (let index = 0; index < contenidostr.length; index++) {
                if (contenidostr[index].id == idBuscado) {
                    console.log(contenidostr[index])
                }
                
            }
        })
        .catch(err =>{
            console.log("Error de lectura",err)
        })
    }

    deleteAll(){
        async function vaciar(){
            try {
                await fs.promises.writeFile('./productos.txt',"");
                console.log("Borrado");
                
            }
            catch(err){
                console.log("Error en borrado", err)
            }
        }
        vaciar();
    }


    deleteById(idBorrado){
        fs.promises.readFile("./productos.txt", "utf-8")
        .then(contenido => {
            let contenidostr = JSON.parse(contenido);
            
            for (let index = 0; index < contenidostr.length; index++) {
                if (contenidostr[index].id == idBorrado) {
                    contenidostr.splice(index,1);
                }
            }
            let data = JSON.stringify(contenidostr);
            async function escribir(){
                try {
                    await fs.promises.writeFile('./productos.txt',data);
                    console.log("Borrado y guardado");
                }
                catch(err){
                    console.log("Error en guardado", err)
                }
            }
            escribir();
        })
        .catch(err =>{
            console.log("Error de lectura",err)
        })
    }
}



module.exports = Contenedor;

const PORT = 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))


app.get('/', (req, res) => {
    res.send({ mensaje: 'hola mundo' })
 })
 