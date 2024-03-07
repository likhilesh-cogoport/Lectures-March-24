export function callAPI(url, options){
    const pr = fetch(url, options);
    return pr;
}