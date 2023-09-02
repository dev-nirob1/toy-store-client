import { Link } from "react-router-dom";

const ToysData = ({ toys, index }) => {
    const { _id, toyName, email, name, category, price, quantity } = toys;
    console.log(toys, index)
    return (
        <tbody>
            <tr>
                <td className='text-lg border-b p-3'>{index + 1}</td>
                <td className=' border-b p-3'>
                    <p>{name}</p>
                    <p>{email}</p>
                </td>
                <td className='text-lg border-b p-3'>{toyName}</td>
                <td className='text-lg border-b p-3'>{price}</td>
                <td className='text-lg border-b p-3'>{category}</td>
                <td className='text-lg border-b p-3'>{quantity}</td>
                <td className='flex gap-5 hover:underline border-b text-blue-600 text-lg p-3 text-center'> <Link to={`/toy-details/${_id}`} >View Details</Link> </td>
            </tr>
        </tbody>
    );
};

export default ToysData;