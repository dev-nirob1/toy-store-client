import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const UpdateToy = () => {
    const toyInfo = useLoaderData()
    useTitle(`Update Info of ${toyInfo.toyName}`)

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedInfo = { price, quantity, description }
        console.log(updatedInfo)
        fetch(`https://toy-store-server-blond.vercel.app/update/${toyInfo._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="container mx-auto py-10 bg-base-200">
            <h3 className="text-center py-5 font-semibold text-4xl">{toyInfo.toyName}</h3>
            <div className="flex gap-5 w-3/4 mx-auto py-5">
                <img src={toyInfo.toyImage} className="max-w-sm rounded-lg shadow-2xl" />

                <div className="flex-1">
                    <form onSubmit={handleUpdateToy}>
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700 font-bold mb-2"> Price: </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                placeholder="Enter the updated price"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="availableQuantity" className="block text-gray-700 font-bold mb-2">
                                Available Quantity:
                            </label>
                            <input
                                type="number"
                                id="availableQuantity"
                                name="quantity"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Current quantity available"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="detailsDescription" className="block text-gray-700 font-bold mb-2"> Details Description:</label>
                            <textarea
                                id="detailsDescription"
                                name="description"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                placeholder="Update description"
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <input
                                type="submit"
                                value="Update"
                                className="bg-indigo-500 btn-block text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
  
    );
};

export default UpdateToy;