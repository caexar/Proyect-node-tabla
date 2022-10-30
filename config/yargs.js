const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'la base de la tabla de multiplicar'  
    })
    .option('c', {
        alias: 'cantidad',
        type: 'number',
        demandOption: true,
        describe: 'la cantidad de la tabla de multiplicar'  
    })          
    .option('l', {
        alias: 'listar',
        type: 'boolean', 
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .check((argv, options) => {
        if(isNaN(argv.c)){
            throw 'la cantidad tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;

    