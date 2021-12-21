function operacion(numA, operador, numB) {
    var myPromise = new Promise(function (resolve, reject) {
        var resultadoCalculo;
        var error = "Error en calculo";
        if (operador == "suma") {
            resultadoCalculo = Promise.resolve().then(function () { return require("./".concat(operador)); }).then(function (op) { return op.operador(numA, numB); });
            resolve(resultadoCalculo);
        }
        if (operador == "resta") {
            resultadoCalculo = Promise.resolve().then(function () { return require("./".concat(operador)); }).then(function (op) { return op.operador(numA, numB); });
            resolve(resultadoCalculo);
        }
        else {
            reject(error);
        }
    });
    myPromise.then(function (resultado) {
        console.log(resultado);
    })["catch"](function (error) {
        console.log(error);
    });
}
;
function operaciones() {
    var numA = 8;
    var numB = 3;
    var operador = "suma";
    operacion(numA, operador, numB);
    console.log("Finalizado");
}
;
operaciones();
