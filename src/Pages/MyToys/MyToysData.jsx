import { Link } from "react-router-dom";


const MyToysData = ({myToy, index}) => {
    const {name, toyName, price, category, quantity} = myToy;

    return (
        <tbody>
            <tr>
                <td className='text-lg border-b p-3'>{index + 1}</td>
                <td className='text-lg border-b p-3'>{name}</td>
                <td className='text-lg border-b p-3'>{toyName}</td>
                <td className='text-lg border-b p-3'>{price}</td>
                <td className='text-lg border-b p-3'>{category}</td>
                <td className='text-lg border-b p-3'>{quantity}</td>
                <td className='flex gap-5 border-b text-blue-600 text-lg p-3 text-center'> 
                <Link to={`/update/:id`} >update</Link>
                <button>Delete</button>
                 </td>
            </tr>
        </tbody>
    );
};

export default MyToysData;