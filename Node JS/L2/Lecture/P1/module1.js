const add = (...args)=>{
    const ans = args.reduce((acc, elem)=>acc+elem);
    console.log(ans);
}

const sub = (...args)=>{
    const ans = args.reduce((acc, elem)=>acc-elem);
    console.log(ans);
}

// module.exports = {
//     add, 
//     sub,
//     name:'basic calculation functions',
//     // multiple: (a,b)=>{
//     //     const ans = a*b;
//     //     console.log(ans);
//     // }
//     multiply(a,b){
//         console.log(a*b);
//     }
// }

module.exports = [
    add, 
    sub,
    'basic calculation functions',
    // multiple: (a,b)=>{
    //     const ans = a*b;
    //     console.log(ans);
    // }
    (a,b)=>{
        console.log(a*b);
    }
];