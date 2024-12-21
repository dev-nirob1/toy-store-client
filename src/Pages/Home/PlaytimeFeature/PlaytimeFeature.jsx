import { Link } from "react-router-dom";

const PlaytimeFeature = () => {
    return (
        <section className="container mx-auto">
            <div className="relative h-[60vh] md:h-[80vh] w-full">
                <img className="h-full w-full object-center" src="/home.webp" alt="image" />
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center text-center bg-gradient-to-b from-slate-400/30 via-slate-700/50 to-slate-600/40">
                    <div>
                        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-orange-600 mb-6">
                            Playtime Paradise
                        </h2>
                        <p className="text-sm md:text-base xl:text-lg text-gray-100 font-medium mb-8 w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-6">
                            Dive into our world of endless fun and creativity! Discover toys that spark imagination, encourage play, and bring smiles to every child’s face. Whether you&apos;re looking for educational games, action figures, or cuddly companions, we have it all!
                        </p>
                        <Link to='/all-toys' className="bg-orange-600 font-semibold text-white p-6 py-3 rounded-lg hover:bg-orange-500 transition">
                            Explore Our Collection
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlaytimeFeature;