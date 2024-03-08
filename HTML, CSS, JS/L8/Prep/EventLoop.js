setTimeout(function() {
    console.log('timeout ended');
},0);

const Pr = new Promise(function(resolve, reject) {
    console.log('Inside Promise');
    resolve('Promise done');
});

console.log('Start')


Pr.then((val)=>console.log(val));

console.log('End')