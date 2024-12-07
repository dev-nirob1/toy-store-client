import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Title from '../../Components/Title';

const Map = () => {
    return (
        <section>
            <div className="text-center mb-16">
                <Title title="Find Us on the Map" />
            </div>

            <div className="w-full h-72 md:h-[500px]">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="w-full h-full">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            ToyStore Location
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </section>
    );
};

export default Map;