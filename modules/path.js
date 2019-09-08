const path = require('path');

// const mdPath=( read) => {
    
//     // reciba la data 
//     return new Promise ((resolve, reject) => {
//         path.extname(read.md,'utf8',(error,data)=>{
//             if (error) {
//                 console.log("NO ES UN ARCHIVO MD");
//                 // return error;
//                 reject(error);
//             } else {
//                 //return data;
//                 // console.log(data);
//                 console.log('SI ES MD')
//                 resolve(data)
//             }  
//         });

//     }); 

// };


const mdPath=(path) => {
    path.extname(path) === '.md' ? true : false
       
};

module.exports = mdPath;


