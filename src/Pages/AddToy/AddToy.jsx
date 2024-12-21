import { useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSetToyMutation } from "../../redux/features/toysApi";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Title from "../../Components/Title";

const AddToy = () => {
    useTitle('Add Toy')
    const { email, name } = useSelector(state => state.usersReducer)
    const [error, setError] = useState('')
    const [setToy, { isLoading, data }] = useSetToyMutation()

    const handleAddToy = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const toyImage = form.toyUrl.value;
        const category = form.category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        if ((ratings > 5) || (ratings <= 0)) {
            setError('Please Input ratings value 1 to 5 and do not add negative value')
            return
        }

        if (toyName === '' || toyImage === '' || quantity === '' || price === '' || email === '' || description === '') {
            toast.error('Please Fill All Those Fields First ')
            return
        }
        setError('')
        const toy = { name, email, toyName, toyImage, category, price, ratings, quantity, description }
        setToy(toy)
        
        if (data?.acknowledged) {
            Navigate('/')
            return toast('Toy Added')
        }
    }


    return (
        <div className="py-10 bg-gradient-to-tr from-slate-200 to-slate-100">
            <div className="container w-11/12 mx-auto border md:w-3/4 bg-white rounded shadow-lg">
                <div>
                    <div className="text-center underline pt-5">
                        <Title title="Add Toy"/>
                    </div>

                    <form onSubmit={handleAddToy} className="p-5 md:p-10 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="mb-0 md:mb-4">
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Seller Name</label>
                                <input type="text" name="name" defaultValue={name} className="w-full p-2 border rounded cursor-not-allowed" disabled placeholder="Seller Name" />
                            </div>
                            <div className="mb-0 md:mb-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                                <input type="email" name="email" defaultValue={email} className="w-full p-2 border rounded cursor-not-allowed" disabled placeholder="Email" />
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
                                    <option value="Cars">Cars</option>
                                    <option value="Learn & Play">Learn & Play</option>
                                    <option value="Dolls">Dolls</option>
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
                        <p className="text-red-600 font-bold text-center">{error}</p>
                        <div className="mt-6">
                            <input className="px-4 py-2 cursor-pointer btn-block bg-indigo-500 text-white rounded hover:bg-indigo-600" type="submit" value={isLoading ? "Adding..." : "Add Toy"} />
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddToy;