const http = require('node:http');
const fsPromises = require('fs/promises');
const cnt = require('./module1.js');

const app = http.createServer(async (req, res)=>{
    console.log("request received"); 
    cnt();
    const date = (new Date()).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    await fsPromises.appendFile('./logs.txt',`Request : ${date} : route : ${req.url}\n`);
    console.log(req.url);
    res.end('<h1 style="color: blue;">Hello Dreamers!</h1>');
});

app.listen(1400, ()=>{
    console.log('**********Server Up and Running **************')
});