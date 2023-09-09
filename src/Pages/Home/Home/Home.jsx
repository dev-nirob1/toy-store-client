import useTitle from "../../../Hooks/useTitle";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner/Banner";

const Home = () => {
    useTitle('Home')
    return (
            <div>
                <Banner></Banner>
                <Gallery></Gallery>
                <ShopByCategory></ShopByCategory>
                <Testimonial></Testimonial>
                <ContactUs></ContactUs>
            </div>
    );
};

export default Home;