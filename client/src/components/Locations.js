import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import AreaContainer from './AreaContainer';
import styled from'styled-components';

import 'mapbox-gl/dist/mapbox-gl.css';

function Locations({ areas }) {
    const [map, setMap] = useState(null);
    const [locations, setLocations] = useState([]);
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredLocations, setFilteredLocations] = useState([])
    const [selectedFilters, setSelectedFilters] = useState({
        need_own_gear: false,
        retail_shop: false,
        fitness_area: false,
        lead_climbing: false,
        bouldering: false,
        moon_board: false,
        kilter_board: false
    })

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
            applyFilters(locations)
        } else {
            const filtered = locations.filter(area => area.name.toLowerCase().includes(searchQuery.toLowerCase()))
            applyFilters(filtered)
        }
    }, [searchQuery, locations])

    const applyFilters = (locationsToFilter) => {
        const filtered = locationsToFilter.filter(area => Object.keys(selectedFilters).every(key => {
            if (key === 'name') return true
            return !selectedFilters[key] || area[key]
        }))
        setFilteredLocations(filtered)
    }

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleFilterChange = (event) => {
        const {name, checked} = event.target
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [name]: checked
        }))
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
            <div>
                <h3>Filters:</h3>
                <label>
                    <input
                        type="checkbox"
                        name="need_own_gear"
                        checked={selectedFilters.need_own_gear}
                        onChange={handleFilterChange}
                    />
                    Need Own Gear
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="retail_shop"
                        checked={selectedFilters.retail_shop}
                        onChange={handleFilterChange}
                    />
                    Retail Shop
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="fitness_area"
                        checked={selectedFilters.fitness_area}
                        onChange={handleFilterChange}
                    />
                    Fitness Area
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="lead_climbing"
                        checked={selectedFilters.lead_climbing}
                        onChange={handleFilterChange}
                    />
                    Lead Climbing
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="bouldering"
                        checked={selectedFilters.bouldering}
                        onChange={handleFilterChange}
                    />
                    Bouldering
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="moon_board"
                        checked={selectedFilters.moon_board}
                        onChange={handleFilterChange}
                    />
                    Moon Board
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="kilter_board"
                        checked={selectedFilters.kilter_board}
                        onChange={handleFilterChange}
                    />
                    Kilter Board
                </label>
            </div>
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