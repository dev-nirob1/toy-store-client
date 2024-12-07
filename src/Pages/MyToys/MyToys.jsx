import MyToysData from "./MyToysData";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useDeleteToyMutation, useGetUsersToyQuery } from "../../redux/features/toysApi";
import Loading from "../../Components/Loading/Loading";
import Title from "../../Components/Title";
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {
    useTitle('My Toys')

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
            <div className="text-center mb-6">
                <Title title="Manage Your Toys" />
            </div>
            <div className="overflow-x-scroll">
                <table className="w-full text-center whitespace-nowrap text-[12px] md:text-base">
                    <thead>
                        <tr className="bg-slate-900 text-white">
                            <th className="p-3">Serial</th>
                            <th className="p-3">Toy Name</th>
                            <th className="p-3">Category</th>
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
