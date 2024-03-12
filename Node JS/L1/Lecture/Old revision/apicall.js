url = "https://api.github.com/users/likhilesh-cogoport";

async function apiCall(){
    // fetch(url)
    //     .then((res)=>{ return res.json(); })
    //     .then((data)=>{ console.log(data)});
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

apiCall();