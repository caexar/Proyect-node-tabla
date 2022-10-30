//importamos la clase fs (file sysem) con la cual podemos hacer usos de los archivos de lectura
const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
require('colors');

//---------------------------------------------//
//1ra forma para trasformar en una promesa (use returm new Promese)
const crearArchivo2 = (base= 5, l) => {
    
    return new Promise((resolve, rejects) => {

        let salida = ``;
    
        for (let i = 1; i <= 10; i++) {
            //con ayuda de las `nos facilitara el uso de variables`
            //\n para el salto de linea
            //+= para sumar auto "salida = salida + X"
            salida += `${base} x ${i} = ${base * i} \n`;
        }
        //console.log(salida);
        
        //funccionamiento del .writeFileSync
        //en caso de error es nesesario usar un try catch.
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        //al estar solo (l) es equivalente a si existe o true
        if(l){
            console.log("========================");
            console.log(`   Tabla del: ${base}`.yellow   );
            console.log("========================");
            `tabla-${base}.txt`
            //console.log(salida);
        }
        //creo un if solo paq se vea mas bonito, se puede usar el console.log(salida) de arriba y dara lo mismo
        (l)
        ?resolve(console.log(salida))
        :rejects("no esta el listar");
    });



}

//---------------------------------------------------------------------------------------------------//
//2da forma para trasformarlo en una promesa con uso de async(err use try catch) (entre comilla mejor)
const crearArchivo = async (base = 5, listar = false, cantidad = 20) => {
    
        try {


            let salida = ``;
            let salidaColorMostrar = ``;
            
            for (let i = 1; i <= cantidad; i++) {
                //con ayuda de las `nos facilitara el uso de variables`
                //\n para el salto de linea
                //+= para sumar auto "salida = salida + X"
                salida += `${base} x ${i} = ${base * i} \n`;
                //se crea una 2da salida con los colores agregados, no se ponen el mismo porq no se puede leer el archivo
                salidaColorMostrar += `${base} ${"x".green} ${i} ${"=".green} ${base * i} \n`;
            }

            //se crea un if en el cual si existe listar mostrara toda la tabla
            if(listar ){
                console.log("========================");
                console.log(`   Tabla del: ${base}`   );
                console.log("========================");
                //salida de la tabla
                console.log(salidaColorMostrar);
            }
            //console.log(salida);
            
            //funccionamiento del .writeFileSync
            //en caso de error es nesesario usar un try catch.
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            //este return es el encargado de que el archivo sea creado en el archivo amin
            return `tabla-${base}.txt`;
            
        } catch (err) {
            throw err;
        }

}


//module es un objeto global que existe en node.js
module.exports = {
    //por ema scrp 6 es inrelevante tener una funcion con el mismo nombre de una variable
    // funcion:funcion === funcion
    crearArchivo
}