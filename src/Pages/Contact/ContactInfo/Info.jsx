
const Info = () => {
    return (
        <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-lg text-gray-700">
          We would love to hear from you. Reach out to us through the following ways:
        </p>

        <ul className="space-y-4">
          <li className="flex items-center text-gray-700">
            <span className="material-icons">location_on</span>
            <span className="ml-2">123 ToyStore Avenue, ToyCity</span>
          </li>
          <li className="flex items-center text-gray-700">
            <span className="material-icons">phone</span>
            <span className="ml-2">(123) 456-7890</span>
          </li>
          <li className="flex items-center text-gray-700">
            <span className="material-icons">email</span>
            <span className="ml-2">contact@toystore.com</span>
          </li>
          <li className="flex items-center text-gray-700">
            <span className="material-icons">facebook</span>
            <span className="ml-2">/ToyStoreOfficial</span>
          </li>
        </ul>
      </div>
    );
};

export default Info;