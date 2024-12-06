
const WhyChooseUs = () => {

    return (
        <section className="py-16 px-4 md:px-8 bg-black text-gray-200">
            <h2 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold mb-8">Why Choose Us?</h2>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-gray-200">
                <div className="text-center">
                    <img className="w-fit mx-auto" src="/fastship.png" alt="fast shiping" />
                    <h3 className="text-2xl font-semibold mb-2">Fast Shipping</h3>
                    <p>Get your toys delivered quickly and safely to your doorstep.</p>
                </div>
                <div className="text-center">
                <img className="w-fit mx-auto" src="/quality.png" alt="quality" />
                    <h3 className="text-2xl font-semibold mb-2">Quality Assurance</h3>
                    <p>We ensure each product meets the highest safety and quality standards.</p>
                </div>
                <div className="text-center">
                <img className="w-fit mx-auto" src="/customer.png" alt="customer" />
                <h3 className="text-2xl font-semibold mb-2">Customer Support</h3>
                    <p>Our friendly team is here to assist you with any questions.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;