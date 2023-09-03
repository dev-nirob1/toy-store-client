import { FaQuoteLeft } from "react-icons/fa";

const Review = ({ review }) => {
    const { customer_name, review_text, customer_image, customer_position } = review;
    console.log(review)

    return (

            <div className="bg-white text-center shadow-lg w-[300px] mr-6 p-5 rounded relative">
            <img
                className="w-20 h-20 rounded-full absolute -top-14 left-24 border-white m-5 border-4"
                src={customer_image}
                alt="customer image"
            />
            <div className="relative">
                <FaQuoteLeft className="absolute -top-7 left-4 text-4xl text-gray-400" />
                <div data-aos="fade-down" className="mt-10 mb-5">
                    <h4 className="text-2xl font-semibold">{customer_name}</h4>
                    <p className="italic text-sm font-medium">{customer_position.working_role} at {customer_position.company_name}</p>
                </div>
                <p data-aos="fade-up" className="text-medium text-justify font-medium">
                    {review_text}
                </p>
            </div>
        </div>
    );
};

export default Review;
