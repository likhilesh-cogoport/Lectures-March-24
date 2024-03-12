
// console.log("*****START*****");
// const fs = require('fs');
// const res = fs.readFileSync('./temp.txt', {encoding: 'utf8'});
// fs.writeFileSync(
//     './syncWrite.txt',
//     `Story: ${res.substring(0,14)} \n ${res}`, 
//     {encoding: 'utf8'},
// );
// console.log("*****End*****");


console.log("*****START*****");
const fsPromises = require('fs/promises');
fsPromises.readFile('./temp.txt', {encoding: 'utf8'}).then((res)=>{
    fsPromises.writeFile(
        './syncWrite.txt',
        `Story: ${res.substring(0,14)} \n ${res}`, 
        {encoding: 'utf8'},
    );
})

console.log("*****End*****");