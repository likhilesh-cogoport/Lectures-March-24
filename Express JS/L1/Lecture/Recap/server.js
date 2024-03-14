const http = require('node:http');
const fsPromises = require('fs/promises');
const fs = require('fs');
const url = require('node:url');

const data = fs.readFileSync('./dumy.json', {encoding: 'utf8'});
const dataObj = JSON.parse(data);
const products = dataObj.products;
const firstProduct = products[1];
let page;
fs.readFile('./index.html', (err, data)=>{
    page = data.toString();
    page = page.replace('#title#',firstProduct.title);
    page = page.replace('#subtile#','This is our world');
});

const app = http.createServer(async (req, res)=>{
   const route = req.url;
   if(route=='/'){
    res.end(page);
   }
   else if(route=='/products'){
    res.end('Welcome Home');
   }
   else if(route=='/help'){
    res.end('Welcome to help center');
   }
   else{
    res.end('Page NOT found');
   }
});

app.listen(1400, ()=>{
    console.log('**********Server Up and Running **************')
});