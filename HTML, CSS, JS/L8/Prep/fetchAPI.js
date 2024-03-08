export function callAPI(url,options){
    const pr = fetch(url,options).then((res)=>{
        return res.json();
    });
    return pr;
}