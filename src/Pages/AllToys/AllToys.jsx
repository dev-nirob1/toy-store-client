import { Link, useLoaderData } from 'react-router-dom';
import ToysData from './ToysData';

const AllToys = () => {
    const toysData = useLoaderData()
    console.log(toysData)
    return (
        <div>
            <h3 className='font-semibold text-center text-4xl py-5 bg-green-400'>Toy Management System</h3>
            <h3 className='font-semibold text-center text-4xl py-5 bg-purple-400'>All Toys</h3>

            <div className='w-3/4 mx-auto my-20 border p-10'>
                <Link className='px-5 border py-3 font-medium text-lg text-purple-500' to="/addToy">New User</Link>

                <table className="border-collapse border w-full mt-10 text-center">

                    <thead>
                        <tr className="bg-gray-700 text-white text-center">
                            <th className="p-3">ID</th>
                            <th className="p-3">Seller Name</th>
                            <th className="p-3">Toy Name</th>
                            <th className="p-3">Sub-Category</th>
                            <th className="p-3">Price</th>
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