let promedio = (nota_uno, nota_dos, nota_tres, callback) => {
    setTimeout(() => {
        let resultado = (nota_uno + nota_dos + nota_tres) / 3;
        //return resultado;
        callback(resultado);
    }, 0);
}

promedio(2, 3, 2, function (resultado) {
    console.log("promedio:"+resultado);
});

