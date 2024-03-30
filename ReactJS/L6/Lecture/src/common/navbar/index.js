import AmazonLogo from "../amazonLogo";

const NavBar = ({
    searchText,
    setSearchText,
}) => {

    return (
        <div className="navbar">
            <div className='logo-container'>
                {AmazonLogo}<span>.in</span>
            </div>
            <div className="location-container">
                Update location
            </div>
            <div className="search-container">
                <div className="search-drop-box">
                    All
                </div>
                <input type="text" placeholder="Search Amazon.in" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                />
                <div className="search-drop-box">
                    S
                </div>
            </div>
            <div className="language-container">
                location
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

export default NavBar;