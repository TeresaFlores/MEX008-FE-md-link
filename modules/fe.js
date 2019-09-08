const fs=require('fs');

const read= (rutaArchivo) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(rutaArchivo,'utf8', (error,data) => {
            if (error) {
                // console.log("NO PODEMOS LEER EL ARCHIVO. NO VALIDO");
                reject(error);
            } else {
                console.log(data);
                console.log('TU ARCHIVO ES VALIDO')
                resolve(data);
            }
        });
    });
    
};

module.exports=read;

// const readSync= (rutaArchivo) => {
//         try {
//             const readRoutes = fs.readFileSync(rutaArchivo,'utf8');
//             return readRoutes;
//         }catch (err) {
//             throw err;
//         }
// };
