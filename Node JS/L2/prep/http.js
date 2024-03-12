// const http = require('node:http'); 

// const myServer =  http.createServer((req, res)=>{
//     console.log('req received');
//     console.log(req.headers);
//     // res.writeHead('201');
//     res.end('<h1>Hare Krishna!</h1>');
// })

// myServer.listen(1400, ()=>{
//     console.log("Server Started");
// });




const http = require('node:http'); 
const fsPromises = require('node:fs/promises'); 

const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
};

const myServer =  http.createServer(async (req, res)=>{
    const date = new Date();
    const dateString = date.toLocaleString('en-US', options)
    await fsPromises.appendFile('./serverLogs.txt', `${dateString} : ${req.url}\n`);
    switch(req.url){
        case '/':{
            res.end('<h1>Hare Krishna! Hare Ram!</h1>');
            break;
        }
        case '/about':{
            res.end('<h1>Likhilesh Balpande</h1>');
            break;
        }
        case '/help':{
            res.end('<h1>Noted!</h1>');
            break;
        }
        default:{
            res.end('<h1 style="color:red">INVALID Request</h1>');
        }
    }
    
})

myServer.listen(1400, ()=>{
    console.log("Server Started");
});