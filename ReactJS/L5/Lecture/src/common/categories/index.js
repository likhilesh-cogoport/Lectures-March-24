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

export default Categories;