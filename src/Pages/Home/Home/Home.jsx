import useTitle from "../../../Hooks/useTitle";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner/Banner";
import FeaturedProduct from "../Featured/FeaturedProduct";
import WhyChooseUs from "../WhyChoose/WhyChooseUs";
import PlaytimeFeature from "../PlaytimeFeature/PlaytimeFeature";
import NewsLetter from "../NewsLetter/NewsLetter";
import { useSelector } from "react-redux";
import Loading from "../../../Components/Loading/Loading";

const Home = () => {
  useTitle('Home')
  const { isLoading } = useSelector((state) => state.usersReducer)


  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="space-y-16">
      <Banner />
      <FeaturedProduct />
      <WhyChooseUs />
      <ShopByCategory />
      <PlaytimeFeature />
      <Testimonial />
      <NewsLetter />
    </div>
  );
};

export default Home;