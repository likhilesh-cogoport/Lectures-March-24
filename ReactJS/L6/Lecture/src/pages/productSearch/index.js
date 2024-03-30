import { useEffect, useState } from "react";

import Categories from "../../common/categories";
import NavBar from "../../common/navbar";

// const productsData = [
//     {
//         id: 1,
//         title: 'Apple iPhone 13 (128GB) - Midnight (Mobile)',
//     },
//     {
//         id: 2,
//         title: 'Xiaomi 12 pro (Mobile)',
//     },
//     {
//         id: 3,
//         title: 'Asus Zenfone Max (Mobile)'
//     },
//     {
//         id: 4,
//         title: "Mixer (Kitchen item)",
//     },
//     {
//         id: 5,
//         title: "Nokia",
//     },
//     {
//         id: 6,
//         title: "Asus Laptop",
//     },
//     {
//         id: 7,
//         title: "Lenovo Laptop",
//     }
// ];

const styleObj = {width: 'fit-content', margin: '20px auto', padding: '16px', border: '1px solid red'}

const ProductSearch = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [result, setResult] = useState([]);

    function searchFunc(e){
        setSearchText(e.target.value);
    }

    function filterProducts(){
        let temp = allProducts.filter(({title})=>{
            return title.toLowerCase().includes(searchText.toLowerCase());
        })

        console.log("\n✅ : temp:", temp)
        console.log("\n✅ : allProducts:", allProducts)
        setResult(temp);
    }

    useEffect(()=>{
        filterProducts();
    }, [searchText]);

    useEffect(() => {
        fetch('http://localhost:1400/dummyData')
        .then(res => res.json())
        .then((data)=>{
            setResult(data.products);
            setAllProducts(data.products);
        });
    }, []);
    

    return(
        <>
        <NavBar searchText={searchText} setSearchText={setSearchText} />
            {/* <input type="text" value={searchText} placeholder='Search Here' onChange={searchFunc}/>  */}
            {/* <button onClick={searchProducts}> Search </button> */}
            
            <div>
                <h3 style={{textAlign:'center'}}>
                    Amazon Products
                </h3>
                {
                    result.map(({id, title})=>{
                        return(<h5 key={id} style={styleObj}>{title}</h5>);
                    })
                }
            </div>
        </>
    )
};

export default ProductSearch;