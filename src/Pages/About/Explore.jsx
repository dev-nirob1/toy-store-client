import Title from "../../Components/Title";

const Explore = () => {
    return (
        <section className="py-16 px-4 md:px-8 rounded-lg shadow-lg mt-16">
                <div className="">
                   <Title title=" Playful & Magical: Sparking Joy for Every Child"/>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        Welcome to a world of wonder and imagination! At ToyStore, we bring you an enchanting selection of toys designed to inspire creativity and endless fun. From educational games to cuddly companions, we offer something special for every child`&apos;s smile.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        With new arrivals every day, we’re here to make playtime unforgettable and magical. Discover the joy of giving with ToyStore — where dreams come to life!
                    </p>

                    {/* Button */}
                    <button className="mt-6 bg-orange-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-500 transition">
                        Explore the Magic
                    </button>
                </div>
            </section>
    );
};

export default Explore;