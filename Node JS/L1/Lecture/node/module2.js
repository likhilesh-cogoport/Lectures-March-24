let counter = 0;
const decrement = ()=>{
    counter--;
    console.log(counter);
}

const subtract = (...arr)=>{
    const ans = arr.reduce((acc, elem)=>{
        return acc - elem;
    })
    console.log(ans);
}

module.exports = {
    subtract, 
    decrement,
};