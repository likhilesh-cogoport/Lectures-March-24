console.log('Start')
function CBT(){
    console.log('Timeout');
}
setTimeout(CBT,0);
function mPF(res, rej){
    setTimeout(()=>res('done'),0);
    console.log('Promise line 7');
}
const pr = new Promise(mPF);
function aP(res){
    console.log(res);
}
setTimeout(()=>console.log('**'),0);
pr.then(aP);
console.log('End')