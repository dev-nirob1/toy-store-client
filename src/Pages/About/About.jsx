import Banner from "../../Components/Shared/Banner";
import useTitle from "../../Hooks/useTitle";
import CommunityInvite from "./CommunityInvite";
import Explore from "./Explore";
import Story from "./Story";
import ValuesAndVision from "./ValuesAndVision";

const About = () => {
    useTitle('About')

    return (
        <div className="container mx-auto my-16">
            {/* top banner */}
            <Banner
                title='About Us'
                description='At ToyStore, we bring joy and creativity to life with our diverse range of high-quality toys. From educational games to imaginative playthings, we inspire smiles and unforgettable moments for kids of all ages.'
            />
            <Explore />
            <Story />
            <ValuesAndVision />
           <CommunityInvite/>

        </div>
    );
};

export default About;
