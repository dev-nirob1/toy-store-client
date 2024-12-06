import { toast } from "react-toastify";

const NewsLetter = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        if (email !== '') {
            e.target.email.value = ''
            return toast('Thanks for subscribe!')
        }
    }
    return (
        <section className="py-16 my-16 px-4 md:px-8 bg-slate-950 text-white mt-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Stay Updated</h2>
            <p className="text-base md:text-lg text-gray-200 mb-8">Subscribe to our newsletter for the latest toys, exclusive offers, and more!</p>

            <form onSubmit={handleSubmit} className="flex justify-center items-center">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 w-full md:w-1/3 text-slate-800 rounded-l-lg focus:outline-none"
                    required
                />
                <button type="submit" className="bg-orange-600 text-white font-medium px-6 py-3 rounded-r-lg hover:bg-orange-700 transition">
                    Subscribe
                </button>
            </form>

        </section>
    );
};

export default NewsLetter;