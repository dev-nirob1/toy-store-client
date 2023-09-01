
const Review = ({ review }) => {
    const { customer_name, review_text, customer_image } = review;
    return (

        <div className="bg-white text-center w-[300px] mr-6 p-5 rounded relative">
            <img className="w-20 h-20 rounded-full absolute -top-14 left-24 border-gray-500 m-5 border-4" src={customer_image} alt="customer image" />
            <h4 data-aos="fade-down" className="text-2xl mt-10 mb-4 font-semibold text-gray-700">{customer_name}</h4>
            <p data-aos="fade-up" className="text-medium font font-semibold text-gray-600">{review_text}</p>
        </div>

    );
};

export default Review;