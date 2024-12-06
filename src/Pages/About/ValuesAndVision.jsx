

const ValuesAndVision = () => {
    return (
        <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800">Our Values & Vision</h2>
            <p className="text-lg md:text-2xl text-gray-700">
                We believe in the power of play. Every toy is an opportunity to learn, explore, and grow. Our vision is to create a world where every child can access toys that inspire their creativity and imagination, helping them become the dreamers of tomorrow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <img className="w-fit mx-auto" src="/creativity.png" alt="creativity"/>
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Creativity</h3>
                    <p className="text-lg text-gray-600">We are committed to delivering toys that foster creativity, imagination, and out-of-the-box thinking.</p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg">
                <img className="w-fit mx-auto" src="/quality.png" alt="quality"/>
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Quality</h3>
                    <p className="text-lg text-gray-600">We ensure that every product is made with the highest standards of quality, safety, and durability for children.</p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg">
                <img className="w-fit mx-auto" src="/learning.png" alt="learning"/>
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Learning</h3>
                    <p className="text-lg text-gray-600">Our toys are designed to enhance learning experiences, encouraging children to explore and develop important skills.</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ValuesAndVision;