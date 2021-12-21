class Contenedor (nombre){

    save(objeto){

        //recibe un objeto, lo guarda en el archivo y devuelve el id asignado
    }

    getById(numeroId){

        //recibe un id y devuelve el objeto con ese id o null
    }


    getAll(){
        //devuelve un array con los objetos presentes en el archivo
    }


    deleteById(numeroId){
        //elimina del archivo el objeto con el id buscado
    }


    deleteAll(){
        // eliimina todos los objetos del archivo
    }
}


//crear productos.txt
class Productos{
    
    constructor(title,price,thumbnail){
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
    }
}
