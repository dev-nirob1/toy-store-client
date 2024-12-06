

const Banner = ({ title, description }) => {
    return (
        <section className="h-[70vh] w-full flex justify-center items-center relative font-serif ">
            <img className="w-full h-full" src="/banner.webp" alt="" />
            <div className="h-full w-full absolute top-0 right-0 flex items-center justify-center bg-gradient-to-b from-slate-400/10 via-slate-500/10 to-slate-400/10">
                <div className="p-2 text-gray-800">
                    <h1 className="ml-3 text-2xl md:text-6xl lg:text-7xl mb-6 font-bold">
                        {title}
                    </h1>
                    <p className="ml-10 text-sm md:text-base md:ml-20 max-w-xl font-bold bg-white/30 backdrop-blur-sm px-5">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;