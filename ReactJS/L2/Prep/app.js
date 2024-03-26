// const parent = document.getElementById("root");
// const h1 = document.createElement("h1");
// h1.innerText = "Hello from Javascript!";
// parent.appendChild(h1);

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);
// const h1 = React.createElement("h1", {title: 'Mera Code!'}, "Hello from React!");
// const li1 = React.createElement("li", {className: 'li-item'}, "item 1");
// const li2 = React.createElement("li", {}, "item 2");
// const li3 = React.createElement("li", {className: 'li-item', title: 'Dairy', a:'b'}, "item 3");
// const ol = React.createElement("ol", {}, [li1, li2, li3]);
// const extraDiv = React.createElement("div", {}, [h1, ol]);
// root.render(extraDiv);



// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);
// const h1 = React.createElement("h1", {title: 'Mera Code!'}, "Hello from React!");
// const li1 = React.createElement("li", {className: 'li-item'}, "item 1");
// const li2 = React.createElement("li", {}, "item 2");
// const li3 = React.createElement("li", {className: 'li-item', title: 'Dairy', a:'b'}, "item 3");
// const ol = React.createElement("ol", {}, [li1, li2, li3]);
// const extraDiv = React.createElement("div", {}, [h1, ol]);
// root.render(extraDiv);


// import {createElement as ce} from 'react';
// import ReactDOM from 'react-dom/client';

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);
// const h1 = ce("h1", {title: 'Mera Code!'}, "Hello from React!");
// const li1 = ce("li", {className: 'li-item'}, "item 1");
// const li2 = ce("li", {}, "item 2");
// const li3 = ce("li", {className: 'li-item', title: 'Dairy', a:'b'}, "item 3");
// const ol = ce("ol", {}, [li1, li2, li3]);
// const extraDiv = ce("div", {}, [h1, ol]);
// root.render(extraDiv);


import {createElement as ce} from 'react';
import ReactDOM from 'react-dom/client';

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
const h1 = <h1>Hello from React</h1>
const li1 = <li>item 1</li>
const li2 = <li>item 2</li>
const li3 = <li>item 3</li>
const ol = <ol>{li1}{li2}{li3}</ol>
const extraDiv = <div>{h1}{ol}</div>
root.render(extraDiv);