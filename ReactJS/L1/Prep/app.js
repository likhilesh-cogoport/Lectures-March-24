// const h1 = document.createElement("h1");
// h1.innerText = "Hello Dreamers from JS!";
// const parent = document.getElementById("root");
// parent.appendChild(h1);



// const heading = React.createElement(
//     "div",
//     {},
//     "Hello Dreamers from React!"
// );
// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);
// root.render(heading);



// const heading = React.createElement(
//     "div",
//     {className: "Greetings", title:"Mera Heading"},
//     "Hello Dreamers from React!"
// );
// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);
// root.render(heading);



const heading = React.createElement(
    "h4",
    {key: 3},
    "List of items"
);

const li1 = React.createElement(
    "li",
    {key: 1},
    "Item 1"
);

const li2 = React.createElement(
    "li",
    {key: 2},
    "Item 2"
);

const ol = React.createElement(
    "ol",
    {key: 4},
    [li1, li2],
);

const div = React.createElement(
    "div",
    {},
    [heading, ol]
);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(div);