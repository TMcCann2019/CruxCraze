import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

function Locations({ areas }) {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
        return () => map.remove();
    }, []);

    useEffect(() => {
        if (areas.length > 0) {
            setLocations(areas);
        }
    }, [areas]);

    return (
        <div className="locations-container">
            <div className="locations-list">
                <h2>Locations</h2>
                <ul>
                    {locations.map(location => (
                        <li key={location.id}>
                            <h3>{location.name}</h3>
                            <p>{location.address}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="map" className="map-container"></div>
        </div>
    );
}

export default Locations;