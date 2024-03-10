// let arr = [10,22,31,41];

// function func(elem){
//     return 2+elem;
// }

// const res = arr.filter(func);

// console.log(res);





// let arr1 = [10,22,-2,-3];

// function func(elem){
//     return 2+elem;
// }

// const res1 = arr1.filter(func);

// console.log(res1);


// let arr = [10,22,31,41];
// for(let elem of arr){
//     console.log(elem);
// }
// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// for(let elem in arr){
//     console.log(elem);
// }


// let obj = {
//     a:1,
//     2:'b',
//     3:"str",
//     10:11,
//     11: 10,
//     c:2,
// }

// for(let elem of obj){
//     console.log(elem);
// }

// ****
// for(let i =0; i<obj.length; i++){
//     console.log(obj[i]);
// }

// for(let elem in obj){
//     console.log(elem, obj[elem]);
// }


// let arr1 = [10,22,31,41];
// let arr2 = [10,22,31,41];

// SPREAD OPERATOR
// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// let obj1 = {name:"lik", age:10, city: 'nagpur'};
// let obj2 = {a:'b', name:'Aryan'};

// const arr3 = {...obj2, ...obj1};

// console.log(arr3);


// REST OPERATOR
// function sum(...arr){
//     return arr.reduce((acc, elem)=>{
//         return acc+elem;
//     })
// }

// const ans = sum(1,2,3,4, 2, 6);

// console.log(ans)

// let flag = -1;
// const ans = flag ? 'yes' : 10; 
// console.log(ans)


// MUTABILITY
// let arr = [1,2,3];
// let arr1 = arr;

// if(arr == arr1){
//     console.log('Yes');
// }
// else{
//     console.log('No');   
// }

// arr1[2]= 'Name';

// console.log(arr);




// MUTABILITY
let arr = [1,2,3];
// let arr1 = [...arr];
// let arr1 = arr.filter((elem)=>true);
// let arr1 = arr.map((elem)=>elem);
let arr1 = arr.reduce((acc, elem)=>{
    acc.push(elem);
    return acc;
}, []);

if(arr == arr1){
    console.log('Yes');
}
else{
    console.log('No');   
}

console.log(arr)
console.log(arr1)





// let a = [1, 2, 3];
// let b = a;
// if(b==a){
//     console.log('yes1')
// }

// a = [2, 3, 4];
// if(b==a){
//     console.log('yes2')
// }


