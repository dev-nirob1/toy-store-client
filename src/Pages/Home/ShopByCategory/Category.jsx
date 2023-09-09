import Rating from "react-rating";

import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { _id, toyName, price, ratings, toyURL } = category
  return (
    
    <div className="w-full shadow-lg bg-white mt-5 relative rounded-md border overflow-hidden space-y-5">
      <img
        src={toyURL}
        alt=""
        className="h-1/2 w-full border-b rounded-md object-cover"
      />
      <div className="p-4 h-1/2  flex flex-col">
        <h1 className="text-2xl font-semibold">{toyName}</h1>

        <div className="flex justify-between flex-wrap items-center">
          <p className="mt-3 text-2xl text-gray-600">${price}</p>
          <p className="mt-3 text-2xl text-gray-600">
            <Rating
              style={{ maxWidth: 150 }}
              value={Math.round(ratings || 0)} readOnly />
            <span className='ml-2 text-xl'> {ratings}</span>
          </p>
        </div>

        <Link to={`/toy-details/${_id}`} className="bg-indigo-500 hover:bg-indigo-600 py-3 text-white font-semibold text-center rounded-lg btn-block text-xl mt-auto mb-5">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Category;