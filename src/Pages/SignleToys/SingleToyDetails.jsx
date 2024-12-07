import { useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useGetSingleToyQuery } from "../../redux/features/toysApi";
import Loading from "../../Components/Loading/Loading";

const SingleToy = () => {
    const { id } = useParams()
    const { data: singleToy, isLoading } = useGetSingleToyQuery(id)
    const [count, setCount] = useState(0);
    useTitle(`${singleToy?.toyName}, Details`)

    if(isLoading){
        return <Loading/>
    }
    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const incrementCount = () => {
        if (count < singleToy.quantity) {
            setCount(count + 1);
        }
    };

    return (
        <div className="py-5 md:py-10 bg-gradient-to-tr from-slate-200 to-slate-100">
            <div className="container mx-auto">
                <div className="grid grid-cols-6 gap-4 mx-auto md:w-3/4">
                    <div className="col-span-6 md:col-span-2 mx-2 md:mx-0 bg-white rounded-lg shadow-md p-2 md:p-5">
                        <img src={singleToy?.toyImage} alt="product image" className="rounded-lg mb-4" />
                        <div className="inline-flex gap-3 my-4">
                            <div className="flex items-center">
                                <button
                                    className="bg-indigo-500 text-xl font-bold text-white py-2 px-4 rounded-md border hover:bg-indigo-600 focus:outline-none"
                                    onClick={decrementCount}
                                    disabled={count <= 0}
                                >
                                    -
                                </button>
                                <p className="p-2">{count}</p>
                                <button
                                    className="bg-indigo-500 text-xl font-bold text-white py-2 px-4 rounded-md border hover:bg-indigo-600 focus:outline-none"
                                    onClick={incrementCount}
                                >
                                    +
                                </button>
                            </div>

                            <button className="px-4 py-2 font-semibold btn-block bg-indigo-500 text-white rounded hover:bg-indigo-600">Add To Cart</button>

                        </div>
                        <button className="px-4 py-2 font-semibold btn-block bg-indigo-500 text-white rounded hover:bg-indigo-600">Order Now</button>
                    </div>
                    <div className="col-span-6 font-medium md:col-span-4 mx-2 md:mx-0 bg-white rounded-lg shadow-md p-5">
                        <h2 className="text-3xl font-semibold">{singleToy?.toyName}</h2>
                        <div className="text-gray-500 mt-3 flex">
                            <Rating
                                style={{ maxWidth: 150 }}
                                value={Math.round(singleToy?.ratings || 0)} readOnly />
                            <span className='ml-2 text-xl'> {singleToy?.ratings}</span></div>
                        <p className="text-gray-600 my-3">Category: <span className="p-1 bg-gray-200">{singleToy?.category}</span></p>
                        <h2 className="text-2xl font-semibold mt-4">Price: ${singleToy?.price}</h2>
                        <p className="text-gray-600 my-3">Color: <span className="p-1 bg-gray-200">Same As Picture</span></p>
                        <p className="text-gray-600">Only {singleToy?.quantity} items left</p>
                        <h2 className="text-2xl font-semibold mt-4 mb-3">Product Description</h2>
                        <p className="text-gray-700 w-full">{singleToy?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;
