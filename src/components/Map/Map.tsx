import React from "react";

import { MapContainer, Marker, Circle, Popup, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";

import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

function Map() {
    const _onCreate = (e: any) => console.log(e);
    const _onEdited = (e: any) => console.log(e);
    const _onDeleted = (e: any) => console.log(e);

    return (
        <div className="leaflet-container border-solid border-2 border-green-600 shadow-lg">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <FeatureGroup>
                    <EditControl
                        position="topright"
                        onCreated={_onCreate}
                        onEdited={_onEdited}
                        onDeleted={_onDeleted}
                        draw={{
                            rectangle: false,
                            circle: false,
                            circlemarker: false,
                            polygon: false,
                        }} />
                </FeatureGroup>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}

export default Map;