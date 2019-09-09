 
const path = require("path");

const searchLinks= (Object) => {
    return new Promise ((resolve)=>{
        let array= [];
        let match;
        let i = 0;
        const  doc = path;
        const links = new RegExp ("(https?.+)","gm");

        while((match = links.exec(Object)) !== null) {
            const newObject = {
            href: match[2],
            text: match[1],
            File:path.resolve()
            };
          i++;
          array.push(newObject);      
        };
        resolve(array);
        console.log(array)
        // const whylinks = links.test(doc);
        // const resultLinks = doc.match(links);
        // console.log(whylinks);
        // console.log (resultLinks);
    });
}

module.exports = searchLinks;

