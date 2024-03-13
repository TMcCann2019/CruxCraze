import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Area from './Area';

import 'mapbox-gl/dist/mapbox-gl.css';

function Locations({ areas }) {
    const [map, setMap] = useState(null);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoidG1jY2FubjIwMjQiLCJhIjoiY2x0bmN2ZDExMDViNjJrbnZubGl3eWtuYyJ9.zHRAh7uDESTOlIruNg6o5Q';
        const maps = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9, // starting zoom
        });
        setMap(() => maps);

        return () => maps.remove();
    }, []);

    useEffect(() => {
        if (map && areas.length > 0) {
            setLocations(areas);
        }
    }, [map, areas]);

    return (
        <div className="locations-container">
            <div className="locations-list">
                <h2>Locations</h2>
                <ul>
                    {locations.map(area => (
                        <Area key={area.id} area={area} />
                    ))}
                </ul>
            </div>
            <div id="map" className="map-container"></div>
        </div>
    );
}

export default Locations;