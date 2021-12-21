
function operacion(numA: number,operador: string,numB: number){

    const myPromise = new Promise((resolve, reject) => {  

        let resultadoCalculo;
        let error: string = "Error en calculo"
        
        if(operador == "suma") {    

           resultadoCalculo = import(`./${operador}`)
            .then(op => op.operador(numA,numB));    
            resolve(resultadoCalculo);
        }
        if(operador == "resta") {    

            resultadoCalculo = import(`./${operador}`)
            .then(op => op.operador(numA,numB));  
            resolve(resultadoCalculo);
            
        } else {    
            reject(error);  
        }
    })

    myPromise.then((resultado) => { 
        console.log(resultado);
    }).catch((error) => { 
        console.log(error);
    });

};


function operaciones(){
    let numA: number = 8;
    let numB: number = 3;
    const operador: string = "suma";
    operacion(numA,operador,numB);
    console.log("Finalizado");
};

operaciones();






