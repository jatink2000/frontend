
import Bannersection from "../components/Bannersection"
import Bestsells from "../components/Bestsells"
import Buynow from "../components/Buynow"
import FeaturedCategories from "../components/Featuredcategories"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroBanner from "../components/Hero"
import Navbar from "../components/Navbar"
import Popularproducts from "../components/Popularproducts"
import Section from "../components/Section"

function Home(){
    return(
        <>
            <Header/>
                <Navbar/>
                <HeroBanner/>
                <FeaturedCategories/>
                <Bannersection/>
                <Popularproducts/>
                <Bestsells/>
                <Section/>
                <Footer/>
                <Buynow/> 

        </>
    )
}

export {Home}