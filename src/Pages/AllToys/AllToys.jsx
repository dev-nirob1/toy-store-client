import { useLoaderData } from 'react-router-dom';
import ToysData from './ToysData';
import useTitle from '../../Hooks/useTitle';
import { FaSearch } from 'react-icons/fa';

const AllToys = () => {
    useTitle('All Toys')
    const toysData = useLoaderData()
    return (
        <div>
            <div className='w-3/4 mx-auto my-10 mt-2'>
                <h3 className='font-semibold text-center text-4xl mb-5 py-5'>All Toys</h3>
                <div className="text-center mb-4">
                    <div className="flex items-center w-1/2 mx-auto border rounded-lg">
                        <span className="px-2">
                            <FaSearch />
                        </span>
                        <input
                            type="text"
                            placeholder="Search by Toy Name..."
                            className="px-4 py-2 rounded-lg focus:outline-none"
                        />
                    </div>
                </div>
                <table className="border-collapse border w-full text-center">

                    <thead>
                        <tr className="bg-gray-700 text-white text-center">
                            <th className="p-3">ID</th>
                            <th className="p-3">Seller Info</th>
                            <th className="p-3">Toy Name</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Sub-Category</th>
                            <th className="p-3">Available Quantity</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    {
                        toysData.map((toys, index) => <ToysData
                            key={toys._id}
                            index={index}
                            toys={toys}
                        ></ToysData>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllToys;