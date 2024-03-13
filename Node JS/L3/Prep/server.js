const http = require('node:http');
const fs = require('fs');
const fsPromises = require('fs/promises');
const url = require("url");

let oneLinerJoke = require('one-liner-joke');

// products template
const productCardTemplate = fs.readFileSync('./product-card.html', {encoding: 'utf-8'});

// products card
const productsString = fs.readFileSync('./dummy-products.json', {encoding: 'utf-8'});
const products = JSON.parse(productsString).products;
const cards = products.map((elem, idx)=>{
    let template = productCardTemplate;
    template = template.replace('{#_title_#}',elem.title);
    template = template.replace('{#_thumbnail_#}',elem.thumbnail);
    template = template.replace('{#_description_#}',elem.description);
    template = template.replace('{#_idx_#}',idx);
    return template;
});

// products page
const productsPageTemplate = fs.readFileSync('./products-page.html', {encoding: 'utf-8'});
const productsPage = productsPageTemplate.replace('{#_products_#}',cards.join('\n'));

const app = http.createServer(async (req, res)=>{
    console.log("request received");
    await fsPromises.appendFile('./logs.txt',`${new Date().getTime()} : ${req.url}\n`);
    
    //ROUTING
    const {query, pathname} = url.parse(req.url, true);
    switch(pathname){
        case '/': {
            res.end('<h1 style="color: blue;">Hello Dreamers!</h1>');
            break;
        }
        case '/products': {
            console.log(query);
            if('id' in query && query.id.length > 0){
                const respData = await getSingleProductData(query.id);
                console.log(respData);
                res.end(JSON.stringify(respData));
            }
            else{
                let newPage = productsPage;
                newPage = newPage.replace('{#_joke_#}',oneLinerJoke.getRandomJoke().body);
                res.end(newPage);
            }
            break;
        }
        case '/about': {
            res.end('<h1 style="color: brown;">I am Likhilesh</h1>');
            break;
        }
        case '/help': {
            res.end('<h1 style="color: green;">Request Noted!</h1>');
            break;
        }
        default: {
            res.writeHead('404',{
                'content-type':'text/html',
                'my-own-header':'Samurai ',
            });
            res.end('<h1 style="color: red;">OOPS...Page not found</h1>');
        }
    }
});

app.listen(1400, ()=>{
    console.log('**********Server Up and Running **************')
});

async function getSingleProductData(id){
    const singleProduct = products.filter((_, idx)=>{
        return (idx == id);
    })
    return singleProduct;
}
