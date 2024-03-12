// const fs = require('fs');
// const fsPromises = require('fs/promises');

// console.log('*****');
// async function readThisFile(){
//     const res = await fsPromises.readFile('./temp.txt',{encoding: 'utf-8'});
//     console.log(res);
//     return res;
// }
// console.log('*****');
// // readThisFile();
// const res = fs.readFileSync('./temp.txt',{encoding: 'utf-8'});
// console.log(res)
// console.log('*****');


// console.log("*****START*****");
// const fs = require('fs');
// const res = fs.readFileSync('./temp.txt');
// console.log(res);
// console.log("*****End*****");


// console.log("*****START*****");
// const fs = require('fs');
// fs.readFile('./temp.txt',{encoding: 'utf-8'},(err, res)=>{
//     console.log(res);
// });
// console.log("*****End*****");


// console.log("*****START*****");
// const fsPromises = require('fs/promises');
// fsPromises.readFile('./temp.txt',{encoding: 'utf-8'}).then(console.log).catch((err)=>{
//     console.log(err)
// });
// console.log("*****End*****");