import { useEffect, useState } from "react";
import Review from "./Review";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
    const [customerReview, setCustomerReview] = useState([])

    useEffect(() => {
        fetch('https://toy-store-server-blond.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => setCustomerReview(data))
    }, [])

    return (
        <div className="my-10 container mx-auto bg-gray-50">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="text-center text-gray-900 text-4xl font-semibold py-10">Customer Review</h2>

                <Marquee>
                    <div className="grid grid-cols-5 my-10">
                        {
                            customerReview.map(review => <Review key={review._id} review={review}></Review>)
                        }
                    </div>
                </Marquee>
        </div>
    );
};

export default Testimonial;