let arr = [1,2,3,4];

function sum(a, rest){
    console.log(a, rest);
    let ans = 0;
    // only when rest is of type array
    if(Array.isArray(rest)){
        ans = rest.reduce((acc, elem)=>{
            return acc+elem;
        });
    }

    return ans;
}
let ans = sum(1, arr);
console.log(ans);
