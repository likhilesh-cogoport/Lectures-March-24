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
// {/* <div>
//     <h1></h1>
//     <ol>
//         <li></li>
//         <li></li>
//         <li></li>
//     </ol>
// </div> */}
// root.render(extraDiv);



// ************************** React.createElement Methods **************************
// import React from 'react';
// import ReactDOM from 'react-dom';

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);
// const h1 = React.createElement("h1", {title: 'Mera Code!'}, "Hello from React!");
// const li1 = React.createElement("li", {className: 'li-item'}, "item 1");
// const li2 = React.createElement("li", {}, "item 2");
// const li3 = React.createElement("li", {className: 'li-item', title: 'Dairy', a:'b'}, "item 3");
// const ol = React.createElement("ol", {}, [li1, li2, li3]);
// const extraDiv = React.createElement("div", {}, [h1, ol]);
// root.render(extraDiv);


// ************************** JSX **************************
import React from 'react';
import ReactDOM from 'react-dom/client';
// const React = require('react')
// const ReactDOM = require('react-dom/client')

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

//React Element
const h11 = <h1 title="Mera Code!">Hello from H11!</h1>

//React Functional Component with arrow function, return keyword
const H12 = () => {
    return <h1 title="Mera Code!">Hello from H12!</h1>;
}

//React Functional Component with arrow function, return keyword and '(', ')'
const H13 = () => {
    return (
        <h1 title="Mera Code!">Hello from H13!</h1>
    )
}

//React Functional Component with arrow function, without return
const H14 = () => <h1 title="Mera Code!">Hello from H14!</h1>;

//React Functional Component with arrow function, without return and '(', ')'
const H15 = () => (
    <h1 title="Mera Code!">Hello from H15!</h1>
);

//React Functional Component with function keyword
const H16 = <h1 title="Mera Code!">Hello from H16!</h1>;

// React Elements
const li1 = <li className="li-item">item 1</li>
const li2 = <li>item 2</li>
const li3 = <li className="li-item" title="Dairy" a="b">item 2</li>
const Ol = () => (
    <ol>
        {li1} {li2} {li3}
    </ol>
);

// const extraDiv = <div>
//     {h11}
//     {h12()} 
//     {h13()}
//     {h14()}
//     {h15()}
//     {h16()}
//     {ol()}
// </div>

const ExtraDiv = () => <div>
    {h11}
    <H12 />
    <H13 />
    <H14 />
    <H15 />
    {H16}
    <Ol />
</div>

root.render(<ExtraDiv />);




