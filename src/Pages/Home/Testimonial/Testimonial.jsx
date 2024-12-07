import { useEffect, useState } from "react";
import Review from "./Review";
import Marquee from "react-fast-marquee";
import Title from "../../../Components/Title";

const Testimonial = () => {
    const [customerReview, setCustomerReview] = useState([])

    useEffect(() => {
        fetch('https://toy-store-server-blond.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => setCustomerReview(data))
    }, [])

    return (
        <div className="container mx-auto">

            <div className="text-center mb-12">
                <Title title="Customer Review"/>
            </div>
            
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