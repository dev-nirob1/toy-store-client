import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import MyToysData from "./MyToysData";

const MyToys = () => {

    const {user} = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const url = `http://localhost:5000/myToys?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[url])

    return (
        <div>
        <div>
        <h3 className='font-semibold text-center text-4xl py-5 bg-green-400'>Toy Management System</h3>

        <h4 className='font-semibold text-center text-4xl py-5 bg-purple-400 mt-10'>My Toys</h4>
        <div className='w-3/4 mx-auto my-20 border p-10'>
            <Link className='px-5 border py-3 font-medium text-lg text-purple-500' to="/allToys">All Toys</Link>

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
                    myToys.map((myToy, index) => <MyToysData
                        key={myToy._id}
                        index={index}
                        myToy={myToy}
                    ></MyToysData>)
                }
            </table>
        </div>
    </div>
        </div>
    );
};

export default MyToys;