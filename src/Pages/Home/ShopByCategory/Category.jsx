import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { _id, toyName, price, ratings, toyImage } = category
  return (
    
    <div className="shadow-lg bg-white mt-5 rounded-lg border overflow-hidden">
      <img
        src={toyImage}
        alt="product image"
        className="h-[320px] w-full border-b rounded-t-lg object-cover"
      />
      <div className="p-4">
        <h1 className="text-2xl text-start text-gray-700 font-semibold">{toyName}</h1>

        <div className="flex justify-between flex-wrap items-center">
          <p className="my-3 text-lg text-gray-700">Price ${price}</p>
          <div className="my-3 text-lg text-gray-700 flex items-center">
            <Rating
              style={{ maxWidth: 150 }}
              value={Math.round(ratings || 0)} readOnly />
            <span className='ml-2 text-xl'> {ratings}</span>
          </div>
        </div>

        <Link to={`/toy-details/${_id}`} className="bg-orange-600 hover:bg-orange-700 py-2 text-white font-semibold text-center rounded-lg block text-xl">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Category;