const read= require('./modules/fe.js');
const mdPath = require('./modules/path.js');
const argv=  process.argv;
const rutaArchivo =  argv[2];
// const stringArchivo = read;

module.exports = (path) => {

    // if (read (rutaArchivo) == false){
    //    console.log("NO PODEMOS LEER EL ARCHIVO. NO VALIDO");
    //    return 'NO PODEMOS LEER EL ARCHIVO. NO VALIDO 2';  
    // }
    // if (path == null){
    //   console.log('No es un archivo MD');
    //   return 'No es un archivo MD' ;
    // }
     
    read(rutaArchivo);
    //  mdPath (read);
    
};
