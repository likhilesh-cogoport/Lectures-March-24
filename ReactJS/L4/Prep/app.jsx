
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

const Carousal = () => {
    return (
        <div className='carousal-container'>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Deals/GW/unrec/March/DEALS_HERO-2X._CB579826609_.jpg" />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/hsbcunrec/WA_ETH_2x._CB580708889_.jpg" />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Biss_2023/BISS_GW/GWNEW/GWNEW2/GW_PC_1500x600._CB572878474_.jpg" />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Unrec/HPC-PC_GW_Hero_3000x1200_01-min._CB561051097_.jpg" />
        </div>
    )
}

const Body = () => {
    return<div className='grid-layout'>
        <div className="grid-card">1</div>
        <div className="grid-card">2</div>
        <div className="grid-card">3</div>
        <div className="grid-card">4</div>
    </div>
}

const App = () => {
    return (
        <>
            <NavBar />
            <Categories />
            <Carousal></Carousal>
            <Body></Body>
        </>
        // <Footer></Footer>
    )
}
root.render(<App />);




