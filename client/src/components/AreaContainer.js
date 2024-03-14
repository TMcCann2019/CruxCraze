import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function AreaContainer({ area }) {
    const history = useHistory();

    const handleViewDetails = () => {
        history.push(`/locations/${area.id}`);
    };

    return (
        <Container>
            <Title>{area.name}</Title>
            <p>{area.difficulty}</p>
            <DetailsButton onClick={handleViewDetails}>View Details</DetailsButton>
        </Container>
    );
}

export default AreaContainer;

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    margin-bottom: 20px;
    background-image: url('https://gravityvault.com/img?f=_media/FLMG/Location_Pictures/GV_FLEMINGTON_NJ_17.jpg&w=350&h=250&r=fit')
`;

const Title = styled.h2`
    margin-bottom: 10px;
`;

const DetailsButton = styled.button`
    background-color: red;
    color: black;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
`;