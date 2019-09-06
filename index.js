const read= require('./modules/fe.js');
// const mdPath = require('./modules/path.js');
const argv=  process.argv;
const rutaArchivo =  argv[2];
// const stringArchivo = read;

module.exports = () => {
    // console.log("hola desde index")
    read(rutaArchivo);
    // mdPath (read);
    
};
