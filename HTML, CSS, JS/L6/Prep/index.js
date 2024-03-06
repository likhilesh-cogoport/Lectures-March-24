// function showResult(result){
//     console.log("*************************")
//     console.log(`The result of the calculation is: ${result}`)
//     console.log("*************************")
// }

// function calculateSum(a, b){
//     return a+b;
// }
// function calculateArea(a, b){
//     return a*b;
// }

// showResult(calculateSum(2,5));
// showResult(calculateArea(2,5));






// function showResult(calculation, result){
//     console.log("*************************")
//     console.log(`The result of the ${calculation.toUpperCase()} is: ${result}`)
//     console.log("*************************")
// }

// function calculateSum(a, b){
//     return a+b;
// }
// function calculateArea(a, b){
//     return a*b;
// }

// showResult('sum', calculateSum(2,5));
// showResult('area', calculateArea(2,5));








// function showResult(calculation, result){
//     console.log("*************************")
//     console.log(`The result of the ${calculation.toUpperCase()} is: ${result}`)
//     console.log("*************************")
// }

// function calculateSum(a, b){
//     showResult('sum', a+b);
// }
// function calculateArea(a, b){
//     showResult('area', a*b);
// }

// calculateSum(2,5);
// calculateArea(2,5);






// function showResultT1(calculation, result){
//     console.log("*************************")
//     console.log(`The result of the ${calculation.toUpperCase()} is: ${result}`)
//     console.log("*************************")
// }

// function showResultT2(calculation, result){
//     console.log("-------------------------")
//     console.log(`Result of ${calculation.toUpperCase()} = ${result}`)
//     console.log("-------------------------")
// }

// function calculateSum(a, b, fn){
//     fn('sum', a+b);
// }
// function calculateArea(a, b, fn){
//     fn('area', a*b);
// }

// calculateSum(2,5,showResultT1);
// calculateArea(2,5,showResultT2);


// console.log('start', new Date())

// function heavyCalculation(){
//     let i = 0;
//     while(i<100000000){
//         i++;
//     }
//     console.log(i, new Date());
// }
// // setTimeout(heavyCalculation, 10000);


// console.log('end', new Date())
// heavyCalculation()

// let heading = document.getElementsByTagName('h1')[0];
// heading.addEventListener('click', function(){
//     console.log('heading clicked');
// });

const fetchPromise = fetch(
    "https://api.cogoport.com/public_location/list_locations?filters=%7B%22status%22%3A%22active%22%2C%22type%22%3A%5B%22seaport%22%5D%2C%22q%22%3A%22delhi%22%7D&preference=%7B%22seaport%22%3Atrue%2C%22service_type%22%3A%22fcl_freight%22%7D&includes=%7B%22default_params_required%22%3Atrue%7D",
    {
        headers: {
            'Access-Control-Allow-Origin':'*'
        }
    }
  );

fetchPromise.then((res)=>{
    res.json().then((data)=>{
        console.log(data)
    })
})