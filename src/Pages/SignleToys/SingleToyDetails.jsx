import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    const singleToy = useLoaderData();
    const { name, category, price, quantity, description, toyURL, ratings } = singleToy;
    const [count, setCount] = useState(0);

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const incrementCount = () => {
        if (count < quantity) {
            setCount(count + 1);
        }
    };

    return (
        <div className="grid grid-cols-6  container mx-auto my-10 gap-4">
            <div className="col-span-2 bg-white rounded-lg shadow-md p-4">
                <img src={toyURL} alt="product image" className="rounded-lg mb-4" />
                <div className="inline-flex gap-3 my-4">
                    <div className="flex items-center">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded-md border hover:bg-blue-600 focus:outline-none"
                            onClick={decrementCount}
                            disabled={count <= 0}
                        >
                            -
                        </button>
                        <p className="p-2">{count}</p>
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded-md border hover:bg-blue-600 focus:outline-none"
                            onClick={incrementCount}
                        >
                            +
                        </button>
                    </div>

                    <button className="px-4 py-2 btn-block bg-blue-500 text-white rounded hover:bg-blue-600">Add To Cart</button>

                </div>
                <button className="px-4 py-2 btn-block bg-blue-500 text-white rounded hover:bg-blue-600">Order Now</button>
            </div>
            <div className="col-span-4 bg-white rounded-lg shadow-md p-4">
                <h2 className="text-3xl font-semibold">{name}</h2>
                <p className="text-gray-500">{ratings}</p>
                <p className="text-gray-600">{category}</p>
                <h2 className="text-2xl font-semibold mt-4">${price}</h2>
                <p className="text-gray-600">Color: <span className="p-1 bg-gray-200">Same As Picture</span></p>
                <p className="text-gray-600">Only {quantity} items left</p>
                <h2 className="text-2xl font-semibold mt-4">Product Description</h2>
                <p className="text-gray-700 w-1/2">{description}</p>
            </div>
        </div>
    );
};

export default SingleToy;
