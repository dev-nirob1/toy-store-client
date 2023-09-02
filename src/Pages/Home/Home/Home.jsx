import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;