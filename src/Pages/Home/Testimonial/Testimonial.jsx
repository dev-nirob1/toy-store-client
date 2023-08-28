import { useEffect, useState } from "react";
import Review from "./Review";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
    const [customerReview, setCustomerReview] = useState([])

    useEffect(() => {
        fetch('public/testimonial.json')
            .then(res => res.json())
            .then(data => setCustomerReview(data))
    }, [])

    return (
        <div className="my-10 container mx-auto bg-[#3A454D]">
            <h2 className="text-center text-gray-100 text-4xl font-semibold py-10">Customer Review</h2>

            <Marquee>
                <div className="grid grid-cols-5 my-10">
                    {
                        customerReview.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
            </Marquee>

        </div>
    );
};

export default Testimonial;