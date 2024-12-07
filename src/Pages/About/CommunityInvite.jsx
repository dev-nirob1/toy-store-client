import { Link } from "react-router-dom";
import Title from "../../Components/Title";
const CommunityInvite = () => {
    return (
        <section className="container mx-auto">
            <div className="relative h-[80vh]">
                <img className="h-full w-full" src="/about.webp" alt="banner image" />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-slate-700/30 via-slate-600/50 to-slate-800/40">
                    <div className="text-center max-w-3xl mx-auto space-y-8">

                      <div className="text-white">
                      <Title title="Join Us on the Adventure" />
                      </div>

                        <p className="text-sm md:text-lg text-white">
                            At ToyStore, we’re more than just a store — we’re a community. We invite you to join us in spreading the magic of play, creativity, and imagination. Be a part of our journey today!
                        </p>
                        <Link to="/all-toys" className="bg-orange-500 inline-block hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
                            Explore Our Toys
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunityInvite;