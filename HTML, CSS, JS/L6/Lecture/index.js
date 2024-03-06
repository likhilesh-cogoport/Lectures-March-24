
// //anonymous function assignment / expression
// let a = function (){
//     console.log('hello')
// }

// //name function assignment / expression
// let b = function call(){
//     console.log('hello')
// }







// function prettyP(a, b, fn){
//     console.log('**************');
//     console.log('\t', fn(a, b));
//     console.log('**************');
// }

// function multiply(a, b){
//     return a*b;
// }

// function sum(a, b){
//     return a+b;
// }

// function subtract(a, b){
//     return a-b;
// }

// prettyP(2, 4, multiply)
// prettyP(3, 6, sum)
// prettyP(3, 6, subtract)

// function check(a,b){
//     console.log(a,b);
// }

// let arr = [11,22,33,44];

// let ans = arr.reduce(
//     function (a,b,c,d){
//         return a+b+c;
//     },
//     0
// );

// let ans2 = arr.reduce(callback, initialValue)

// console.log(ans)

// function heavyCalculation(a){
//     let i = 0;
//     console.log(i);
//     while(i<1000000000){
//         i++;
//     }
//     console.log(i);
// }


// function prettyP(a, b, fn){
//     console.log('**************');
//     console.log('\t', fn(a, b));
//     console.log('**************');
// }

// function multiply(a, b){
//     return a*b;
// }

// setTimeout(heavyCalculation, 0);
// console.log('START');
// console.log('END');
// console.log('Done')




function hello(){
    console.log('event occurred')
}

const el = document.querySelector('div');
el.addEventListener('scroll', hello);









