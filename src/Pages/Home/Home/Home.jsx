import Gallery from "../Gallery/Gallery";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;