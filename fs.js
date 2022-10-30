//importamos la clase fs (file sysem) con la cual podemos hacer usos de los archivos de lectura
const fs = require("fs");

//utilizamos este consol para limpiar la terminal
console.clear();

//la base sera el numero por el cual se multiplicara siempre
const base = 3;
//esta variable contendra la tabla de multiplicar
let salida = ``;

for (let i = 1; i <= 10; i++) {
    //con ayuda de las `nos facilitara el uso de variables`
    //\n para el salto de linea
    //+= para sumar auto "salida = salida + X"
    salida += `${base} x ${i} = ${base * i} \n`;
}
console.log(salida);

//la funcion writeFile es para escribir sobre un archivo 
//si el archivo señalado no existe esta lo creara
//sus requerimiento seran: `ubicacion del archivo`, variable a agregar "texto" y err
fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log(`la tabla-${base}.txt fue creada`);
})

//funccionamiento del .writeFileSync
//en caso de error es nesesario usar un try catch.
fs.writeFileSync(`tabla-${base}.txt`, salida);
console.log(`la tabla-${base}.txt fue creada`);