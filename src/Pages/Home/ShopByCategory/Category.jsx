import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { _id, toyName, price, ratings, toyImage } = category
  return (
    
    <div className="shadow-lg h-[400px] bg-white mt-5 rounded-md border overflow-hidden">
      <img
        src={toyImage}
        alt="product image"
        className="h-1/2 w-full border-b rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-2xl text-start text-gray-700 font-semibold">{toyName}</h1>

        <div className="flex justify-between flex-wrap items-center">
          <p className="my-3 text-lg text-gray-700">Price ${price}</p>
          <p className="my-3 text-lg text-gray-700 flex items-center">
            <Rating
              style={{ maxWidth: 150 }}
              value={Math.round(ratings || 0)} readOnly />
            <span className='ml-2 text-xl'> {ratings}</span>
          </p>
        </div>

        <Link to={`/toy-details/${_id}`} className="bg-indigo-500 hover:bg-indigo-600 py-2 text-white font-semibold text-center rounded-lg block text-xl mb-5">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Category;