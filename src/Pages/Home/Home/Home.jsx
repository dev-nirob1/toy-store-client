import useTitle from "../../../Hooks/useTitle";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner/Banner";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Home = () => {
    useTitle('Home')
    const {loading} = useContext(AuthContext)
    
      if (loading) {
        return (
          <div className="h-screen w-full flex justify-center items-center">
            <span className="loading loading-spinner text-primary h-16 w-16"></span>
          </div>
        );
      }
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