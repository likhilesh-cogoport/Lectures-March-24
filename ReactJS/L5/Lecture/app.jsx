
import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './src/pages/homepage';
import ProductSearch from './src/pages/productSearch';

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = () => {
    console.log('App component re-rendered');
    return <ProductSearch />;
};

root.render(<App />);