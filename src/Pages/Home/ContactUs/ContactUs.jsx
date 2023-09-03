// import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const ContactUs = () => {

    const position = [24.848171, 89.371607];
    return (
        <div className="container mx-auto my-10 h-screen w-full bg-[#342F46]">
            <h2 className="text-center text-gray-100 text-4xl py-10 font-semibold">Contact us</h2>
            <div className="grid grid-cols-6 gap-4 my-auto mx-5">
                <div className="col-span-4">
                    <MapContainer className="h-full" center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                Bogura District
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                
                <div className="col-span-2">
                    <div className="bg-gray-50 shadow p-4 rounded shadow">
                        <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg btn-block hover:bg-blue-600 focus:outline-none">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
