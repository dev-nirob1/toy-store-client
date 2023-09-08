import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysData from "./MyToysData";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `https://toy-store-server-blond.vercel.app/my-toys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyToys(data));
    }, [url]);

    const handleDelete = (_id) => {
        fetch(`https://toy-store-server-blond.vercel.app/toys/${_id}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount > 0) {
                alert('Deleted');
                const remainingToys = myToys.filter((toys) => toys._id !== _id);
                setMyToys(remainingToys);
            }
        });
    };

    return (
        <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-700 text-white">
                            <th className="p-3">ID</th>
                            <th className="p-3">Toy Name</th>
                            <th className="p-3">Sub-Category</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Available Quantity</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map((myToy, index) => (
                            <MyToysData
                                key={myToy._id}
                                index={index}
                                myToy={myToy}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
