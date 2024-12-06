import { Link } from "react-router-dom";

const ToyCard = ({toy}) => {

    return (

            <div className="bg-white shadow-lg px-2 pt-4 pb-8 rounded-lg text-center">
                <img src={toy.toyImage} alt="Toy" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{toy.toyName}</h3>
                <p className="text-orange-500 mb-2">${toy.price}</p>
                <Link to={`/toy-details/${toy._id}`} className="bg-orange-500 text-white px-4 py-2 rounded-lg">View Details</Link>
            </div>
    );
};

export default ToyCard;