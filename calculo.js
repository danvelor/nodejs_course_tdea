let estudiante = {
    nombre: 'Juan',
    edad: 67,
    notas: {
        matematicas: 3,
        ingles: 4,
        programacion: 5
    }
};

let promedio = (nota_uno, nota_dos, nota_tres)=>(nota_uno+nota_dos+nota_tres)/3;

module.exports = {
    estudiante,
    promedio
}