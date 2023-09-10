
function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="mx-10">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4">
                <div className="mb-4 md:mb-0">
                    <img src="logo.png" alt="Toy Cars" className="w-28 md:ml-5" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                    <p className="text-sm md:text-lg">Email: info@toycarswebsite.com</p>
                    <p className="text-sm md:text-lg">Phone: +1 (123) 456-7890</p>
                    <p className="text-sm md:text-lg">Address: 123 Toy Street, Toyland</p>
                </div>
                <div className="mt-5 md:mt-0 ml-0 md:ml-10">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul>
                        <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
                        <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
                <div className="mt-5 md:mt-0">
                    <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                    <ul className="flex gap-3">
                        <li><a href="#" className="text-gray-400 hover:text-white"><img src="https://www.freeiconspng.com/thumbs/facebook-icon-png/image--facebook-icon--omori-wiki-12.png" alt="Facebook" className="w-6 h-6" /></a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white"><img src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png" alt="instagram" className="w-6 h-6" /></a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjq8hZUIQr6S2DpLL38yg_w6gXt9k8VHqNklCib8zBsg&s" alt="twitter" className="w-6 h-6" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>&copy; 2023 Toy Cars. All rights reserved.</p>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
