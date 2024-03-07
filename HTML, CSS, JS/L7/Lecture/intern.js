
// export function createOrder(fn){
//     console.log('creating order...');
//     // setTimeout(()=>fn('123'), 10000);
// }


// promise

// const age = 19;

// const pr = new Promise(function(resolve, reject){
//     if(age>18){
//         resolve()
//     }
//     else{
//         reject();
//     }
// });

// console.log(pr);


// export function createOrder(){
//     const pr = new Promise(function (res, rej){
//         console.log('creating order...');
//         // setTimeout(res, 10000, 'e123');
//         setTimeout(function(){
//             res('e123');
//         }, 1000);

//         setTimeout(function(){
//             rej('No items in the cart');
//         }, 2000);



//     });
//     return pr;
// }