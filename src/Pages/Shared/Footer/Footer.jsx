
function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="mx-10">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4">
                <div className="mb-4 md:mb-0">
                    <img src="logo.png" alt="Toy Cars" className="w-28 md:ml-5" />
                </div>
                <div className="space-y-1 text-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm md:text-base">Email: info@toycarswebsite.com</p>
                    <p className="text-sm md:text-base">Phone: +1 (123) 456-7890</p>
                    <p className="text-sm md:text-base">Address: 123 Toy Street, Toyland</p>
                </div>
                <div className="mt-5 md:mt-0 ml-0 md:ml-10 text-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul>
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Products</li>
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Contact Us</li>
                    </ul>
                </div>
                <div className="mt-5 md:mt-0">
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <ul className="flex gap-3">
                        <li><img src="https://www.freeiconspng.com/thumbs/facebook-icon-png/image--facebook-icon--omori-wiki-12.png" alt="Facebook" className="w-6 h-6" /></li>
                        <li><img src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png" alt="instagram" className="w-6 h-6" /></li>
                        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjq8hZUIQr6S2DpLL38yg_w6gXt9k8VHqNklCib8zBsg&s" alt="twitter" className="w-6 h-6" /></li>
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
