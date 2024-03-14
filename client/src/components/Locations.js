import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import AreaContainer from './AreaContainer';
import styled from'styled-components';

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
        <LocationsContainer>
            <LocationsList>
                <h2>Locations</h2>
                <ul>
                    {locations.map(area => (
                        <AreaContainer key={area.id} area={area} />
                    ))}
                </ul>
            </LocationsList>
            <MapContainer id="map"></MapContainer>
        </LocationsContainer>
    );
}

export default Locations;

const LocationsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-image: url('https://i.redd.it/ygeh5h7jofj71.png');
    background-size: cover;
    background-position: center;
    color: white
`;

const LocationsList = styled.div`
    flex: 1;
    padding-right: 20px;
`;

const MapContainer = styled.div`
    flex: 1;
    height: 400px;
`;