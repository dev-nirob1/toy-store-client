import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import MyToysData from "./MyToysData";
import Swal from "sweetalert2";

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const url = `http://localhost:5000/my-toys?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/toys/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                console.log(data)
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
    }


    return (
        <div>
            <h3 className='font-semibold text-center text-4xl py-5 bg-green-400'>Toy Management System</h3>

            <h4 className='font-semibold text-center text-4xl py-5 bg-purple-400 mt-10'>My Toys</h4>
            <div className='w-3/4 mx-auto my-20 border p-10'>
                <Link className='px-5 border py-3 font-medium text-lg text-purple-500' to="/allToys">All Toys</Link>

                <table className="border-collapse border w-full mt-10 text-center">

                    <thead>
                        <tr className="bg-gray-700 text-white text-center">
                            <th className="p-3">ID</th>
                            <th className="p-3">Toy Name</th>
                            <th className="p-3">Sub-Category</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Available Quantity</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    {
                        myToys.map((myToy, index) => <MyToysData
                            key={myToy._id}
                            index={index}
                            myToy={myToy}
                            handleDelete={handleDelete}
                        ></MyToysData>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyToys;