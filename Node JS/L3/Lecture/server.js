const http = require('node:http');
const fsPromises = require('fs/promises');
const fs = require('fs');
const url = require('node:url');

const productsPageString = fs.readFileSync('./HTML Pages/products-page.html', {encoding: 'utf-8'}); 
let productCardString = fs.readFileSync('./HTML Pages/product-card.html', {encoding: 'utf-8'}); 

const dataString = fs.readFileSync('./dummy-products.json', {encoding: 'utf-8'});
// const dataObj = JSON.parse(dataString);
// const products = dataObj.products;
const { products:productsArray } = JSON.parse(dataString);

let cards = productsArray.map((elem, idx)=>{
    let card = productCardString;
    card = card.replace('{#_title_#}',elem.title);
    card = card.replace('{#_thumbnail_#}',elem.thumbnail);
    card = card.replace('{#_description_#}',elem.description);
    card = card.replace('{#_id_#}',idx);
    return card;
})
cards = cards.join('\n');
const productsPageHTMLString = productsPageString.replace('{#_cards_#}', cards);


const app = http.createServer(async (req, res)=>{
    //logs
    console.log("request received"); 
    await fsPromises.appendFile('./logs.txt',`${new Date().getTime()} : ${req.url}\n`);

    //router
    const route = req.url;
    const {pathname, query} = url.parse(route, true);

    switch(pathname){
        case '/': {
            res.end('<h1 style="color: blue;">Hello Dreamers!</h1>');
            break;
        }
        case '/products': {
            console.log(query);
            if( 'id' in query){
                res.end(JSON.stringify(productsArray[query.id]));
            }
            else{
                res.end(productsPageHTMLString);
            }
            break;
        }
        case '/help': {
            res.end('<h1 style="color: green;">Request Noted!</h1>');
            break;
        }
        case '/about': {
            res.end('<h1 style="color: brown;">Myself Likhilesh</h1>');
            break;
        }
        default: {
            res.writeHead(404, {
                'Content-Type': 'text/html',
            })
            res.end('<h1 style="color: red;">Oops... Page not found!</h1>');
            break;
        }
    }
});

app.listen(1400, ()=>{
    console.log('**********Server Up and Running **************')
});