// object
// const obj = {
//     name: 'Likhilesh',
//     rollNumber: 22,
//     print: function (){
//         console.log('Hello');
//         return "done";
//     },
//     address:{
//         city:'mbd',
//         state:'up'
//     },
// }

// obj.rollNumber = 'A123'

// console.log(obj.print());
// k = "name";
// console.log(obj[k])


// Array
// let arr = [1,2,3,'done']
// let arr = new Array(1,2,3,{
//     name:'lik',
//     age:10
// })

// console.log(arr.length)
// console.log(arr)
// let ans = arr.toString();
// console.log(ans)
// let nums = ans.split(',')
// console.log(nums[1])

// console.log(window.innerHeight)
// console.log(window.innerWidth)

// let x = prompt('your name')
// console.log(x)


// function multiply(a, b){
//     console.log(a*b);
// }
// let id;
// let i = 0;
// let id2;
// id = setInterval(() => {
//     i++;
//     console.log(i,'timeout')
//     if(i==2){
//         clearInterval(id2)
//     }
// }, 2000);

// id2 = setInterval(() => {
//     console.log('one sec')
// }, 1000);




// let el = document.getElementById('f_email')
// el.setAttribute('value', 'abc@gmail.com')










//create Element
// let el = document.createElement('h1');
// el.innerText = 'Hello !';

// let el2 = document.createElement('h1');
// el2.innerText = 'Hello 2 !';

// document.body.append(el)
// document.body.append(el2)

// document.getElementById('body').insertBefore(el2, document.getElementById('form'))


function validate(e){
    e.preventDefault();
    const name = e.target[0].value;
    const password = e.target[1].value;
    if(name.length <3){
        alert('Invalid Name');
    }
    if(password.length <8){
        alert('Invalid Password');
    }
}

function isSubmittable(e){
    const name = e.target.value;
    console.log(name);
    if(name.length>3){
        document.querySelector('button').disabled = false;
    }
}













