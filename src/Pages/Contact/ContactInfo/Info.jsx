import { FaPhoneVolume } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Info = () => {
  return (
    <div className="md:w-1/2 space-y-6 relative">
      <div className="">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-800">Get in Touch</h2>
        <p className="md:text-lg text-gray-700 w-full md:w-3/4 mt-5">
          We would love to hear from you. Reach out to us through the following ways
        </p>

        <ul className="space-y-5 mt-8">
          <li className="flex items-center gap-2 text-gray-700">
            <p>
              <FaLocationDot size={25} />
            </p>
            <p className="ml-2">123 ToyStore Avenue, ToyCity</p>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <p>
              <FaPhoneVolume size={25} />
            </p>
            <p className="ml-2">(123) 456-7890</p>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <p>
              <SlEnvolopeLetter size={25} />
            </p>
            <p className="ml-2">contact@toystore.com</p>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <p>
              <FaFacebookSquare size={25} />
            </p>
            <p className="ml-2">/ToyStoreOfficial</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;