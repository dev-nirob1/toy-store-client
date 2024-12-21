import { toast } from "react-toastify";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Thanks For Your valuable Message!')
  }
    return (
        <div className="md:w-1/2 space-y-6 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700"></label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700"></label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter Your E-mail"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700"></label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit Message
          </button>
        </form>
      </div>
    );
};

export default Form;