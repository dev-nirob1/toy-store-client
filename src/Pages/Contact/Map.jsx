import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Title from '../../Components/Title';

const Map = () => {
    const position = [24.8477, 89.3710]

    return (
        <section>
            <div className="text-center mb-16">
                <Title title="Find Us on the Map" />
            </div>

            <div className="w-full h-72 md:h-[500px]">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-full">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>Bogura District, Bangladesh</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </section>
    );
};

export default Map;