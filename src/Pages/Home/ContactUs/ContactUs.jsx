import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const ContactUs = () => {

    const position = [24.848171, 89.371607];
    return (
        <div className="container mx-auto my-10 h-screen w-full">
            <MapContainer className="h-screen" center={position} zoom={13} scrollWheelZoom={false}>
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
    );
};

export default ContactUs;