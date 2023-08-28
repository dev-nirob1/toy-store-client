
const Review = ({ review }) => {
    const { customer_name, review_text, customer_image } = review;
    return (

        <div className="bg-white text-center w-[300px] mr-6 p-5 rounded">
            <img className="w-20 mx-auto rounded-full" src={customer_image} alt="customer image" />
            <h4 className="text-2xl font-semibold text-gray-700">{customer_name}</h4>
            <p className="text-medium font font-semibold text-gray-600">{review_text}</p>
        </div>

    );
};

export default Review;