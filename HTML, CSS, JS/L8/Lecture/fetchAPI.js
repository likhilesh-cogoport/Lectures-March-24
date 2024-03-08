
export function callAPI(url, options){
    const pr = fetch(url, options);
    const data = pr.then((res)=>{
        return res.json();
    })
    return data;
}