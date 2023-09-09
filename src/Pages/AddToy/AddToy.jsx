import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToy = () => {
    useTitle('Add Toy')
    const { user } = useContext(AuthContext)

    const handleAddToy = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const toyImage = form.toyUrl.value;
        const SubCategory = form.category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        if(toyName === '' || toyImage === ''){
            toast('Please Fill All Those Fields First ')
        }
        if (ratings > 5) {
            toast('Please add ratings equal or under 5')
            return
        }
        else if (ratings <= 0) {
            toast('Please add Ratings value 1-5')
            return
        }

        const addToys = { name, email, toyName, toyImage, SubCategory, price, ratings, quantity, description }

        fetch('https://toy-store-server-blond.vercel.app/toys', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addToys)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Toy added SuccessFully')
                    form.reset()
                }
            })
    }

    return (
        <div className=" py-10 bg-gradient-to-tr from-slate-200 to-slate-100">
            <div className="container w-11/12 mx-auto border md:w-3/4 bg-white rounded shadow-lg">
                <div>
                    <h2 className="text-4xl text-gray-700 font-semibold mb-4 text-center pt-5 underline">Add Your Toy</h2>

                    <form onSubmit={handleAddToy} className="p-5 md:p-10 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="mb-0 md:mb-4">
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Seller Name</label>
                                <input type="text" name="name" defaultValue={user && user.displayName} className="w-full p-2 border rounded" placeholder="Seller Name" />
                            </div>
                            <div className="mb-0 md:mb-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                                <input type="email" name="email" defaultValue={user && user.email} className="w-full p-2 border rounded" placeholder="Email" />
                            </div>

                            <div className="mb-0 md:mb-4">
                                <label htmlFor="toy-name" className="block text-sm font-medium mb-1">Toy Name</label>
                                <input type="text" name="toyName" className="w-full p-2 border rounded" placeholder="Toy Name" />
                            </div>
                            <div className="mb-0 md:mb-4">
                                <label htmlFor="toy-url" className="block text-sm font-medium mb-1">Toy URL</label>
                                <input type="text" name="toyUrl" className="w-full p-2 border rounded" placeholder="Add Toy URL" />
                            </div>

                            <div className="mb-0 md:mb-4">
                                <label htmlFor="category" className="block text-sm font-medium mb-1">Sub-Category</label>
                                <select name="category" className="w-full p-2 border rounded">
                                    <option value="Racing Cars">Racing Cars</option>
                                    <option value="Vintage Cars">Vintage Cars</option>
                                    <option value="Police Cars">Police Cars</option>
                                </select>
                            </div>

                            <div className="mb-0 md:mb-4">
                                <label htmlFor="price" className="block text-sm font-medium mb-1">Price</label>
                                <input type="number" name="price" className="w-full p-2 border rounded" placeholder="Price" />
                            </div>

                            <div className="mb-0 md:mb-4">
                                <label htmlFor="ratings" className="block text-sm font-medium mb-1">Ratings</label>
                                <input type="number" name="ratings" className="w-full p-2 border rounded" placeholder="rating out of 5"
                                    step="0.1" />
                            </div>

                            <div className="mb-0 md:mb-4">
                                <label htmlFor="quantity" className="block text-sm font-medium mb-1">Available Quantity</label>
                                <input type="number" name="quantity" className="w-full p-2 border rounded" placeholder="Available Quantity" />
                            </div>
                        </div>

                        <div className="mb-0 md:mb-4">
                            <label htmlFor="description" className="block text-sm font-medium mb-1">Toy Description</label>
                            <textarea name="description" className="w-full p-2 border rounded" placeholder="About Your Toy"></textarea>
                        </div>

                        <div className="mt-6">
                            <input className="px-4 py-2 btn-block bg-indigo-500 text-white rounded hover:bg-indigo-600" type="submit" value="Add Toy" />
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddToy;