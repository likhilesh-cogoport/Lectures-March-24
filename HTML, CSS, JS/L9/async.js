// const pr  = new Promise((res, rej)=>{
//     res('Done');
// });

// pr.then((res)=>{
//     console.log(res);
// });

// await cannot be used inside non-async functions
// console.log('Start');

// async function apiCall(){
//     const url = 'https://api.github.com/users/likhilesh-cogoport'
//     const res = fetch(url);
//     console.log('Api call initiated');
//     res.then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     });
//     console.log('Api call successful');
// }
// apiCall();

// console.log('End');





// //USING ASYNC AWAIT

// console.log('Start');

// async function apiCall(){
//     return new Promise((res)=>res('Done'));
// }
// console.log(res);
// const res = apiCall().then((result)=>{
//     console.log(result);
// });
// console.log('END');




//USING ASYNC AWAIT

console.log('Start');

async function apiCall(){
    const url = 'https://api.github.com/users/likhilesh-cogoport'
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

apiCall();
console.log('END');
