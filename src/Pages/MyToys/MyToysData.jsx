import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";

const MyToysData = ({ myToy, index, handleDelete }) => {
    useTitle('My Toys')
    const {_id, toyName, price, category, quantity } = myToy;

    return (

        <tr className="border-b">
            <td className='p-3'>{index + 1}</td>
            <td className='p-3'>{toyName}</td>
            <td className='p-3'>{category}</td>
            <td className='p-3'>${price}</td>
            <td className='p-3'>{quantity}</td>
            <td className='flex gap-5 items-center justify-center text-blue-600 text-lg p-3 text-center'>
                <Link to={`/update/${_id}`} >
                <FaEdit className="text-xl md:text-2xl" title="Update Information" />
                </Link>
                <button onClick={() => handleDelete(_id)}>
                    <FaTrashAlt className="text-xl md:text-2xl" title="Delete Toy" />
                </button>
            </td>
        </tr>
    
    );
};

export default MyToysData;