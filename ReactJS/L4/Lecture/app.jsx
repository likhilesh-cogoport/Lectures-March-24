
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
        <div className="carousal-container">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Deals/GW/unrec/March/DEALS_HERO-2X._CB579826609_.jpg" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/hsbcunrec/WA_ETH_2x._CB580708889_.jpg" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Biss_2023/BISS_GW/GWNEW/GWNEW2/GW_PC_1500x600._CB572878474_.jpg" />
        </div>
    )
}

const girdInfo = [
    {
        id: 'grid-card-major-1',
        title: 'Appliances for your home',
        child: [
            {
                title: 'Air Conditioner',
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg',
            },
            {
                title: 'Refrigerator',
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg',
            },
            {
                title: 'Microwaves',
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg',
            },
            {
                title: 'Refrigerator',
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg',
            }
        ]
    },
    {
        id: 'grid-card-major-2',
        title: 'Styles for men',
        child: [
            {
                title: 'Clothing',
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-372-232._SY232_CB636110853_.jpg',
            },
            {
                title: 'Refrigerator',
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg',
            },
            {
                title: 'Microwaves',
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg',
            },
            {
                title: 'Refrigerator',
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg',
            }
        ]
    },
    {
        id: 'grid-card-major-3',
        title: 'Appliances for your home',
    },
    {
        id: 'grid-card-major-4',
        title: 'Appliances for your home',
        child: [
            {
                title: 'Air Conditioner',
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg',
            },
            {
                title: 'Refrigerator',
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg',
            },
            {
                title: 'Microwaves',
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg',
            },
            {
                title: 'Refrigerator',
                img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg',
            }
        ]
    }

]

const GridCard = ( { data: {title, child=[]} } ) => {
    // const { data } = props;
    return (
        <div className='grid-card'>
            <p>{title}</p>
            <div className='card-internal-grid'>
                {
                    child.map(({img, title})=>{
                        return(
                            <div key={title}>
                                <img src={img}></img>
                                <p>{title}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

const Body = () => {
    return(
        <div className='grid-layout'>
            {
                girdInfo.map((info)=>{
                    return (
                        <GridCard key={info.id} data={info} />
                    )
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
            <Carousal />
            <Body></Body>
        </>
        // <Footer></Footer>
    )
}
root.render(<App />);




