// const fs = require('fs');
// console.log('START')
// fs.writeFileSync('./write1.txt', 'Hello Dreamers!');
// console.log('END')


// const fs = require('fs');

// console.log('********START************')
// fs.readFileSync('./write1.txt',(err, res)=>{
//     console.log(res.toString());
// });
// console.log('********END************')


const fsPromises = require('fs/promises');

console.log('********START************')
fsPromises.readFile('./write1.txt', {encoding:'utf-8'}).then(console.log);
console.log('********END************');