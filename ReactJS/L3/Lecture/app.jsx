
import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const AmazonLogo = <div className="amazon-logo"></div>;

const NavBar = () => {
    return (
        <div className="navbar">
            <div className='logo-container'>
                {AmazonLogo}<span>.in</span>
            </div>
            <div className="location-container">
                Update location
            </div>
            <div className="search-container">
                ...
            </div>
            <div className="language-container">
                language
            </div>
            <div className="user-container">
                User
            </div>
            <div className="orders-container">
                Orders
            </div>
            <div className="cart-container">
                Cart
            </div>
        </div>
    )
}

const Categories = () => {
    const categories = [{
        id:'id1',
        name:"All",
    }, 
    {
        id:'id2',
        name:"Fresh",
    },
    {
        id:'id3',
        name:"Amazon Mini TV",
    },
    {
        id:'id4',
        name:"Sell",
    },
    {
        id:'id5',
        name:"Best Sellers",
        fresh:{
            name:"Discount 40%",
        }
    },
    {
        id:'id6',
        name:"Mobiles",
    },
    {
        id:'id9',
        name:"Today's Deals",
        fresh:{
            name:"Sale 20%",
        }
    },
    {
        id:'id7',
        name:"Customer Service",
    },
    {
        id:'id8',
        name:"Prime"
    }];

    return (
        <div className="nav-categories">
            {
                categories.map((cat)=>{
                    return(<a key={cat.id}>{cat.name} {cat.fresh?.name}</a>);
                })
            }
        </div>
    )
}
const App = () => {
    return (
        <>
            <NavBar />
            <Categories />
        </>
        // <Carousal></Carousal>
        // <Body></Body>
        // <Footer></Footer>
    )
}
root.render(<App />);




