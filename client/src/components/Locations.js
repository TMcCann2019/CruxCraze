import React, { useEffect, useState } from 'react';
import mapboxgl, { DoubleClickZoomHandler } from 'mapbox-gl';
import AreaContainer from './AreaContainer';
import styled from'styled-components';

import 'mapbox-gl/dist/mapbox-gl.css';

function Locations({ areas }) {
    const [map, setMap] = useState(null);
    const [locations, setLocations] = useState([]);
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredLocations, setFilteredLocations] = useState([])

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoidG1jY2FubjIwMjQiLCJhIjoiY2x0bmN2ZDExMDViNjJrbnZubGl3eWtuYyJ9.zHRAh7uDESTOlIruNg6o5Q';
        const maps = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/tmccann2024/cltx93xbr005m01qucf73dqg4', // style URL
            center: [-74.4, 40.79], // starting position [lng, lat]
            zoom: 6, // starting zoom
        });
        setMap(() => maps);

        return () => maps.remove();
    }, []);

    useEffect(() => {
        if (map && areas.length > 0) {
            setLocations(areas);
        }
    }, [map, areas]);

    useEffect(() => {
        if (searchQuery.trim() === ''){
            setFilteredLocations(locations)
        } else {
            const filtered = locations.filter(area => area.name.toLowerCase().includes(searchQuery.toLowerCase()))
            setFilteredLocations(filtered)
        }
    }, [searchQuery, locations])

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
    }

    return (
        <LocationsContainer>
            <SearchBar>
                <input
                    type="text"
                    placeholder="Search locations..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </SearchBar>
            <LocationsList>
                <h2>Locations</h2>
                <ul>
                    {filteredLocations.map(area => (
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
    height: 600px;
`;

const SearchBar = styled.div`
    margin-bottom: 20px;
`;