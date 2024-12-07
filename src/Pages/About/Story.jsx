import Title from "../../Components/Title";

const Story = () => {
    return (
        <section className="py-16 px-4 md:px-8 mt-16">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-12">
                    <div className="md:text-left md:w-1/2 space-y-6">

                       <Title title="Our Story"/>
                       
                        <p className="leading-relaxed text-gray-600">
                            At **ToyStore**, our journey began with a simple mission: to bring joy, creativity, and learning to every child. What started as a small family business has grown into a trusted name for high-quality, innovative, and safe toys that spark imagination.
                        </p>
                        <p className="leading-relaxed text-gray-600">
                            We believe in creating unforgettable childhood memories, one toy at a time. Our team is passionate about handpicking the finest toys that inspire exploration, foster creativity, and make learning fun. Join us in celebrating the magic of play!
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <div className="relative">
                            <img
                                src="/ourStory.webp"
                                alt="Team Member"
                                className="max-h-[450px] w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Story;