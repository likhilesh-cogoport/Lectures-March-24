import Carousal from "./components/carousal";
import Categories from "../../common/categories";
import NavBar from "../../common/navbar";
import HomepageBody from "./components/homepageBody";

export const Homepage = () => {
    return (
        <>
            <NavBar />
            <Categories />
            <Carousal />
            <HomepageBody />
        </>
    )
}

export default Homepage;