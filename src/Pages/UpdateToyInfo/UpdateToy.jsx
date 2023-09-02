import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
    const toyInfo = useLoaderData()
    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedInfo = { price, quantity, description }
        console.log(updatedInfo)

        fetch(`http://localhost:5000/update/${toyInfo._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedInfo)
        })
        .then(res =>res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <div className="container mx-auto my-8">
                <h1 className="text-2xl font-semibold mb-4 text-center">Update Information : {toyInfo.toyName}</h1>
                <form className="w-full max-w-md mx-auto"
                    onSubmit={handleUpdateToy}
                >
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
                            placeholder="Specify the current quantity available"
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
                            className="bg-blue-500 btn-block text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;