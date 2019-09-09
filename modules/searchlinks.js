 const path = require("path");

const opcLinks= (data) => {
    return new Promise ((resolve)=>{
        // let newArray= [];
        // let match;
        // let i = 0;
 1
        const linkRegex = new RegExp ("\[(.+)\"\"(https?.+)","gm");
        const links = linkRegex.test(data);
        console.log(links);
        console.log('MAAAAATCH', linkRegex.exec(data));
        console.log('Holi');
        while((match = linkRegex.exec(data)) !== null) {
            const newdata = {
            href: match[2],
            text: match[1],
            File:path.resolve()
            };
          i++;
          array.push(newdata);      
        };
        resolve(newArray);
        // console.log(links)
        // const whylinks = links.test(path);
        // // const resultLinks = doc.match(links);
        console.log(whylinks);
        console.log (resultLinks);
    });
}

module.exports = opcLinks;

