import MyToysData from "./MyToysData";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useDeleteToyMutation, useGetUsersToyQuery } from "../../redux/features/toysApi";
import Loading from "../../Components/Loading/Loading";

const MyToys = () => {
    const { email } = useSelector(state => state.usersReducer)
    const { data: myToys, isLoading } = useGetUsersToyQuery(email)
    const [deleteToy] = useDeleteToyMutation()

    if (isLoading) {
        return <Loading />
    }

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })

        if (result.isConfirmed) {
            const data = await deleteToy(id)
            if (data?.data?.deletedCount == 1) {
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                )
            }
        }
    }

    return (
        <div className="container mx-auto my-5 md:my-10 p-4">
            <div className="overflow-x-auto">
                <h2 className="text-center text-4xl font-semibold mb-5 ">Manage Your Toys</h2>
                <table className="min-w-full text-center">
                    <thead>
                        <tr className="bg-gray-800 text-white">
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
