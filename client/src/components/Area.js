import React, {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import ReviewsContainer from './ReviewsContainer'
import styled from'styled-components'
import NewReviewForm from './NewReviewForm'

function Area({areas}){
    const history = useHistory()
    const {id} = useParams()
    const [addingReview, setAddingReview] = useState(false)

    const area = areas.find(area => area.id === parseInt(id))

    if (!area){
        return <div>Area not found</div>
    }

    const handleAddReview = () => {
        setAddingReview(true)
    }

    return (
        <>
            <Container>
                <h2>Area</h2>
                <p>{area.name}</p>
                <p>Difficulty: {area.difficulty}</p>
                <p>Address: {area.address}</p>
                <p>Need your own gear? {area.need_own_gear}</p>
                <p>Has a retail shop? {area.retail_shop}</p>
                <p>Is there a fitness area? {area.fitness_area}</p>
                <p>Can you lead climb here? {area.lead_climbing}</p>
                <p>Is there bouldering available? {area.bouldering}</p>
                <p>Is there a moon board/tension board? {area.moon_board}</p>
                <p>Is there a kilter board? {area.kilter_board}</p>
                <BackButton onClick={history.goBack}>Back</BackButton>
                <AddReviewButton onClick={handleAddReview}>Add Review</AddReviewButton>
            </Container>
            {addingReview && (<NewReviewForm />)}
            <ReviewsContainer />
        </>
    )
}

export default Area

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    margin-bottom: 20px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url('https://gravityvault.com/img?f=_media/FLMG/Location_Pictures/GV_FLEMINGTON_NJ_17.jpg&w=350&h=250&r=fit') right;
    background-size: cover;
`;

const AddReviewButton = styled.button`
    background-color: #007bff; 
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3; 
    }
`;

const BackButton = styled(AddReviewButton)`
    background-color: #6c757d;
    &:hover {
        background-color: #5a6268;
    }
`;