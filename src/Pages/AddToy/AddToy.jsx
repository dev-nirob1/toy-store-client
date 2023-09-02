import { useState } from "react";

const AddToy = () => {

    const [toys, setToys] = useState([])

    const handleAddToy = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const toyURL = form.toyUrl.value;
        const category = form.category.value;
        const price = form.price.value;
        const ratings = form.price.value;
        const quantity = form.price.value;
        const description = form.description.value;
        // console.log(name, email, toyName, toyURL, category, price, ratings, quantity, description)


        const addToys = { name, email, toyName, toyURL, category, price, ratings, quantity, description }
        console.log(toys)

        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addToys)
        }
        )
            .then(res => res.json())
            .then(data => setToys(data))

    }



    return (
        <div className="container mx-auto border rounded shadow my-10">
            <h2 className="text-4xl text-gray-700 font-semibold mb-4 text-center mt-5">Add New Toy</h2>

            <form onSubmit={handleAddToy} className="p-10">
                <div className="grid grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Seller Name</label>
                        <input type="text" name="name" className="w-full p-2 border rounded" placeholder="Seller Name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                        <input type="email" name="email" className="w-full p-2 border rounded" placeholder="Email" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="toy-name" className="block text-sm font-medium mb-1">Toy Name</label>
                        <input type="text" name="toyName" className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="toy-url" className="block text-sm font-medium mb-1">Toy URL</label>
                        <input type="text" name="toyUrl" className="w-full p-2 border rounded" placeholder="Add Toy URL" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium mb-1">Sub-Category</label>
                        <select name="category" className="w-full p-2 border rounded">
                            <option value="racing">Racing Cars</option>
                            <option value="vintage">Vintage Cars</option>
                            <option value="off-road">Off-Road and Adventure Cars</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium mb-1">Price</label>
                        <input type="number" name="price" className="w-full p-2 border rounded" placeholder="Price" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="ratings" className="block text-sm font-medium mb-1">Ratings</label>
                        <input type="number" name="ratings" className="w-full p-2 border rounded" placeholder="rating out of 5"
                            step="0.1" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="quantity" className="block text-sm font-medium mb-1">Available Quantity</label>
                        <input type="number" name="quantity" className="w-full p-2 border rounded" placeholder="Available Quantity" />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium mb-1">Toy Description</label>
                    <textarea name="description" className="w-full p-2 border rounded"></textarea>
                </div>

                <div className="mt-6">
                    <input className="px-4 py-2 btn-block bg-blue-500 text-white rounded hover:bg-blue-600" type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;