
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <img src="logo.png" alt="Toy Cars" className="w-20 h-20 md:w-24 md:h-24" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>Email: info@toycarswebsite.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul>
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <ul className="flex justify-center md:justify-start">
            <li><a href="#" className="text-gray-400 hover:text-white"><img src="facebook-icon.png" alt="Facebook" className="w-6 h-6" /></a></li>
            <li><a href="#" className="text-gray-400 hover:text-white"><img src="twitter-icon.png" alt="Twitter" className="w-6 h-6" /></a></li>
            <li><a href="#" className="text-gray-400 hover:text-white"><img src="instagram-icon.png" alt="Instagram" className="w-6 h-6" /></a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2023 Toy Cars. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
