import {callAPI} from './fetchAPI.js';

// call API
const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mumbai/?key=SUWENMJDCG3P8Y7E9M4Y22GS4';
const options = {
    headers:{
        'Access-Control-Allow-Origin': '*',
    }
};

const request = callAPI(url, options);
request.then((rs)=>{
    const obj = rs.json();
    obj.then((data)=>{
        renderUI(data);
    });
})

// rendering

function renderUI(data){
    const days = data.days;
    console.log(days);

    const parent = document.getElementById('root');
    const table = createTable(days);
    parent.appendChild(table);
}

function createTable(days){
    const table = document.createElement('table');
    const headingRow = createHeadingRow();
    table.appendChild(headingRow);
    for(let i = 0; i < days.length; i++){
        const row = createRow(days[i]);
        table.appendChild(row);
    }
    table.style='border: 1px solid brown; border-collapse: collapse';
    return table;
}

function createHeadingRow(){
    const row = document.createElement('tr');
    createCell('Date', row, 'th');
    createCell('Min Temp', row, 'th');
    createCell('Max Temp', row, 'th');
    createCell('Avg Temp', row, 'th');
    createCell('Description', row, 'th');
    return row;
}

function convertTemp(fr){
    const ans = (fr - 32) * (5/9); 
    return Math.trunc(ans);
}

function createRow(obj){
    console.log(obj)
    const row = document.createElement('tr');
    createCell(obj.datetime, row);
    createCell(convertTemp(obj.tempmin), row);
    createCell(convertTemp(obj.tempmax), row);
    createCell(convertTemp(obj.temp), row);
    createCell(obj.icon.split('-').join(' ').toUpperCase(), row);
    return row;
}

function createCell(txt, row, type='td'){
    const cell = document.createElement(type);
    cell.innerText = txt;
    cell.style='border: 1px solid brown; padding: 4px 6px;';
    row.appendChild(cell);
}



