import {callABPNewsAPI, callWeatherAPI} from './externalDeveloper.js'

// function makeDivChild(){
//     const div = document.createElement('div');
//     div.style = "display: block; width: 300px; margin:10px auto; padding:16px; background-color:yellow;";
//     return div;
// }

// function makeLinkChild(href, txt){
//     const link = document.createElement('a');
//     link.innerText = txt;
//     link.href = href;
//     link.target = "_blank";
//     return link;
// }

// function makeImageChild(src){
//     const img = document.createElement('img');
//     img.src = src;
//     img.style = "width:200px; margin:12px auto; display: block;"
//     return img;
// }

// function makeCard(obj){
//     const parent = makeDivChild();
//     const link = makeLinkChild(obj.l, obj.t);
//     const img = makeImageChild(obj.mi);
    
//     parent.appendChild(img);
//     parent.appendChild(link);
//     return parent;
// }

// function showCards(data){
//     for(let i=0; i<data.length; i++){
//         const grandparent = document.getElementById('root');
//         grandparent.style = "display: flex; flex-wrap:wrap; align-items: flex-start;";
//         const card = makeCard(data[i]);
//         grandparent.appendChild(card);
//     }
// }
// callABPNewsAPI(showCards)

function createCell(text, type='td'){
    const cell = document.createElement(type);
    cell.style = "border: 1px solid brown; padding: 4px 6px;";
    cell.innerText = text;
    return cell;
}

function createHeadRow(){
    const row = document.createElement('tr');
    row.appendChild(createCell('Day', 'th'));
    row.appendChild(createCell('Max Temp', 'th'));
    row.appendChild(createCell('Min Temp', 'th'));
    row.appendChild(createCell('Avg Temp', 'th'));    
    row.appendChild(createCell('Comments', 'th'));
    return row;
}

function createRow(data){
    const row = document.createElement('tr');
    const dateObj = new Date(data.datetime);
    const options={
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    }
    row.appendChild(createCell(dateObj.toLocaleDateString("en-US", options)));
    row.appendChild(createCell(data.tempmax));
    row.appendChild(createCell(data.tempmin));
    row.appendChild(createCell(data.temp));
    row.appendChild(createCell(data.description));
    return row;
}

function displayWeatherData(data){
    const days = data.days;
    console.log(days);

    const grandparent = document.getElementById('root');
    const table = document.createElement('table');
    table.style = "border: 1px solid brown; border-collapse: collapse;";

    table.appendChild(createHeadRow());
    for(let i=0; i<days.length; i++){
        table.appendChild(createRow(days[i]));
    }
    grandparent.appendChild(table);

}

callWeatherAPI(displayWeatherData);

// const apiCall = callWeatherAPI();
// console.log(apiCall);
// apiCall.then(
//     (data)=>{
//         console.log(apiCall);
//         displayWeatherData(data);
//     }
// ).catch((err)=>{
//     console.log("Error:",err)
// })