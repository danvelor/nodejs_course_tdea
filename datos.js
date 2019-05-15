//import estudiante1 from './calculo.js';
const { estudiante, promedio } = require('./calculo');
const fs = require('fs');
//let notas;
console.log("Nombre: " + estudiante.nombre);
console.log("Nota Promedio: " + promedio(estudiante.notas.ingles, estudiante.notas.matematicas, estudiante.notas.programacion));

const { nombre, edad, notas: { matematicas, ingles, programacion } } = estudiante;

console.log("Nota Promedio: " + promedio(ingles, matematicas, programacion));

if (true) {
    const FileCreate = () => {
        texto = 'El estudiante ' + nombre + '\n' +
            'tiene un promedio de ' + promedio(matematicas, ingles, programacion)
        fs.writeFile('promedio.txt', texto, (err) => {
            if (err) throw (err);
            console.log('se ha creado el archivo');
        })
    };
    FileCreate();
}

