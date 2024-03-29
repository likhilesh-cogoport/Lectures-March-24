import { useState } from "react";

import Categories from "../../common/categories";
import NavBar from "../../common/navbar";

const productsData = [
    {
        id: 1,
        title: 'Apple iPhone 13 (128GB) - Midnight',
    },
    {
        id: 2,
        title: 'Xiaomi 12 pro',
    },
    {
        id: 3,
        title: 'Asus Zenfone Max'
    },
    {
        id: 4,
        title: "Abc",
    }
];

const ProductSearch = () => {
    const [searchText, setSearchText] = useState("");
    console.log(searchText);

    function detectChange(e){
        setSearchText(e.target.value);
    }

    return(
        <>
            <NavBar searchText={searchText} setSearchText={detectChange} />
            <Categories />
            <div>
                {
                    productsData.map(({title})=>{
                        return(<h4>{title}</h4>);
                    })
                }
            </div>
        </>
    )
};

export default ProductSearch;