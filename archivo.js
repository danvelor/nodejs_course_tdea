const opciones = {
    matematicas: {
        //default: 0,
        demand: true,
        alias: 'm'
    },
    ingles: {
        //default: 0,
        demand: true,
        alias: 'i'
    },
    programacion: {
        //default: 0,
        demand: true,
        alias: 'p'
    }
}

const argv = require('yargs')
    .command('promedio', 'Calcular el promedio', opciones)
    .argv

console.log('m:' + argv.m + ' i:' + argv.i + ' p:' + argv.p);
console.log('m:' + argv.m + ' i:' + argv.i + ' p:' + argv.p);
console.log('notas:' +argv.notas);