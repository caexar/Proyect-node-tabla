const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");

//los require sencillos se pueden simplificar
//const colors = require('colors');
require('colors');


//utilizamos este consol para limpiar la terminal
console.clear();

//te muestra la ubi 
//te muestra la consola de yagars, la cual te muestra los argumentos que tengas declarados arriba, opcion"b" y "l"
//console.log( argv);



//const base = 3;
crearArchivo(argv.b, argv.l, argv.c)
    .then(nombreArchivo => console.log(nombreArchivo.red, "Tabla creada".blue))
    .catch(err => console.log(err));
